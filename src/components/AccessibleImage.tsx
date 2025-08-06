'use client';

import Image from 'next/image';
import { useState } from 'react';

interface AccessibleImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
  priority?: boolean;
  loading?: 'lazy' | 'eager';
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  sizes?: string;
  quality?: number;
  onLoad?: () => void;
  onError?: () => void;
  role?: string;
  ariaLabel?: string;
  ariaDescribedBy?: string;
}

export const AccessibleImage: React.FC<AccessibleImageProps> = ({
  src,
  alt,
  width,
  height,
  fill,
  className = '',
  priority = false,
  loading = 'lazy',
  placeholder = 'empty',
  blurDataURL,
  sizes,
  quality = 75,
  onLoad,
  onError,
  role,
  ariaLabel,
  ariaDescribedBy,
}) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleLoad = () => {
    setImageLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setImageError(true);
    onError?.();
  };

  // Generate fallback alt text if none provided
  const generateAltText = () => {
    if (alt.trim()) return alt;
    
    // Extract descriptive text from image filename
    const filename = src.split('/').pop()?.split('.')[0] || 'Image';
    return filename.replace(/[-_]/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  };

  const finalAlt = generateAltText();

  const imageProps = {
    src,
    alt: finalAlt,
    width,
    height,
    fill,
    className: `${className} ${imageLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`,
    priority,
    loading,
    placeholder,
    blurDataURL,
    sizes,
    quality,
    onLoad: handleLoad,
    onError: handleError,
    role: role || 'img',
    'aria-label': ariaLabel || undefined,
    'aria-describedby': ariaDescribedBy || undefined,
  };

  if (imageError) {
    return (
      <div 
        className={`bg-muted border border-border rounded-lg flex items-center justify-center ${fill ? 'absolute inset-0' : ''} ${className}`}
        style={fill ? {} : { width, height }}
        role="img"
        aria-label={finalAlt}
      >
        <div className="text-center p-4">
          <div className="text-4xl mb-2">🖼️</div>
          <p className="text-sm text-muted-foreground">Image could not be loaded</p>
          <p className="text-xs text-muted-foreground mt-1">{finalAlt}</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Image 
        {...imageProps} 
        alt={finalAlt}
      />
      {!imageLoaded && (
        <div 
          className={`bg-muted border border-border rounded-lg flex items-center justify-center ${fill ? 'absolute inset-0' : ''} ${className}`}
          style={fill ? {} : { width, height }}
          aria-hidden="true"
        >
          <div className="animate-pulse">
            <div className="w-8 h-8 bg-muted-foreground/20 rounded-full mb-2"></div>
            <div className="w-16 h-2 bg-muted-foreground/20 rounded"></div>
          </div>
        </div>
      )}
    </>
  );
};

export default AccessibleImage;