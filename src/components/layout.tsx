import React, { FC } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import GlobalStyle from '../styles/GlobalStyle';
import themes from '../styles/themes';

interface LayoutProps {
  theme?: string;
}

const PageContainer = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
`;

const SideContainer = styled.div`
  width: 25%;
  position: fixed;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  overflow-y: hidden;
  z-index: 1001;
  background: ${(props) => props.theme.text};
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
  border-right: ${(props) => `1px solid ${props.theme.primary}`};
  color: ${(props) => props.theme.background};
`;

const MainContainer = styled.div`
  width: 75%;
  float: right;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
`;

const Section = styled.div`
  padding: 4em 0;
  position: relative;
`;

const Header = styled.div`
  margin: 1em;
  font-size: 30px;
  font-weight: 100;
  line-height: 1;
  text-transform: uppercase;
  width: fit-content;
  text-decoration: none;
  color: ${(props) => props.theme.primary};
`;

const Nav = styled.nav`
  padding: 0 2em;
  position: relative;
`;
const NavItem = styled.li`
  margin: 0 0 20px 0;
  padding: 0;
  list-style: none;
  font-size: 18px;
`;

const NavLink = styled.a`
  text-decoration: none;
  font-weight: 200;
  position: relative;
  padding: 10px 0;
  &:after {
    content: '';
    position: absolute;
    height: 2px;
    bottom: 7px;
    left: 0;
    right: 0;
    background-color: ${(props) => props.theme.primary};
    visibility: hidden;
    -webkit-transform: scaleX(0);
    -moz-transform: scaleX(0);
    -ms-transform: scaleX(0);
    -o-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    -moz-transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    -o-transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  &:hover {
    text-decoration: none;
    cursor: pointer;
    color: ${(props) => props.theme.primary};
    &:after {
      visibility: visible;
      -webkit-transform: scaleX(1);
      -moz-transform: scaleX(1);
      -o-transform: scaleX(1);
      transform: scaleX(1);
    }
  }
`;

const Layout: FC<LayoutProps> = ({ children, theme = 'yellow' }) => (
  <ThemeProvider theme={themes[theme]}>
    <GlobalStyle theme={themes[theme]} />
    <PageContainer>
      <SideContainer>
        <Header>Key Takeaways</Header>
        <Nav>
          <NavItem>
            <NavLink>Lead SE</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>Senior SE</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>Middle SE</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>Junior SE</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>About</NavLink>
          </NavItem>
        </Nav>
      </SideContainer>
      <MainContainer>
        <Section>{children}</Section>
      </MainContainer>
    </PageContainer>
  </ThemeProvider>
);

export default Layout;
