import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'text';
type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  to?: string;
  external?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
}

const buttonStyles = css<{
  $variant: ButtonVariant;
  $size: ButtonSize;
  $fullWidth: boolean;
}>`
  display: inline-block;
  font-family: inherit;
  border-radius: 4px;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none !important;
  width: ${props => props.$fullWidth ? '100%' : 'auto'};
  
  /* Size variations */
  padding: ${props => {
    switch (props.$size) {
      case 'small':
        return '0.5rem 1rem';
      case 'large':
        return '0.875rem 1.75rem';
      default:
        return '0.625rem 1.25rem';
    }
  }};
  
  font-size: ${props => {
    switch (props.$size) {
      case 'small':
        return '0.875rem';
      case 'large':
        return '1.125rem';
      default:
        return '1rem';
    }
  }};
  
  /* Variant styles */
  ${props => {
    switch (props.$variant) {
      case 'primary':
        return `
          background-color: var(--primary-color);
          color: white;
          border: none;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          
          &:hover, &:focus {
            background-color: var(--primary-dark);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
            transform: translateY(-2px);
          }
          
          &:active {
            transform: translateY(1px);
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
          }
          
          &:disabled {
            background-color: #ccc;
            color: #666;
            cursor: not-allowed;
            box-shadow: none;
            transform: none;
          }
        `;
      case 'secondary':
        return `
          background-color: var(--secondary-color);
          color: white;
          border: none;
          
          &:hover, &:focus {
            background-color: #0091c7;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
            transform: translateY(-2px);
          }
          
          &:active {
            transform: translateY(1px);
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
          }
          
          &:disabled {
            background-color: #ccc;
            color: #666;
            cursor: not-allowed;
            box-shadow: none;
            transform: none;
          }
        `;
      case 'outline':
        return `
          background-color: transparent;
          color: var(--primary-color);
          border: 2px solid var(--primary-color);
          
          &:hover, &:focus {
            background-color: rgba(0, 118, 181, 0.1);
            transform: translateY(-2px);
          }
          
          &:active {
            transform: translateY(1px);
          }
          
          &:disabled {
            border-color: #ccc;
            color: #ccc;
            cursor: not-allowed;
            transform: none;
          }
        `;
      case 'text':
        return `
          background-color: transparent;
          color: var(--primary-color);
          border: none;
          padding-left: 0.5rem;
          padding-right: 0.5rem;
          
          &:hover, &:focus {
            text-decoration: underline;
            color: var(--primary-dark);
          }
          
          &:disabled {
            color: #ccc;
            cursor: not-allowed;
          }
        `;
    }
  }}
`;

const StyledButton = styled.button<{
  $variant: ButtonVariant;
  $size: ButtonSize;
  $fullWidth: boolean;
}>`
  ${buttonStyles}
`;

const StyledLink = styled(Link)<{
  $variant: ButtonVariant;
  $size: ButtonSize;
  $fullWidth: boolean;
}>`
  ${buttonStyles}
`;

const StyledExternalLink = styled.a<{
  $variant: ButtonVariant;
  $size: ButtonSize;
  $fullWidth: boolean;
}>`
  ${buttonStyles}
`;

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  to,
  external = false,
  type = 'button',
  onClick,
  disabled = false,
  children,
  className
}) => {
  if (to) {
    if (external) {
      return (
        <StyledExternalLink
          href={to}
          target="_blank"
          rel="noopener noreferrer"
          $variant={variant}
          $size={size}
          $fullWidth={fullWidth}
          className={className}
        >
          {children}
        </StyledExternalLink>
      );
    }
    
    return (
      <StyledLink
        to={to}
        $variant={variant}
        $size={size}
        $fullWidth={fullWidth}
        className={className}
      >
        {children}
      </StyledLink>
    );
  }
  
  return (
    <StyledButton
      type={type}
      onClick={onClick}
      disabled={disabled}
      $variant={variant}
      $size={size}
      $fullWidth={fullWidth}
      className={className}
    >
      {children}
    </StyledButton>
  );
};

export default Button;