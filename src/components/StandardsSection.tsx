import React from 'react';
import styled from 'styled-components';
import { getImagePath } from '../constants/paths';
import { getAffiliateLink } from '../constants/links';
import { getFeaturedStandards } from '../data/Standards';

const SectionContainer = styled.section`
  padding: 4rem 0;
  background-color: #f8f9fa;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

const SectionSubtitle = styled.p`
  font-size: 1.1rem;
  color: #666;
  max-width: 700px;
  margin: 0 auto;
`;

const StandardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const StandardCard = styled.div`
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
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
  margin-bottom: 0.75rem;
`;

const StandardDescription = styled.p`
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 1.25rem;
  line-height: 1.5;
`;

const ViewButton = styled.a`
  display: inline-block;
  background-color: var(--primary-color);
  color: white;
  padding: 0.625rem 1rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  
  &:hover {
    background-color: var(--primary-dark);
    color: white;
    text-decoration: none;
  }
`;

const ViewAllLink = styled.a`
  display: block;
  width: fit-content;
  margin: 2rem auto 0;
  background-color: var(--primary-color);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: var(--primary-dark);
    text-decoration: none;
    color: white;
  }
`;

const StandardsSection: React.FC = () => {
  const featuredStandards = getFeaturedStandards(3);
  
  return (
    <SectionContainer>
      <SectionHeader>
        <SectionTitle>Popular Standards</SectionTitle>
        <SectionSubtitle>
          Explore the most commonly used industry standards across various sectors
        </SectionSubtitle>
      </SectionHeader>
      
      <StandardsGrid>
        {featuredStandards.map(standard => (
          <StandardCard key={standard.id}>
            <StandardImage>
              <img 
                src={getImagePath(standard.imageUrl)} 
                alt={standard.imageAlt} 
              />
            </StandardImage>
            <StandardContent>
              <StandardTitle>{standard.name}</StandardTitle>
              <StandardDescription>{standard.description}</StandardDescription>
              <ViewButton 
                href={getAffiliateLink('standards_section', standard.productId)}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Standard
              </ViewButton>
            </StandardContent>
          </StandardCard>
        ))}
      </StandardsGrid>
      
      <ViewAllLink 
        href={getAffiliateLink('homepage', 'explore_standards')}
        target="_blank"
        rel="noopener noreferrer"
      >
        Explore All Standards
      </ViewAllLink>
    </SectionContainer>
  );
};

export default StandardsSection;