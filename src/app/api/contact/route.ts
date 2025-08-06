import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { rateLimit } from '@/lib/rate-limit';

// Define validation schema using Zod
const contactSchema = z.object({
  name: z.string()
    .min(2, 'Navn skal være mindst 2 tegn')
    .max(100, 'Navn må ikke være længere end 100 tegn')
    .regex(/^[a-zA-ZæøåÆØÅ\s-]+$/, 'Navn må kun indeholde bogstaver, mellemrum og bindestreg'),
  company: z.string()
    .max(100, 'Virksomhedsnavn må ikke være længere end 100 tegn')
    .optional(),
  email: z.string()
    .email('Indtast en gyldig email adresse')
    .min(5, 'Email skal være mindst 5 tegn')
    .max(100, 'Email må ikke være længere end 100 tegn'),
  phone: z.string()
    .min(8, 'Telefonnummer skal være mindst 8 tegn')
    .max(20, 'Telefonnummer må ikke være længere end 20 tegn')
    .regex(/^[\d\s\+\-\(\)]+$/, 'Telefonnummer må kun indeholde tal, mellemrum, +, - og ()'),
  service: z.string()
    .max(50, 'Service valg må ikke være længere end 50 tegn')
    .optional(),
  message: z.string()
    .min(10, 'Besked skal være mindst 10 tegn')
    .max(2000, 'Besked må ikke være længere end 2000 tegn')
    .trim()
});

// Type for the validated data
export type ContactFormData = z.infer<typeof contactSchema>;

// Error response type
interface ErrorResponse {
  success: false;
  errors: Record<string, string[]>;
  message: string;
}

// Success response type
interface SuccessResponse {
  success: true;
  message: string;
  data: {
    id: string;
    timestamp: string;
  };
}

export async function POST(request: NextRequest) {
  try {
    // Apply rate limiting
    const clientIP = request.ip || 
                   request.headers.get('x-forwarded-for') || 
                   request.headers.get('x-real-ip') || 
                   'unknown';
    
    if (!rateLimit(clientIP, 3, 300000)) { // 3 requests per 5 minutes
      return NextResponse.json<ErrorResponse>(
        {
          success: false,
          errors: {},
          message: 'For mange anmodninger. Prøv venligst igen om 5 minutter.'
        },
        { status: 429 }
      );
    }

    // Parse and validate request body
    const body = await request.json();
    
    // Validate input data
    const validationResult = contactSchema.safeParse(body);
    
    if (!validationResult.success) {
      // Zod validation errors are in the 'issues' array
      const errors = validationResult.error?.issues || [];
      
      // Format Zod errors for client response
      const formattedErrors = errors.reduce((acc, error) => {
        if (error && error.path && Array.isArray(error.path)) {
          const field = error.path.join('.');
          if (!acc[field]) {
            acc[field] = [];
          }
          acc[field].push(error.message || 'Ugyldig værdi');
        }
        return acc;
      }, {} as Record<string, string[]>);

      return NextResponse.json<ErrorResponse>(
        {
          success: false,
          errors: formattedErrors,
          message: 'Valideringsfejl. Kontroller venligst dine indtastninger.'
        },
        { status: 400 }
      );
    }

    const validatedData: ContactFormData = validationResult.data;

    // Here you would typically:
    // 1. Save to database
    // 2. Send email notification
    // 3. Create ticket in CRM system
    // 4. Log the submission

    // Example: Save to database (placeholder)
    // const contactSubmission = await prisma.contactSubmission.create({
    //   data: {
    //     ...validatedData,
    //     ip: clientIP,
    //     userAgent: request.headers.get('user-agent'),
    //     status: 'new'
    //   }
    // });

    // Example: Send email (placeholder)
    // await sendContactEmail(validatedData);

    // Log the submission for debugging
    console.log('Contact form submission:', {
      ...validatedData,
      ip: clientIP,
      timestamp: new Date().toISOString()
    });

    // Return success response
    return NextResponse.json<SuccessResponse>({
      success: true,
      message: 'Tak for din henvendelse! Vi kontakter dig snarest muligt.',
      data: {
        id: `contact_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        timestamp: new Date().toISOString()
      }
    });

  } catch (error) {
    console.error('Contact form submission error:', error);

    // Handle different types of errors
    if (error instanceof SyntaxError) {
      return NextResponse.json<ErrorResponse>(
        {
          success: false,
          errors: {},
          message: 'Ugyldigt JSON format. Kontroller venligst din anmodning.'
        },
        { status: 400 }
      );
    }

    // Generic server error
    return NextResponse.json<ErrorResponse>(
      {
        success: false,
        errors: {},
        message: 'Der opstod en serverfejl. Prøv venligst igen senere.'
      },
      { status: 500 }
    );
  }
}

// Handle other HTTP methods
export async function GET() {
  return NextResponse.json<ErrorResponse>(
    {
      success: false,
      errors: {},
      message: 'Metode ikke tilladt. Brug POST til at sende kontaktformular.'
    },
    { status: 405 }
  );
}