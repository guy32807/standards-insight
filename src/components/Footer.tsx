import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { getAffiliateLink, getCategoryLink } from '../constants/links';

const FooterContainer = styled.footer`
  background-color: #003A70;
  color: white;
  padding: 3rem 0 1.5rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const FooterSection = styled.div``;

const FooterTitle = styled.h3`
  color: white;
  font-size: 1.2rem;
  margin-bottom: 1.25rem;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    left: 0;
    width: 40px;
    height: 3px;
    background-color: #00A5E0;
  }
`;

const FooterText = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 1.5rem;
`;

const FooterLinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FooterLinkItem = styled.li`
  margin-bottom: 0.75rem;
`;

const FooterLink = styled(Link)`
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: color 0.2s ease;
  font-size: 0.95rem;
  
  &:hover {
    color: #00A5E0;
    text-decoration: none;
  }
`;

const FooterExternalLink = styled.a`
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: color 0.2s ease;
  font-size: 0.95rem;
  
  &:hover {
    color: #00A5E0;
    text-decoration: none;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialLink = styled.a`
  color: white;
  background-color: rgba(255, 255, 255, 0.1);
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: #00A5E0;
  }
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: 2rem;
  margin-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.85rem;
`;

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterTitle>Standards Insight</FooterTitle>
          <FooterText>
            Your trusted resource for navigating the complex world of industry standards, 
            helping organizations implement best practices and achieve compliance.
          </FooterText>
          <SocialLinks>
            <SocialLink href="https://twitter.com/standards_insight" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </SocialLink>
            <SocialLink href="https://linkedin.com/company/standards-insight" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </SocialLink>
            <SocialLink href="https://facebook.com/standardsinsight" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </SocialLink>
            <SocialLink href="https://instagram.com/standards_insight" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </SocialLink>
          </SocialLinks>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>Quick Links</FooterTitle>
          <FooterLinkList>
            <FooterLinkItem>
              <FooterLink to="/">Home</FooterLink>
            </FooterLinkItem>
            <FooterLinkItem>
              <FooterLink to="/blog">Blog</FooterLink>
            </FooterLinkItem>
            <FooterLinkItem>
              <FooterLink to="/about">About Us</FooterLink>
            </FooterLinkItem>
            <FooterLinkItem>
              <FooterLink to="/contact">Contact</FooterLink>
            </FooterLinkItem>
            <FooterLinkItem>
              <FooterLink to="/privacy">Privacy Policy</FooterLink>
            </FooterLinkItem>
          </FooterLinkList>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>Popular Categories</FooterTitle>
          <FooterLinkList>
            <FooterLinkItem>
              <FooterExternalLink 
                href={getCategoryLink('iso', 'footer')} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                ISO Standards
              </FooterExternalLink>
            </FooterLinkItem>
            <FooterLinkItem>
              <FooterExternalLink 
                href={getCategoryLink('astm', 'footer')} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                ASTM Standards
              </FooterExternalLink>
            </FooterLinkItem>
            <FooterLinkItem>
              <FooterExternalLink 
                href={getCategoryLink('ansi', 'footer')} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                ANSI Standards
              </FooterExternalLink>
            </FooterLinkItem>
            <FooterLinkItem>
              <FooterExternalLink 
                href={getCategoryLink('nfpa', 'footer')} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                NFPA Standards
              </FooterExternalLink>
            </FooterLinkItem>
            <FooterLinkItem>
              <FooterExternalLink 
                href={getCategoryLink('quality', 'footer')} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Quality Management
              </FooterExternalLink>
            </FooterLinkItem>
          </FooterLinkList>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>Contact Us</FooterTitle>
          <FooterText>
            <i className="fas fa-map-marker-alt" style={{marginRight: '10px'}}></i>
            123 Standards Avenue<br />
            New York, NY 10001
          </FooterText>
          <FooterText>
            <i className="fas fa-envelope" style={{marginRight: '10px'}}></i>
            info@standardsinsight.com
          </FooterText>
          <FooterText>
            <i className="fas fa-phone" style={{marginRight: '10px'}}></i>
            (555) 555-5555
          </FooterText>
        </FooterSection>
      </FooterContent>
      
      <Copyright>
        <p>&copy; {currentYear} Standards Insight. All Rights Reserved.</p>
        <p style={{marginTop: '0.5rem'}}>
          Affiliate Disclosure: We may earn commissions from purchases made through links on our site.
        </p>
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;