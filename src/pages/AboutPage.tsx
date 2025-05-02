import React from 'react';
import styled from 'styled-components';
import SEO from '../components/SEO';
import Button from '../components/Button';
import OptimizedImage from '../components/OptimizedImage';
import { getImagePath } from '../constants/paths';
import { getAffiliateLink } from '../constants/links';

const AboutContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
`;

const AboutHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
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

const Section = styled.section`
  margin-bottom: 4rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  position: relative;
  padding-bottom: 0.5rem;
  
  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 60px;
    height: 3px;
    background-color: var(--primary-color);
  }
`;

const MissionContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const MissionContent = styled.div``;

const MissionText = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 1.5rem;
`;

const ImageContainer = styled.div`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  
  img {
    width: 100%;
    height: auto;
    display: block;
  }
  
  @media (max-width: 768px) {
    order: -1;
  }
`;

const ValuesList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

const ValueCard = styled.div`
  background-color: #f8f9fa;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
`;

const ValueIcon = styled.div`
  font-size: 2rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
`;

const ValueTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 0.75rem;
`;

const ValueDescription = styled.p`
  color: #666;
`;

const TeamSection = styled.div`
  text-align: center;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const TeamMember = styled.div`
  text-align: center;
`;

const TeamMemberImage = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto 1rem;
  border: 3px solid #f0f8ff;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const TeamMemberName = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.25rem;
`;

const TeamMemberRole = styled.p`
  color: #666;
  font-size: 0.9rem;
`;

const CtaSection = styled.div`
  background-color: #f0f8ff;
  padding: 3rem;
  border-radius: 8px;
  text-align: center;
  margin-top: 3rem;
`;

const CtaTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1rem;
`;

const CtaText = styled.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
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

const About: React.FC = () => {
  return (
    <>
      <SEO 
        title="About Standards Insight | Our Mission & Expertise"
        description="Learn about our mission to simplify industry standards. With decades of experience, we help organizations understand and implement standards effectively."
      />
      
      <AboutContainer>
        <AboutHeader>
          <Title>About Standards Insight</Title>
          <Subtitle>
            Your trusted guide in the complex world of industry standards
          </Subtitle>
        </AboutHeader>
        
        <Section>
          <MissionContainer>
            <MissionContent>
              <SectionTitle>Our Mission</SectionTitle>
              <MissionText>
                At Standards Insight, we believe that understanding and implementing industry standards 
                should be accessible to everyone. Our mission is to demystify the complex world of 
                standards and provide clear, actionable guidance to help organizations improve quality, 
                safety, and compliance.
              </MissionText>
              <MissionText>
                Founded by experts with decades of experience in standards development and implementation, 
                we bridge the gap between technical requirements and practical application, making standards 
                accessible and implementable for businesses of all sizes.
              </MissionText>
            </MissionContent>
            <ImageContainer>
              <OptimizedImage 
                src={getImagePath("images/about-mission.jpg")} 
                alt="Standards Insight team discussing documents in a modern office" 
              />
            </ImageContainer>
          </MissionContainer>
        </Section>
        
        <Section>
          <SectionTitle>Our Values</SectionTitle>
          <ValuesList>
            <ValueCard>
              <ValueIcon><i className="fas fa-lightbulb"></i></ValueIcon>
              <ValueTitle>Clarity</ValueTitle>
              <ValueDescription>
                We transform technical jargon into clear, actionable insights that anyone can understand.
              </ValueDescription>
            </ValueCard>
            
            <ValueCard>
              <ValueIcon><i className="fas fa-shield-alt"></i></ValueIcon>
              <ValueTitle>Integrity</ValueTitle>
              <ValueDescription>
                We provide unbiased information and are committed to ethical practices in all we do.
              </ValueDescription>
            </ValueCard>
            
            <ValueCard>
              <ValueIcon><i className="fas fa-chart-line"></i></ValueIcon>
              <ValueTitle>Excellence</ValueTitle>
              <ValueDescription>
                We strive for excellence in our content, ensuring accuracy and relevance in a changing landscape.
              </ValueDescription>
            </ValueCard>
            
            <ValueCard>
              <ValueIcon><i className="fas fa-users"></i></ValueIcon>
              <ValueTitle>Accessibility</ValueTitle>
              <ValueDescription>
                We believe standards knowledge should be accessible to everyone, regardless of technical background.
              </ValueDescription>
            </ValueCard>
          </ValuesList>
        </Section>
        
        <Section>
          <SectionTitle>Our Expertise</SectionTitle>
          <MissionContainer>
            <ImageContainer>
              <OptimizedImage 
                src={getImagePath("images/about-expertise.jpg")} 
                alt="Standards implementation workshop with industry professionals" 
              />
            </ImageContainer>
            <MissionContent>
              <MissionText>
                Our team brings together experts from diverse backgrounds, including standards 
                development organizations, certification bodies, and industry specialists. This 
                unique blend of expertise allows us to provide insights that are both technically 
                accurate and practically applicable.
              </MissionText>
              <MissionText>
                We specialize in standards across multiple industries, including construction, 
                healthcare, manufacturing, energy, and information technology. Whether you're 
                looking to understand ANSI, ISO, ASTM, or other standards, our resources can 
                help simplify the process.
              </MissionText>
            </MissionContent>
          </MissionContainer>
        </Section>
        
        <CtaSection>
          <CtaTitle>Ready to Navigate the World of Standards?</CtaTitle>
          <CtaText>
            Whether you're looking to purchase specific standards or learn more about implementation, 
            we're here to help guide you through the process.
          </CtaText>
          <ButtonGroup>
            <Button 
              variant="primary" 
              size="large" 
              to={getAffiliateLink('about', 'cta')}
              external={true}
            >
              Explore Standards
            </Button>
            <Button 
              variant="outline" 
              size="large" 
              to="/contact"
            >
              Contact Us
            </Button>
          </ButtonGroup>
        </CtaSection>
      </AboutContainer>
    </>
  );
};

export default About;