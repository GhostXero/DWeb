// In-memory rate limiting store
// Note: For production, consider using Redis or another distributed cache
interface RateLimitEntry {
  count: number;
  resetTime: number;
}

const rateLimitStore = new Map<string, RateLimitEntry>();

// Clean up expired entries periodically
const cleanupInterval = 60000; // 1 minute
setInterval(() => {
  const now = Date.now();
  for (const [key, entry] of rateLimitStore.entries()) {
    if (entry.resetTime < now) {
      rateLimitStore.delete(key);
    }
  }
}, cleanupInterval);

/**
 * Rate limiting utility function
 * @param identifier - Unique identifier for the client (IP address, user ID, etc.)
 * @param limit - Maximum number of requests allowed
 * @param windowMs - Time window in milliseconds
 * @returns true if request is allowed, false if rate limited
 */
export function rateLimit(
  identifier: string, 
  limit: number = 5, 
  windowMs: number = 60000
): boolean {
  const now = Date.now();
  const entry = rateLimitStore.get(identifier);

  // If no entry exists or window has expired, create new entry
  if (!entry || entry.resetTime < now) {
    rateLimitStore.set(identifier, {
      count: 1,
      resetTime: now + windowMs
    });
    return true;
  }

  // If within window and under limit, increment count
  if (entry.count < limit) {
    entry.count++;
    return true;
  }

  // Rate limited
  return false;
}

/**
 * Get rate limit status for a client
 * @param identifier - Unique identifier for the client
 * @returns Object with current count and reset time
 */
export function getRateLimitStatus(identifier: string): {
  count: number;
  limit: number;
  remaining: number;
  resetTime: number;
  resetTimeInSeconds: number;
} | null {
  const entry = rateLimitStore.get(identifier);
  const now = Date.now();

  if (!entry || entry.resetTime < now) {
    return null;
  }

  return {
    count: entry.count,
    limit: 5, // Default limit
    remaining: Math.max(0, 5 - entry.count),
    resetTime: entry.resetTime,
    resetTimeInSeconds: Math.ceil((entry.resetTime - now) / 1000)
  };
}

/**
 * Reset rate limit for a client (for testing or admin purposes)
 * @param identifier - Unique identifier for the client
 */
export function resetRateLimit(identifier: string): void {
  rateLimitStore.delete(identifier);
}

/**
 * Get all active rate limit entries (for monitoring)
 * @returns Array of active rate limit entries
 */
export function getAllRateLimits(): Array<{
  identifier: string;
  count: number;
  resetTime: number;
}> {
  const now = Date.now();
  const entries: Array<{
    identifier: string;
    count: number;
    resetTime: number;
  }> = [];

  for (const [identifier, entry] of rateLimitStore.entries()) {
    if (entry.resetTime > now) {
      entries.push({
        identifier,
        count: entry.count,
        resetTime: entry.resetTime
      });
    }
  }

  return entries;
}

/**
 * Middleware-compatible rate limiter for Next.js API routes
 */
export function createRateLimitMiddleware(options: {
  limit?: number;
  windowMs?: number;
  keyGenerator?: (req: NextRequest) => string;
} = {}) {
  const {
    limit = 5,
    windowMs = 60000,
    keyGenerator = (req: NextRequest) => {
      return req.ip || 
             req.headers.get('x-forwarded-for') || 
             req.headers.get('x-real-ip') || 
             'unknown';
    }
  } = options;

  return (req: NextRequest) => {
    const key = keyGenerator(req);
    const isAllowed = rateLimit(key, limit, windowMs);
    const status = getRateLimitStatus(key);

    return {
      isAllowed,
      status,
      headers: {
        'X-RateLimit-Limit': limit.toString(),
        'X-RateLimit-Remaining': status?.remaining.toString() || limit.toString(),
        'X-RateLimit-Reset': status?.resetTimeInSeconds.toString() || '0'
      }
    };
  };
}

// Pre-configured rate limiters for different use cases
export const rateLimiters = {
  // Strict rate limiting for authentication endpoints
  auth: (identifier: string) => rateLimit(identifier, 3, 300000), // 3 per 5 minutes
  
  // Moderate rate limiting for forms
  form: (identifier: string) => rateLimit(identifier, 5, 300000), // 5 per 5 minutes
  
  // Lenient rate limiting for API endpoints
  api: (identifier: string) => rateLimit(identifier, 100, 60000), // 100 per minute
  
  // Very strict rate limiting for sensitive operations
  sensitive: (identifier: string) => rateLimit(identifier, 2, 300000), // 2 per 5 minutes
};