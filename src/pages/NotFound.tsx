import React from 'react';
import styled from 'styled-components';
import SEO from '../components/SEO';
import Button from '../components/Button';

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 60vh;
  padding: 2rem;
`;

const ErrorCode = styled.h1`
  font-size: 6rem;
  font-weight: 700;
  color: var(--primary-color);
  margin: 0;
  line-height: 1;
`;

const ErrorTitle = styled.h2`
  font-size: 2rem;
  margin: 1rem 0 2rem;
`;

const ErrorDescription = styled.p`
  font-size: 1.1rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto 2rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const NotFound: React.FC = () => {
  return (
    <>
      <SEO 
        title="Page Not Found"
        description="The page you are looking for does not exist. Let's take you back to the homepage."
      />
      
      <NotFoundContainer>
        <ErrorCode>404</ErrorCode>
        <ErrorTitle>Page Not Found</ErrorTitle>
        <ErrorDescription>
          The page you are looking for might have been removed, had its name changed,
          or is temporarily unavailable.
        </ErrorDescription>
        
        <ButtonContainer>
          <Button variant="primary" size="large" to="/">
            Back to Home
          </Button>
          <Button variant="outline" size="large" to="/blog">
            Browse Articles
          </Button>
        </ButtonContainer>
      </NotFoundContainer>
    </>
  );
};

export default NotFound;