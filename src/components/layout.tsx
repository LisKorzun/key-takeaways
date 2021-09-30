import React, { FC } from 'react';
import GlobalStyle from '../styles/GlobalStyle';

interface LayoutProps {
  theme?: string;
}

const Layout: FC<LayoutProps> = ({ children, theme = 'light' }) => (
  <>
    <GlobalStyle theme={theme} />
    {children}
  </>
);

export default Layout;
