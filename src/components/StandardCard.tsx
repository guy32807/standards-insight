import React from 'react';
import styled from 'styled-components';
import { Standard } from '../types';
import { getImagePath } from '../constants/paths';
import { getAffiliateLink } from '../constants/links';
import OptimizedImage from './OptimizedImage';

interface StandardCardProps {
  standard: Standard;
  source: string;
  className?: string;
}

const Card = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  }
`;

const CardImage = styled.div`
  height: 180px;
  overflow: hidden;
  position: relative;
`;

const CategoryTag = styled.span`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: var(--primary-color);
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 500;
  z-index: 2;
`;

const FeaturedTag = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #f39c12;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 500;
  z-index: 2;
`;

const CardContent = styled.div`
  padding: 1.25rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const CardTitle = styled.h3`
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  line-height: 1.4;
`;

const CodeLabel = styled.div`
  color: #666;
  font-size: 0.85rem;
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  color: #555;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  flex-grow: 1;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const Price = styled.span`
  font-size: 1.3rem;
  font-weight: 600;
  color: #333;
`;

const DiscountPrice = styled.span`
  font-size: 1.3rem;
  font-weight: 600;
  color: #e53e3e;
  margin-right: 0.75rem;
`;

const OriginalPrice = styled.span`
  font-size: 1rem;
  color: #777;
  text-decoration: line-through;
`;

const ViewButton = styled.a`
  background-color: var(--primary-color);
  color: white;
  padding: 0.625rem 1rem;
  border-radius: 4px;
  text-align: center;
  text-decoration: none;
  font-weight: 500;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: var(--primary-dark);
    text-decoration: none;
    color: white;
  }
`;

const StandardCard: React.FC<StandardCardProps> = ({ standard, source, className }) => {
  const {
    name,
    code,
    description,
    price,
    discountPrice,
    category,
    imageUrl,
    imageAlt,
    featured,
    productId
  } = standard;
  
  // Format prices
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);
  
  let formattedDiscountPrice;
  if (discountPrice) {
    formattedDiscountPrice = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(discountPrice);
  }
  
  // Generate affiliate link
  const affiliateLink = getAffiliateLink(source, 'standard_card', productId);
  
  // Generate image path
  const standardImage = getImagePath(imageUrl);
  
  // Format description to handle overflow
  const truncatedDescription = description.length > 100 
    ? `${description.substring(0, 97)}...` 
    : description;
  
  return (
    <Card className={className}>
      <CardImage>
        {category && <CategoryTag>{category}</CategoryTag>}
        {featured && <FeaturedTag>Featured</FeaturedTag>}
        <OptimizedImage 
          src={standardImage} 
          alt={imageAlt} 
          height="100%" 
        />
      </CardImage>
      
      <CardContent>
        <CardTitle>{name}</CardTitle>
        <CodeLabel>Standard: {code}</CodeLabel>
        <Description>{truncatedDescription}</Description>
        
        <PriceContainer>
          {discountPrice ? (
            <>
              <DiscountPrice>{formattedDiscountPrice}</DiscountPrice>
              <OriginalPrice>{formattedPrice}</OriginalPrice>
            </>
          ) : (
            <Price>{formattedPrice}</Price>
          )}
        </PriceContainer>
        
        <ViewButton 
          href={affiliateLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Standard
        </ViewButton>
      </CardContent>
    </Card>
  );
};

export default StandardCard;