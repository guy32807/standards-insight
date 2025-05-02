import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import { getImagePath } from '../constants/paths';

interface HeroProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  height?: string;
  overlay?: boolean;
}

const HeroContainer = styled.div<{ $height?: string }>`
  position: relative;
  width: 100%;
  height: ${props => props.$height || '500px'};
  margin-bottom: 3rem;
`;

const HeroImage = styled.div<{ $imageSrc: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.$imageSrc});
  background-size: cover;
  background-position: center;
  z-index: 1;
`;

const Overlay = styled.div<{ $overlay?: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, ${props => props.$overlay ? 0.5 : 0.3});
  z-index: 2;
`;

const ContentContainer = styled.div`
  position: relative;
  z-index: 3;
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
`;

const Content = styled.div`
  color: white;
  max-width: 600px;
`;

const HeroTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  imageSrc,
  imageAlt,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  height,
  overlay = true
}) => {
  // Process image path
  const processedImageSrc = getImagePath(imageSrc);
  
  return (
    <HeroContainer $height={height}>
      <HeroImage $imageSrc={processedImageSrc} aria-label={imageAlt} />
      <Overlay $overlay={overlay} />
      <ContentContainer>
        <Content>
          <HeroTitle>{title}</HeroTitle>
          <HeroSubtitle>{subtitle}</HeroSubtitle>
          <ButtonContainer>
            <Button 
              variant="primary" 
              size="large" 
              to={primaryButtonLink}
              external={primaryButtonLink.startsWith('http')}
            >
              {primaryButtonText}
            </Button>
            
            {secondaryButtonText && secondaryButtonLink && (
              <Button 
                variant="outline" 
                size="large" 
                to={secondaryButtonLink}
                external={secondaryButtonLink.startsWith('http')}
              >
                {secondaryButtonText}
              </Button>
            )}
          </ButtonContainer>
        </Content>
      </ContentContainer>
    </HeroContainer>
  );
};

export default Hero;