import React, { Component, ErrorInfo, ReactNode } from 'react';
import styled from 'styled-components';
import Button from './Button';
import { Link } from 'react-router-dom';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
  padding: 2rem;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
`;

const ErrorTitle = styled.h1`
  font-size: 2rem;
  color: #e53e3e;
  margin-bottom: 1rem;
`;

const ErrorMessage = styled.p`
  margin-bottom: 1.5rem;
  color: #4a5568;
  max-width: 600px;
`;

const ErrorDetails = styled.details`
  margin: 2rem 0;
  text-align: left;
  width: 100%;
`;

const ErrorSummary = styled.summary`
  cursor: pointer;
  padding: 0.5rem;
  background-color: #f7fafc;
  border-radius: 4px;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const ErrorStack = styled.pre`
  background-color: #f7fafc;
  padding: 1rem;
  border-radius: 4px;
  overflow: auto;
  font-size: 0.85rem;
  white-space: pre-wrap;
  margin-top: 0.5rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
    errorInfo: null
  };

  public static getDerivedStateFromError(_: Error): State {
    // Update state to show fallback UI
    return { hasError: true, error: _, errorInfo: null };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
    
    // You can also log error messages to an error reporting service here
    console.error("Uncaught error:", error, errorInfo);
  }

  private handleReload = () => {
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <ErrorContainer>
          <ErrorTitle>Something went wrong</ErrorTitle>
          <ErrorMessage>
            We apologize for the inconvenience. The application has encountered an unexpected error.
          </ErrorMessage>
          
          <ButtonGroup>
            <Button variant="primary" onClick={this.handleReload}>
              Refresh Page
            </Button>
            <Button variant="outline" to="/">
              Go to Homepage
            </Button>
          </ButtonGroup>
          
          {(this.state.error || this.state.errorInfo) && (
            <ErrorDetails>
              <ErrorSummary>Technical details (for developers)</ErrorSummary>
              {this.state.error && (
                <ErrorStack>
                  {this.state.error.toString()}
                </ErrorStack>
              )}
              {this.state.errorInfo && (
                <ErrorStack>
                  {this.state.errorInfo.componentStack}
                </ErrorStack>
              )}
            </ErrorDetails>
          )}
        </ErrorContainer>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;