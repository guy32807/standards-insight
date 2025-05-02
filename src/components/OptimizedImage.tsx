import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: string;
  height?: string;
  className?: string;
  loadingColor?: string;
}

const ImageContainer = styled.div<{
  $width?: string;
  $height?: string;
}>`
  width: ${props => props.$width || 'auto'};
  height: ${props => props.$height || 'auto'};
  position: relative;
  overflow: hidden;
`;

const StyledImage = styled.img<{
  $isLoaded: boolean;
}>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: ${props => (props.$isLoaded ? 1 : 0)};
  transition: opacity 0.3s ease;
`;

const Placeholder = styled.div<{
  $width?: string;
  $height?: string;
  $color?: string;
}>`
  width: ${props => props.$width || '100%'};
  height: ${props => props.$height || '100%'};
  background-color: ${props => props.$color || '#f0f0f0'};
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className,
  loadingColor = '#f0f0f0'
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Reset state when src changes
    setIsLoaded(false);
    setHasError(false);
  }, [src]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
  };

  return (
    <ImageContainer $width={width} $height={height} className={className}>
      {!isLoaded && !hasError && (
        <Placeholder $width={width} $height={height} $color={loadingColor}>
          <div></div>
        </Placeholder>
      )}

      {hasError ? (
        <Placeholder $width={width} $height={height} $color="#f8d7da">
          <div>Image not available</div>
        </Placeholder>
      ) : (
        <StyledImage
          src={src}
          alt={alt}
          onLoad={handleLoad}
          onError={handleError}
          $isLoaded={isLoaded}
        />
      )}
    </ImageContainer>
  );
};

export default OptimizedImage;