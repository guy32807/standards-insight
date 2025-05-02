import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; // Add this import
import Hero from '../components/Hero';
import SEO from '../components/SEO';
import Button from '../components/Button';
import OptimizedImage from '../components/OptimizedImage';
import { getImagePath } from '../constants/paths';
import { getAffiliateLink, getCategoryLink } from '../constants/links';
import { getLatestBlogPosts } from '../data/BlogPosts';
import StandardsSection from '../components/StandardsSection';

const HomeContainer = styled.div``;

const Section = styled.section`
  padding: 3rem 0;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background-color: var(--primary-color);
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const FeaturedCategoriesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const CategoryCard = styled.a`
  display: block;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-decoration: none;
  background: white;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
    text-decoration: none;
  }
`;

const CategoryImage = styled.div`
  height: 180px;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent);
  }
`;

const CategoryContent = styled.div`
  padding: 1.25rem;
  text-align: center;
`;

const CategoryTitle = styled.h3`
  font-size: 1.3rem;
  color: #333;
  margin-bottom: 0.75rem;
`;

const CategoryDescription = styled.p`
  color: #666;
  font-size: 0.95rem;
  margin-bottom: 1rem;
`;

const BenefitsSection = styled(Section)`
  background-color: #f8f9fa;
`;

const BenefitsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
`;

const BenefitCard = styled.div`
  text-align: center;
  padding: 2rem;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const BenefitIcon = styled.div`
  font-size: 2.5rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
`;

const BenefitTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 1rem;
`;

const BenefitDescription = styled.p`
  color: #666;
`;

const LatestPostsSection = styled(Section)``;

const PostsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const PostCard = styled.div`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  background: white;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  }
`;

const PostImage = styled.div`
  height: 200px;
  overflow: hidden;
  
  img {
    transition: transform 0.3s ease;
    
    ${PostCard}:hover & {
      transform: scale(1.05);
    }
  }
`;

const PostContent = styled.div`
  padding: 1.5rem;
`;

const PostTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 0.75rem;
  
  a {
    color: #333;
    text-decoration: none;
    
    &:hover {
      color: var(--primary-color);
    }
  }
`;

const PostExcerpt = styled.p`
  color: #666;
  font-size: 0.95rem;
  margin-bottom: 1rem;
`;

const ReadMoreLink = styled(Link)`
  color: var(--primary-color);
  font-weight: 600;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  
  &:hover {
    text-decoration: underline;
  }
  
  i {
    margin-left: 5px;
    transition: transform 0.2s ease;
  }
  
  &:hover i {
    transform: translateX(3px);
  }
`;

const CtaSection = styled.section`
  background-color: #003A70;
  color: white;
  padding: 4rem 0;
  text-align: center;
`;

const CtaTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
`;

const CtaText = styled.p`
  font-size: 1.1rem;
  max-width: 700px;
  margin: 0 auto 2rem;
  opacity: 0.9;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ViewAllContainer = styled.div`
  text-align: center;
  margin-top: 2rem;
`;

const ExploreButton = styled.a`
  display: inline-block;
  background-color: var(--primary-color);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: background-color 0.2s ease;
  margin: 2rem auto;
  text-align: center;
  
  &:hover {
    background-color: var(--primary-dark);
    text-decoration: none;
    color: white;
  }
