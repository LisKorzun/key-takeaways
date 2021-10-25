import React, { FC } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import Logo from './logo';
import Header from './header';
import Menu from './menu';
import GlobalStyle from '../styles/GlobalStyle';
import themes from '../styles/themes';
import * as sizes from '../styles/sizes';

interface LayoutProps {
  theme?: string;
}

const PageContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
`;

const SideContainer = styled.div`
  width: ${sizes.SIDE_BAR_WIDTH}px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: fixed;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1001;
  background: ${(props) => props.theme.text};
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
  border-right: ${(props) => `${sizes.SIDE_BAR_BORDER_WIDTH}px solid ${props.theme.primary}`};
  color: ${(props) => props.theme.background};
`;

const MainContainer = styled.div`
  margin-left: ${sizes.SIDE_BAR_WIDTH + sizes.SIDE_BAR_BORDER_WIDTH}px;
  padding-left: 50px;
  flex-grow: 1;
  -moz-transition: all 0.2s ease-in-out;
  -o-transition: all 0.2s ease-in-out;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  background-color: ${(props) => props.theme.background};
`;

const Layout: FC<LayoutProps> = ({ children, theme = 'blue' }) => (
  <ThemeProvider theme={{ ...themes[theme] }}>
    <GlobalStyle theme={themes[theme]} />
    <PageContainer>
      <SideContainer>
        <Logo />
        <Header />
        <Menu />
      </SideContainer>
      <MainContainer>{children}</MainContainer>
    </PageContainer>
  </ThemeProvider>
);

export default Layout;
