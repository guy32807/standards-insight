import React from 'react';
import styled from 'styled-components';
import SEO from '../components/SEO';
import { getImagePath } from '../constants/paths';
import { getAffiliateLink } from '../constants/links';

const ResourcesContainer = styled.div`
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

const ResourcesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ResourceCard = styled.div`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background: #fff;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }
`;

const ResourceImage = styled.div`
  height: 200px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
    
    ${ResourceCard}:hover & {
      transform: scale(1.05);
    }
  }
`;

const ResourceContent = styled.div`
  padding: 1.5rem;
`;

const ResourceTitle = styled.h2`
  font-size: 1.4rem;
  margin-bottom: 0.75rem;
`;

const ResourceDescription = styled.p`
  color: #666;
  margin-bottom: 1.5rem;
`;

const DownloadButton = styled.a`
  display: inline-block;
  background-color: var(--primary-color);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 600;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: var(--primary-dark);
  }
`;

const ResourcesPage: React.FC = () => {
  // Sample resources data - in a real app, this might come from an API or CMS
  const resources = [
    {
      id: 'iso-checklist',
      title: 'ISO 9001:2015 Implementation Checklist',
      description: 'A comprehensive checklist to help you implement ISO 9001:2015 quality management system in your organization.',
      imageUrl: 'images/iso-checklist.jpg',
      imageAlt: 'ISO 9001 Implementation Checklist',
      downloadUrl: 'iso9001-checklist.pdf',
      fileType: 'PDF',
      fileSize: '2.4 MB'
    },
    {
      id: 'electrical-safety',
      title: 'Electrical Safety Standards Guide',
      description: 'An overview of key electrical safety standards including NEC, NFPA 70E, and international equivalents.',
      imageUrl: 'images/electrical-safety.jpg',
      imageAlt: 'Electrical Safety Standards Guide',
      downloadUrl: 'electrical-safety-guide.pdf',
      fileType: 'PDF',
      fileSize: '3.8 MB'
    },
    {
      id: 'construction-standards',
      title: 'Construction Standards Reference Sheet',
      description: 'Quick reference for the most commonly used construction and building standards in commercial projects.',
      imageUrl: 'images/construction-standards.jpg',
      imageAlt: 'Construction Standards Reference',
      downloadUrl: 'construction-standards-reference.pdf',
      fileType: 'PDF',
      fileSize: '1.7 MB'
    },
    {
      id: 'hazcom-template',
      title: 'Hazard Communication Program Template',
      description: 'Template for creating a complete hazard communication program compliant with OSHA requirements.',
      imageUrl: 'images/hazcom-template.jpg',
      imageAlt: 'Hazard Communication Program Template',
      downloadUrl: 'hazcom-program-template.docx',
      fileType: 'DOCX',
      fileSize: '1.2 MB'
    },
    {
      id: 'standards-comparison',
      title: 'International Standards Comparison Chart',
      description: 'Compare equivalent standards across different international organizations including ISO, EN, ASTM, and more.',
      imageUrl: 'images/standards-comparison.jpg',
      imageAlt: 'International Standards Comparison Chart',
      downloadUrl: 'standards-comparison-chart.xlsx',
      fileType: 'XLSX',
      fileSize: '980 KB'
    },
    {
      id: 'quality-manual',
      title: 'Quality Management System Manual Template',
      description: 'A template for creating a comprehensive quality management system manual aligned with ISO 9001.',
      imageUrl: 'images/quality-manual.jpg',
      imageAlt: 'Quality Management System Manual Template',
      downloadUrl: 'quality-manual-template.docx',
      fileType: 'DOCX',
      fileSize: '3.5 MB'
    }
  ];

  return (
    <>
      <SEO 
        title="Free Resources | Standards Insight"
        description="Download free checklists, templates, and guides to help with standards implementation and compliance in your organization."
      />
      
      <ResourcesContainer>
        <PageHeader>
          <Title>Free Resources</Title>
          <Subtitle>
            Download helpful tools and guides to assist with standards implementation and compliance
          </Subtitle>
        </PageHeader>
        
        <ResourcesGrid>
          {resources.map((resource) => (
            <ResourceCard key={resource.id}>
              <ResourceImage>
                <img 
                  src={getImagePath(resource.imageUrl)} 
                  alt={resource.imageAlt} 
                />
              </ResourceImage>
              <ResourceContent>
                <ResourceTitle>{resource.title}</ResourceTitle>
                <ResourceDescription>{resource.description}</ResourceDescription>
                <DownloadButton 
                  href={getAffiliateLink('resources', resource.id, 'download')}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download {resource.fileType} ({resource.fileSize})
                </DownloadButton>
              </ResourceContent>
            </ResourceCard>
          ))}
        </ResourcesGrid>
      </ResourcesContainer>
    </>
  );
};

export default ResourcesPage;