`;

const HomePage: React.FC = () => {
  const latestPosts = getLatestBlogPosts(3);
  
  return (
    <>
      <SEO 
        title="Standards Insight | Your Guide to Industry Standards"
        description="Expert resources and guides to help you navigate and implement industry standards like ISO, ANSI, ASTM, and more."
      />
      
      <HomeContainer>
        <Hero 
          title="Navigate Standards with Confidence"
          subtitle="Expert resources to help you understand and implement industry standards for better quality, safety, and compliance."
          imageSrc="images/hero-standards.jpg"
          imageAlt="Team reviewing standards documentation in an office setting"
          primaryButtonText="Explore Standards"
          primaryButtonLink={getAffiliateLink('home', 'hero')}
          secondaryButtonText="Read Our Guides"
          secondaryButtonLink="/blog"
          height="600px"
        />
        <ExploreButton 
          href={getAffiliateLink('hero_section', 'explore_standards')}
          target="_blank"
          rel="noopener noreferrer"
        >
          Explore Standards
        </ExploreButton>
        
        <Section id="featured-categories">
          <Container>
            <SectionTitle>Featured Standards Categories</SectionTitle>
            <FeaturedCategoriesContainer>
              <CategoryCard 
                href={getCategoryLink('iso', 'homepage')} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <CategoryImage>
                  <OptimizedImage 
                    src={getImagePath("images/iso-standards.jpg")} 
                    alt="ISO Standards" 
                    height="100%"
                  />
                </CategoryImage>
                <CategoryContent>
                  <CategoryTitle>ISO Standards</CategoryTitle>
                  <CategoryDescription>
                    International standards covering quality, environmental management, and more.
                  </CategoryDescription>
                  <Button variant="primary" size="small">Browse ISO Standards</Button>
                </CategoryContent>
              </CategoryCard>
              
              <CategoryCard 
                href={getCategoryLink('astm', 'homepage')} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <CategoryImage>
                  <OptimizedImage 
                    src={getImagePath("images/astm-standards.jpg")} 
                    alt="ASTM Standards" 
                    height="100%"
                  />
                </CategoryImage>
                <CategoryContent>
                  <CategoryTitle>ASTM Standards</CategoryTitle>
                  <CategoryDescription>
                    Materials, products, systems, and services testing standards.
                  </CategoryDescription>
                  <Button variant="primary" size="small">Browse ASTM Standards</Button>
                </CategoryContent>
              </CategoryCard>
              
              <CategoryCard 
                href={getCategoryLink('safety', 'homepage')} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <CategoryImage>
                  <OptimizedImage 
                    src={getImagePath("images/safety-standards.jpg")} 
                    alt="Safety Standards" 
                    height="100%"
                  />
                </CategoryImage>
                <CategoryContent>
                  <CategoryTitle>Safety Standards</CategoryTitle>
                  <CategoryDescription>
                    Workplace, product, and public safety standards from multiple organizations.
                  </CategoryDescription>
                  <Button variant="primary" size="small">Browse Safety Standards</Button>
                </CategoryContent>
              </CategoryCard>
              
              <CategoryCard 
                href={getCategoryLink('electrical', 'homepage')} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <CategoryImage>
                  <OptimizedImage 
                    src={getImagePath("images/electrical-standards.jpg")} 
                    alt="Electrical Standards" 
                    height="100%"
                  />
                </CategoryImage>
                <CategoryContent>
                  <CategoryTitle>Electrical Standards</CategoryTitle>
                  <CategoryDescription>
                    NEC, IEC, and other standards for electrical systems and safety.
                  </CategoryDescription>
                  <Button variant="primary" size="small">Browse Electrical Standards</Button>
                </CategoryContent>
              </CategoryCard>
            </FeaturedCategoriesContainer>
            
            <ViewAllContainer>
              <Button 
                variant="outline" 
                size="large" 
                to={getAffiliateLink('home', 'all-categories')}
                external={true}
              >
                View All Standards Categories
              </Button>
            </ViewAllContainer>
          </Container>
        </Section>
        
        <StandardsSection />

        <BenefitsSection id="benefits">
          <Container>
            <SectionTitle>Why Standards Matter</SectionTitle>
            <BenefitsContainer>
              <BenefitCard>
                <BenefitIcon>
                  <i className="fas fa-medal"></i>
                </BenefitIcon>
                <BenefitTitle>Improved Quality</BenefitTitle>
                <BenefitDescription>
                  Implement proven best practices that enhance product and service quality, leading to greater customer satisfaction.
                </BenefitDescription>
              </BenefitCard>
              
              <BenefitCard>
                <BenefitIcon>
                  <i className="fas fa-shield-alt"></i>
                </BenefitIcon>
                <BenefitTitle>Enhanced Safety</BenefitTitle>
                <BenefitDescription>
                  Protect employees, customers, and the public through standardized safety practices and requirements.
                </BenefitDescription>
              </BenefitCard>
              
              <BenefitCard>
                <BenefitIcon>
                  <i className="fas fa-balance-scale"></i>
                </BenefitIcon>
                <BenefitTitle>Regulatory Compliance</BenefitTitle>
                <BenefitDescription>
                  Meet or exceed regulatory requirements across different jurisdictions with globally recognized standards.
                </BenefitDescription>
              </BenefitCard>
              
              <BenefitCard>
                <BenefitIcon>
                  <i className="fas fa-chart-line"></i>
                </BenefitIcon>
                <BenefitTitle>Business Growth</BenefitTitle>
                <BenefitDescription>
                  Gain market access, customer trust, and competitive advantage through standards compliance.
                </BenefitDescription>
              </BenefitCard>
            </BenefitsContainer>
          </Container>
        </BenefitsSection>
        
        <LatestPostsSection id="recent-posts">
          <Container>
            <SectionTitle>Latest Guides & Resources</SectionTitle>
            <PostsContainer>
              {latestPosts.map(post => (
                <PostCard key={post.id}>
                  <PostImage>
                    <OptimizedImage 
                      src={getImagePath(post.imageUrl)} 
                      alt={post.imageAlt} 
                      height="100%"
                    />
                  </PostImage>
                  <PostContent>
                    <PostTitle>
                      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    </PostTitle>
                    <PostExcerpt>{post.excerpt}</PostExcerpt>
                    <ReadMoreLink to={`/blog/${post.slug}`}>
                      Read Article <i className="fas fa-arrow-right"></i>
                    </ReadMoreLink>
                  </PostContent>
                </PostCard>
              ))}
            </PostsContainer>
            
            <ViewAllContainer>
              <Button variant="outline" size="large" to="/blog">
                View All Articles
              </Button>
            </ViewAllContainer>
          </Container>
        </LatestPostsSection>
        
        <CtaSection>
          <Container>
            <CtaTitle>Ready to Get Started with Standards?</CtaTitle>
            <CtaText>
              Whether you're looking to purchase standards or learn more about implementation, 
              we're here to help you navigate the process.
            </CtaText>
            <ButtonGroup>
              <Button 
                variant="primary" 
                size="large" 
                to={getAffiliateLink('home', 'cta')}
                external={true}
              >
                Browse Standards Store
              </Button>
              <Button 
                variant="outline" 
                size="large" 
                to="/contact"
              >
                Contact Our Team
              </Button>
            </ButtonGroup>
          </Container>
        </CtaSection>
      </HomeContainer>
    </>
  );
};

export default HomePage;