import React from 'react';
import styled from 'styled-components';
import { useParams, Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { getStandardById, getRelatedStandards } from '../data/Standards';
import { getImagePath } from '../constants/paths';
import { getAffiliateLink } from '../constants/links';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
`;

const Breadcrumbs = styled.div`
  margin-bottom: 2rem;
  font-size: 0.9rem;
  
  a {
    color: var(--primary-color);
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
  
  span {
    margin: 0 0.5rem;
    color: #666;
  }
`;

const StandardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2.5rem;
  
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const StandardImage = styled.div`
  img {
    width: 100%;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const StandardInfo = styled.div``;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

const Code = styled.div`
  color: #666;
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
`;

const Description = styled.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`;

const Price = styled.span`
  font-size: 1.8rem;
  font-weight: 600;
  color: #333;
`;

const DiscountPrice = styled.span`
  font-size: 1.8rem;
  font-weight: 600;
  color: #e53e3e;
  margin-right: 1rem;
`;

const OriginalPrice = styled.span`
  font-size: 1.2rem;
  color: #777;
  text-decoration: line-through;
`;

const BuyButton = styled.a`
  display: inline-block;
  background-color: var(--primary-color);
  color: white;
  padding: 0.75rem 1.5rem;
  font-size: 1.1rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  margin-right: 1rem;
  
  &:hover {
    background-color: var(--primary-dark);
    text-decoration: none;
    color: white;
  }
`;

const RelatedStandards = styled.div`
  margin-top: 4rem;
`;

const RelatedTitle = styled.h2`
  font-size: 1.6rem;
  margin-bottom: 1.5rem;
`;

const RelatedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

const RelatedCard = styled.div`
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

const RelatedImage = styled.div`
  height: 150px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const RelatedContent = styled.div`
  padding: 1rem;
`;

const RelatedStandardTitle = styled.h3`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

const ViewLink = styled(Link)`
  color: var(--primary-color);
  font-weight: 500;
  font-size: 0.9rem;
  
  &:hover {
    text-decoration: underline;
  }
`;

const StandardDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const standard = getStandardById(id || '');
  const relatedStandards = getRelatedStandards(id || '', 3);
  
  if (!standard) {
    return (
      <PageContainer>
        <h1>Standard not found</h1>
        <p>The standard you're looking for doesn't exist or has been removed.</p>
        <Link to="/standards">Browse all standards</Link>
      </PageContainer>
    );
  }
  
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(standard.price);
  
  let formattedDiscountPrice;
  if (standard.discountPrice) {
    formattedDiscountPrice = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(standard.discountPrice);
  }
  
  const affiliateLink = getAffiliateLink('standard_detail', standard.productId);
  
  return (
    <>
      <SEO 
        title={`${standard.name} | Standards Insight`}
        description={standard.description}
      />
      
      <PageContainer>
        <Breadcrumbs>
          <Link to="/">Home</Link>
          <span>›</span>
          <Link to="/standards">Standards</Link>
          <span>›</span>
          {standard.name}
        </Breadcrumbs>
        
        <StandardContainer>
          <StandardImage>
            <img 
              src={getImagePath(standard.imageUrl)} 
              alt={standard.imageAlt} 
            />
          </StandardImage>
          
          <StandardInfo>
            <Title>{standard.name}</Title>
            <Code>Standard: {standard.code}</Code>
            <Description>{standard.description}</Description>
            
            <PriceContainer>
              {standard.discountPrice ? (
                <>
                  <DiscountPrice>{formattedDiscountPrice}</DiscountPrice>
                  <OriginalPrice>{formattedPrice}</OriginalPrice>
                </>
              ) : (
                <Price>{formattedPrice}</Price>
              )}
            </PriceContainer>
            
            <BuyButton 
              href={affiliateLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Standard
            </BuyButton>
          </StandardInfo>
        </StandardContainer>
        
        {relatedStandards.length > 0 && (
          <RelatedStandards>
            <RelatedTitle>Related Standards</RelatedTitle>
            <RelatedGrid>
              {relatedStandards.map(related => (
                <RelatedCard key={related.id}>
                  <RelatedImage>
                    <img 
                      src={getImagePath(related.imageUrl)} 
                      alt={related.imageAlt} 
                    />
                  </RelatedImage>
                  <RelatedContent>
                    <RelatedStandardTitle>{related.name}</RelatedStandardTitle>
                    <ViewLink to={`/standards/${related.id}`}>
                      View details →
                    </ViewLink>
                  </RelatedContent>
                </RelatedCard>
              ))}
            </RelatedGrid>
          </RelatedStandards>
        )}
      </PageContainer>
    </>
  );
};

export default StandardDetail;