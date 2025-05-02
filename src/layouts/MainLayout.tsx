import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { getImagePath } from '../constants/paths';
import { SOCIAL_LINKS } from '../constants/links';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  flex: 1;
  padding-top: 60px; /* Match header height */
`;

const Header = styled.header`
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  height: 60px;
`;

const HeaderContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: var(--primary-color);
  font-weight: 700;
  font-size: 1.25rem;
  
  img {
    height: 30px;
    margin-right: 10px;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)<{ $active?: boolean }>`
  margin: 0 1rem;
  text-decoration: none;
  color: ${props => props.$active ? 'var(--primary-color)' : '#333'};
  font-weight: ${props => props.$active ? '600' : '400'};
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: ${props => props.$active ? '100%' : '0'};
    height: 2px;
    background-color: var(--primary-color);
    transition: width 0.3s ease;
  }
  
  &:hover {
    color: var(--primary-color);
    
    &:after {
      width: 100%;
    }
  }
`;

const MobileMenuButton = styled.button`
  background: none;
  border: none;
  color: #333;
  font-size: 1.5rem;
  cursor: pointer;
  display: none;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 60px;
  left: 0;
  right: 0;
  background-color: white;
  padding: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transform: translateY(${props => props.$isOpen ? '0' : '-100%'});
  opacity: ${props => props.$isOpen ? '1' : '0'};
  transition: transform 0.3s ease, opacity 0.3s ease;
  z-index: 999;
  display: none;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileNavLink = styled(Link)<{ $active?: boolean }>`
  display: block;
  padding: 0.75rem 0;
  text-decoration: none;
  color: ${props => props.$active ? 'var(--primary-color)' : '#333'};
  font-weight: ${props => props.$active ? '600' : '400'};
  border-bottom: 1px solid #eee;
  
  &:last-child {
    border-bottom: none;
  }
`;

const Footer = styled.footer`
  background-color: #2c3e50;
  color: white;
  padding: 3rem 0 2rem;
`;

const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const FooterColumn = styled.div``;

const FooterTitle = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    left: 0;
    width: 40px;
    height: 2px;
    background-color: var(--primary-color);
  }
`;

const FooterLink = styled(Link)`
  display: block;
  color: #ecf0f1;
  text-decoration: none;
  margin-bottom: 0.75rem;
  
  &:hover {
    color: var(--primary-color);
  }
`;

const FooterExternalLink = styled.a`
  display: block;
  color: #ecf0f1;
  text-decoration: none;
  margin-bottom: 0.75rem;
  
  &:hover {
    color: var(--primary-color);
  }
`;

const FooterText = styled.p`
  color: #bdc3c7;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialIcon = styled.a`
  color: white;
  font-size: 1.25rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--primary-color);
  }
`;

const Copyright = styled.div`
  text-align: center;
  color: #bdc3c7;
  padding-top: 2rem;
  margin-top: 2rem;
  border-top: 1px solid #34495e;
  font-size: 0.9rem;
`;

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  // Close mobile menu when route changes
  React.useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Check if a link is active
  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <Wrapper>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
          integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Helmet>
      
      <Header>
        <HeaderContainer>
          <Logo to="/">
            <img src={getImagePath("images/logo.svg")} alt="Standards Insight Logo" />
            <span>Standards Insight</span>
          </Logo>
          
          <Nav>
            <NavLink to="/" $active={isActive('/')}>Home</NavLink>
            <NavLink to="/blog" $active={isActive('/blog')}>Blog</NavLink>
            <NavLink to="/about" $active={isActive('/about')}>About</NavLink>
            <NavLink to="/contact" $active={isActive('/contact')}>Contact</NavLink>
          </Nav>
          
          <MobileMenuButton onClick={toggleMobileMenu}>
            <i className={`fas fa-${mobileMenuOpen ? 'times' : 'bars'}`}></i>
          </MobileMenuButton>
        </HeaderContainer>
        
        <MobileMenu $isOpen={mobileMenuOpen}>
          <MobileNavLink to="/" $active={isActive('/')}>Home</MobileNavLink>
          <MobileNavLink to="/blog" $active={isActive('/blog')}>Blog</MobileNavLink>
          <MobileNavLink to="/about" $active={isActive('/about')}>About</MobileNavLink>
          <MobileNavLink to="/contact" $active={isActive('/contact')}>Contact</MobileNavLink>
        </MobileMenu>
      </Header>
      
      <Main>
        {children}
      </Main>
      
      <Footer>
        <FooterContainer>
          <FooterColumn>
            <FooterTitle>Standards Insight</FooterTitle>
            <FooterText>
              Your trusted resource for navigating the complex world of industry standards, 
              helping organizations implement best practices and achieve compliance.
            </FooterText>
            <SocialIcons>
              <SocialIcon href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </SocialIcon>
              <SocialIcon href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </SocialIcon>
              <SocialIcon href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i>
              </SocialIcon>
            </SocialIcons>
          </FooterColumn>
          
          <FooterColumn>
            <FooterTitle>Quick Links</FooterTitle>
            <FooterLink to="/">Home</FooterLink>
            <FooterLink to="/blog">Blog</FooterLink>
            <FooterLink to="/about">About Us</FooterLink>
            <FooterLink to="/contact">Contact</FooterLink>
            <FooterLink to="/privacy">Privacy Policy</FooterLink>
          </FooterColumn>
          
          <FooterColumn>
            <FooterTitle>Popular Standards</FooterTitle>
            <FooterExternalLink 
              href="https://www.anrdoezrs.net/click-9083409-11089436?sid=si_footer_iso9001" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              ISO 9001: Quality Management
            </FooterExternalLink>
            <FooterExternalLink 
              href="https://www.anrdoezrs.net/click-9083409-11089436?sid=si_footer_iso14001" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              ISO 14001: Environmental Management
            </FooterExternalLink>
            <FooterExternalLink 
              href="https://www.anrdoezrs.net/click-9083409-11089436?sid=si_footer_osha" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              OSHA Workplace Safety Standards
            </FooterExternalLink>
            <FooterExternalLink 
              href="https://www.anrdoezrs.net/click-9083409-11089436?sid=si_footer_nec" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              National Electrical Code (NEC)
            </FooterExternalLink>
            <FooterExternalLink 
              href="https://www.anrdoezrs.net/click-9083409-11089436?sid=si_footer_astm" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              ASTM Testing Standards
            </FooterExternalLink>
          </FooterColumn>
          
          <FooterColumn>
            <FooterTitle>Contact Information</FooterTitle>
            <FooterText>
              <i className="fas fa-map-marker-alt" style={{marginRight: '10px'}}></i>
              123 Standards Avenue<br />
              New York, NY 10001
            </FooterText>
            <FooterText>
              <i className="fas fa-phone" style={{marginRight: '10px'}}></i>
              (555) 555-5555
            </FooterText>
            <FooterText>
              <i className="fas fa-envelope" style={{marginRight: '10px'}}></i>
              info@standardsinsight.com
            </FooterText>
          </FooterColumn>
        </FooterContainer>
        
        <Copyright>
          &copy; {new Date().getFullYear()} Standards Insight. All Rights Reserved. 
          <div style={{marginTop: '0.5rem', fontSize: '0.8rem'}}>
            <span>Affiliate Disclosure: We may earn commissions from purchases made through links on our site.</span>
          </div>
        </Copyright>
      </Footer>
    </Wrapper>
  );
};

export default MainLayout;