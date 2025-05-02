import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { getAllStandards } from '../data/Standards';
import { getImagePath } from '../constants/paths';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
`;

const PageHeader = styled.div`
  margin-bottom: 3rem;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #666;
  max-width: 700px;
  margin: 0 auto;
`;

const StandardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const StandardCard = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  }
`;

const StandardImage = styled.div`
  height: 180px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
    
    ${StandardCard}:hover & {
      transform: scale(1.05);
    }
  }
`;

const StandardContent = styled.div`
  padding: 1.5rem;
`;

const StandardTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const StandardCode = styled.div`
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const StandardDescription = styled.p`
  color: #555;
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
`;

const ViewButton = styled(Link)`
  display: inline-block;
  background-color: var(--primary-color);
  color: white;
  padding: 0.625rem 1rem;
  border-radius: 4px;
  text-align: center;
  text-decoration: none;
  font-weight: 500;
  
  &:hover {
    background-color: var(--primary-dark);
    text-decoration: none;
    color: white;
  }
`;

const StandardsPage: React.FC = () => {
  const standards = getAllStandards();
  
  return (
    <>
      <SEO 
        title="Browse Standards | Standards Insight"
        description="Browse our comprehensive collection of industry standards including ISO, ANSI, ASTM, and more to help your organization maintain compliance."
      />
      
      <PageContainer>
        <PageHeader>
          <Title>Browse Standards</Title>
          <Subtitle>
            Explore our comprehensive collection of industry standards to help your organization maintain compliance
          </Subtitle>
        </PageHeader>
        
        <StandardsGrid>
          {standards.map(standard => (
            <StandardCard key={standard.id}>
              <StandardImage>
                <img 
                  src={getImagePath(standard.imageUrl)} 
                  alt={standard.imageAlt} 
                />
              </StandardImage>
              <StandardContent>
                <StandardTitle>{standard.name}</StandardTitle>
                <StandardCode>{standard.code}</StandardCode>
                <StandardDescription>{standard.description}</StandardDescription>
                <ViewButton to={`/standards/${standard.id}`}>
                  View Details
                </ViewButton>
              </StandardContent>
            </StandardCard>
          ))}
        </StandardsGrid>
      </PageContainer>
    </>
  );
};

export default StandardsPage;