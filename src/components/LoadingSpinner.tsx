'use client';

import { cn } from '@/lib/utils';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'primary' | 'secondary';
  className?: string;
  text?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  variant = 'default',
  className = '',
  text,
}) => {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-6 w-6',
    lg: 'h-8 w-8',
    xl: 'h-12 w-12',
  };

  const variantClasses = {
    default: 'text-foreground',
    primary: 'text-primary',
    secondary: 'text-muted-foreground',
  };

  const spinnerSize = {
    sm: 'border-2',
    md: 'border-2',
    lg: 'border-3',
    xl: 'border-4',
  };

  return (
    <div className={cn('flex items-center justify-center', className)}>
      <div
        className={cn(
          'animate-spin rounded-full border-solid border-current border-t-transparent',
          sizeClasses[size],
          spinnerSize[size],
          variantClasses[variant]
        )}
        aria-hidden="true"
      />
      {text && (
        <span className={cn('ml-2 text-sm', variantClasses[variant])}>
          {text}
        </span>
      )}
    </div>
  );
};

// Loading Card component for content areas
interface LoadingCardProps {
  lines?: number;
  className?: string;
}

export const LoadingCard: React.FC<LoadingCardProps> = ({
  lines = 3,
  className = '',
}) => {
  return (
    <div className={cn('animate-pulse space-y-4', className)}>
      <div className="h-4 bg-muted rounded w-3/4"></div>
      {Array.from({ length: lines - 1 }).map((_, i) => (
        <div key={i} className="h-4 bg-muted rounded"></div>
      ))}
      <div className="h-4 bg-muted rounded w-1/2"></div>
    </div>
  );
};

// Full page loading overlay
interface LoadingOverlayProps {
  message?: string;
  show?: boolean;
}

export const LoadingOverlay: React.FC<LoadingOverlayProps> = ({
  message = 'Indlæser...',
  show = true,
}) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-card border border-border rounded-lg p-6 shadow-lg max-w-sm w-full mx-4">
        <div className="text-center">
          <LoadingSpinner size="lg" className="mx-auto mb-4" />
          <p className="text-muted-foreground">{message}</p>
        </div>
      </div>
    </div>
  );
};

// Suspense wrapper with loading fallback
interface SuspenseWrapperProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export const SuspenseWrapper: React.FC<SuspenseWrapperProps> = ({
  children,
  fallback,
}) => {
  return (
    <div className="relative">
      {children}
      {fallback && (
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center">
          {fallback}
        </div>
      )}
    </div>
  );
};

export default LoadingSpinner;