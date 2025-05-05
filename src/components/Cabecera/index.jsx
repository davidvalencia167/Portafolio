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
`;

const TitleLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const Title = styled.h1`
  font-family: 'Comfortaa', sans-serif;
  font-size: 24px;
  color: #25282b;
`;

const Nav = styled.nav`
  display: flex;
  gap: 48px;
`;

const NavItem = styled.a`
  font-family: 'Raleway', sans-serif;
  font-size: 18px;
  color: #25282b;
  text-decoration: none;
`;

const NavLink = styled(Link)`
  font-family: 'Raleway', sans-serif;
  font-size: 18px;
  color: #25282b;
  text-decoration: none;
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
