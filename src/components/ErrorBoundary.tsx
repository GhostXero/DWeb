'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
import { AppError, ErrorBoundaryState } from '@/types';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      error: {
        code: 'COMPONENT_ERROR',
        message: error.message,
        stack: error.stack,
        details: error
      }
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error to error reporting service
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    
    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // Here you could send the error to an error tracking service
    // this.logErrorToService(error, errorInfo);
  }

  private logErrorToService = (error: Error, errorInfo: ErrorInfo) => {
    // Example: Send to error tracking service
    const errorData = {
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href
    };

    // Send to your error tracking service
    // fetch('/api/log-error', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(errorData)
    // });
  };

  private handleReload = () => {
    window.location.reload();
  };

  private handleGoHome = () => {
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen flex items-center justify-center bg-background p-4">
          <div className="max-w-md w-full text-center space-y-6">
            {/* Error Icon */}
            <div className="flex justify-center">
              <div className="p-3 bg-destructive/10 rounded-full">
                <AlertTriangle className="h-12 w-12 text-destructive" />
              </div>
            </div>

            {/* Error Title */}
            <div className="space-y-2">
              <h1 className="text-2xl font-bold text-foreground">
                Noget gik galt
              </h1>
              <p className="text-muted-foreground">
                Vi beklager, men der opstod en uventet fejl. Vores tekniske team er blevet underrettet.
              </p>
            </div>

            {/* Error Details (Development Only) */}
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <div className="bg-muted p-4 rounded-lg text-left">
                <p className="text-sm font-mono text-muted-foreground mb-2">
                  Fejl: {this.state.error.message}
                </p>
                {this.state.error.stack && (
                  <details className="text-sm">
                    <summary className="cursor-pointer text-muted-foreground hover:text-foreground">
                      Stack Trace
                    </summary>
                    <pre className="mt-2 text-xs text-muted-foreground overflow-x-auto">
                      {this.state.error.stack}
                    </pre>
                  </details>
                )}
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button onClick={this.handleReload} className="flex items-center gap-2">
                <RefreshCw className="h-4 w-4" />
                Genindlæs siden
              </Button>
              <Button 
                onClick={this.handleGoHome} 
                variant="outline"
                className="flex items-center gap-2"
              >
                <Home className="h-4 w-4" />
                Gå til forsiden
              </Button>
            </div>

            {/* Contact Support */}
            <div className="text-sm text-muted-foreground">
              <p>
                Problemet fortsætter? Kontakt os på{' '}
                <a 
                  href="tel:+4575954422" 
                  className="text-primary hover:underline"
                >
                  +45 75 95 44 22
                </a>
              </p>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Hook-based error boundary for functional components
export const useErrorHandler = () => {
  const [error, setError] = React.useState<AppError | null>(null);

  const resetError = () => setError(null);

  const captureError = (error: Error) => {
    setError({
      code: 'HOOK_ERROR',
      message: error.message,
      stack: error.stack,
      details: error
    });
  };

  React.useEffect(() => {
    if (error) {
      // Log error to error tracking service
      console.error('Error caught by hook:', error);
    }
  }, [error]);

  return { error, resetError, captureError };
};

// Component for handling async errors
export const AsyncErrorHandler: React.FC<{
  children: ReactNode;
  fallback?: ReactNode;
}> = ({ children, fallback }) => {
  const { error, resetError } = useErrorHandler();

  if (error) {
    return fallback || (
      <div className="p-4 border border-destructive/20 bg-destructive/5 rounded-lg">
        <div className="flex items-center gap-2 text-destructive">
          <AlertTriangle className="h-4 w-4" />
          <span className="text-sm font-medium">Operation failed</span>
        </div>
        <p className="text-sm text-muted-foreground mt-1">{error.message}</p>
        <Button 
          size="sm" 
          variant="outline" 
          onClick={resetError}
          className="mt-2"
        >
          Prøv igen
        </Button>
      </div>
    );
  }

  return <>{children}</>;
};

export default ErrorBoundary;