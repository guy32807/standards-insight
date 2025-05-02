import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
  variant?: 'light' | 'dark';
  withText?: boolean;
}

const LogoContainer = styled(Link)<{ $size: string; $variant: string }>`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

const LogoIcon = styled.div<{ $size: string; $variant: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => {
    switch(props.$size) {
      case 'small': return '32px';
      case 'large': return '64px';
      default: return '48px';
    }
  }};
  height: ${props => {
    switch(props.$size) {
      case 'small': return '32px';
      case 'large': return '64px';
      default: return '48px';
    }
  }};
`;

const LogoSvg = styled.svg<{ $variant: string }>`
  width: 100%;
  height: 100%;
`;

const LogoText = styled.div<{ $size: string; $variant: string }>`
  margin-left: 12px;
  font-weight: 700;
  color: ${props => props.$variant === 'light' ? '#fff' : 'var(--primary-color)'};
  font-size: ${props => {
    switch(props.$size) {
      case 'small': return '18px';
      case 'large': return '28px';
      default: return '22px';
    }
  }};
`;

const Logo: React.FC<LogoProps> = ({ 
  size = 'medium',
  variant = 'dark',
  withText = true
}) => {
  return (
    <LogoContainer to="/" $size={size} $variant={variant}>
      <LogoIcon $size={size} $variant={variant}>
        <LogoSvg 
          $variant={variant}
          viewBox="0 0 120 120" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Document/standard icon with checkmark */}
          <rect 
            x="30" 
            y="20" 
            width="60" 
            height="80" 
            rx="4" 
            fill={variant === 'light' ? '#ffffff' : '#0066cc'} 
            opacity="0.9"
          />
          <path 
            d="M45 40 H75 M45 55 H75 M45 70 H65" 
            stroke={variant === 'light' ? '#0066cc' : '#ffffff'} 
            strokeWidth="5" 
            strokeLinecap="round"
          />
          <circle 
            cx="80" 
            cy="80" 
            r="20" 
            fill={variant === 'light' ? '#ffffff' : '#ffffff'} 
            stroke={variant === 'light' ? '#0066cc' : '#0066cc'} 
            strokeWidth="4"
          />
          <path 
            d="M70 80 L77 87 L90 72" 
            stroke={variant === 'light' ? '#0066cc' : '#0066cc'} 
            strokeWidth="5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            fill="none"
          />
        </LogoSvg>
      </LogoIcon>
      
      {withText && (
        <LogoText $size={size} $variant={variant}>
          Standards Insight
        </LogoText>
      )}
    </LogoContainer>
  );
};

export default Logo;