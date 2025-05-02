import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Logo from './Logo';

const HeaderContainer = styled.header`
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 1.5rem;
`;

const LogoWrapper = styled.div`
  flex-shrink: 0;
`;

const MenuToggle = styled.button`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  
  span {
    width: 2rem;
    height: 0.25rem;
    background: var(--primary-color);
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }
  
  @media (max-width: 768px) {
    display: flex;
  }
`;

const Nav = styled.nav<{ $isOpen: boolean }>`
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    background-color: white;
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 250px;
    padding-top: 5rem;
    transition: transform 0.3s ease-in-out;
    transform: ${({ $isOpen }) => $isOpen ? 'translateX(0)' : 'translateX(100%)'};
    box-shadow: ${({ $isOpen }) => $isOpen ? '-4px 0 15px rgba(0, 0, 0, 0.1)' : 'none'};
  }
`;

const NavItem = styled.div`
  margin: 0 1rem;
  
  a {
    color: var(--text-color);
    text-decoration: none;
    font-weight: 500;
    font-size: 1rem;
    padding: 0.5rem;
    transition: color 0.2s ease;
    
    &:hover,
    &.active {
      color: var(--primary-color);
    }
  }
  
  @media (max-width: 768px) {
    margin: 1rem 0;
    width: 100%;
    text-align: center;
    
    a {
      display: block;
      padding: 0.75rem;
    }
  }
`;

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <HeaderContainer>
      <HeaderContent>
        <LogoWrapper>
          <Logo size="medium" />
        </LogoWrapper>
        
        <MenuToggle onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </MenuToggle>
        
        <Nav $isOpen={menuOpen}>
          <NavItem>
            <NavLink to="/" end>
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/standards">
              Standards
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/blog">
              Blog
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/resources">
              Resources
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/about">
              About
            </NavLink>
          </NavItem>
        </Nav>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;