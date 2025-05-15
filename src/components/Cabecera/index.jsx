import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useState, useEffect } from 'react';

const HeaderWrapper = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 20px 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;

  @media (max-width: 992px) {
    padding: 20px 60px;
  }

  @media (max-width: 768px) {
    padding: 15px 40px;
  }

  @media (max-width: 480px) {
    padding: 15px 20px;
  }
`;

const TitleLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const Title = styled.h1`
  font-family: 'Comfortaa', sans-serif;
  font-size: 24px;
  color: #25282b;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 48px;

  @media (max-width: 992px) {
    gap: 24px;
  }

  @media (max-width: 768px) {
    gap: 20px;
  }

  @media (max-width: 480px) {
    display: none;
  }
`;

const NavItem = styled.a`
  font-family: 'Raleway', sans-serif;
  font-size: 18px;
  color: #25282b;
  text-decoration: none;
  white-space: nowrap;

  @media (max-width: 992px) {
    font-size: 16px;
  }
`;

const NavLink = styled(Link)`
  font-family: 'Raleway', sans-serif;
  font-size: 18px;
  color: #25282b;
  text-decoration: none;
  white-space: nowrap;

  @media (max-width: 992px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const MobileMenuIcon = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  span {
    height: 3px;
    width: 25px;
    background: #25282b;
    margin-bottom: 4px;
    border-radius: 5px;
    transition: all 0.3s ease;
  }

  @media (max-width: 480px) {
    display: flex;
  }
`;

const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 70px;
  left: 0;
  right: 0;
  background-color: white;
  padding: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(-20px)')};
  transition: all 0.3s ease;
  z-index: 5;

  a,
  ${NavLink},
  ${NavItem} {
    margin: 10px 0;
    text-align: center;
  }
`;

const Cabecera = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 480);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeaderWrapper>
      <TitleLink to="/">
        <Title>David Santiago</Title>
      </TitleLink>

      {isMobile ? (
        <>
          <MobileMenuIcon onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </MobileMenuIcon>

          <MobileMenu isOpen={isOpen}>
            <NavLink to="/About" onClick={() => setIsOpen(false)}>
              About
            </NavLink>
            <NavItem href="#projects" onClick={() => setIsOpen(false)}>
              Projects
            </NavItem>
            <NavItem href="#contacts" onClick={() => setIsOpen(false)}>
              Contacts
            </NavItem>
          </MobileMenu>
        </>
      ) : (
        <Nav>
          <NavLink to="/About">About</NavLink>
          <NavItem href="#projects">Projects</NavItem>
          <NavItem href="#contacts">Contacts</NavItem>
        </Nav>
      )}
    </HeaderWrapper>
  );
};

export default Cabecera;