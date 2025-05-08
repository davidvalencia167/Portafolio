import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
`;

const Cabecera = () => {
  return (
    <HeaderWrapper>
      <TitleLink to="/">
        <Title>David Santiago</Title>
      </TitleLink>
      <Nav>
        <NavLink to="/About">About</NavLink>
        <NavItem href="#projects">Projects</NavItem>
        <NavItem href="#contacts">Contacts</NavItem>
      </Nav>
    </HeaderWrapper>
  );
};

export default Cabecera;