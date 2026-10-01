import React, { useState } from 'react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackComponent?: React.ReactNode;
  aspectRatioClass?: string;
  className?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  fallbackComponent,
  aspectRatioClass = 'aspect-[16/10]',
  className = '',
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  if (hasError && fallbackComponent) {
    return <>{fallbackComponent}</>;
  }

  return (
    <div className={`relative overflow-hidden bg-[#EEF5F6] ${aspectRatioClass} ${className}`}>
      {/* Skeleton loader shimmer before image arrives */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gradient-to-r from-[#EBF3F4] via-[#F4F9FA] to-[#EBF3F4] animate-pulse" />
      )}

      <img
        src={src}
        alt={alt}
        loading="lazy"
        referrerPolicy="no-referrer"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        {...props}
      />
    </div>
  );
};
