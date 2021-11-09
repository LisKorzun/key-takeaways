import React, { FC, useState, useRef, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import GlobalStyle from '../../styles/GlobalStyle';
import themes from '../../styles/themes';
import { device } from '../../styles/breakpoints';
import { Navigation, Hamburger, Header } from './';
import { LABELS } from '../../common';

interface SLayoutProps {
  opened: boolean;
}

const SLayout = styled.div<SLayoutProps>`
  #front {
    height: 100vh;
    width: 100vw;
    position: relative;
    overflow-x: hidden;
    z-index: 2;
    ${({ opened }) =>
      opened &&
      `
      overflow: hidden;
      pointer-events: none;
      main {
        transform: rotate(10deg) translateZ(0);
      }
  `}
  }

  main {
    pointer-events: auto;
    min-height: 100vh;
    position: relative;
    z-index: 3;
    overflow-y: auto;
    background-color: ${(props) => props.theme.background};
    box-shadow: 0 0 20px rgba(black, 0.7);
    transform-origin: center 70%;
    transition: all 0.3s ease;
  }
  header {
    font-family: 'Josefin Sans';
    font-weight: 200;
    position: fixed;
    opacity: 0.4;
    z-index: 4;
    top: 70vh;
    left: 0;
    width: fit-content;
    height: 10rem;
    font-size: 3rem;
    opacity: 0.4;
    -webkit-transform: rotate(-90deg);
    transform: rotate(-90deg);
  }

  .content {
    width: 80vw;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    z-index: 5;
  }

  @media only screen and ${device.laptopUp} {
    .content {
      width: 70vw;
    }
  }
`;

interface LayoutProps {
  theme?: string;
}

export const Layout: FC<LayoutProps> = ({ children, theme = 'yellow' }) => {
  const [opened, setOpened] = useState(false);
  const windowRef = useRef(null);
  const frontRef = useRef(null);
  const headerRef = useRef(null);

  const updateTransformOrigin = () => {
    const scrollTop = windowRef.current.scrollTop;
    const pageHeight = frontRef.current.offsetHeight;
    const equation = ((scrollTop + 1800) / pageHeight) * 100;
    frontRef.current.style.transformOrigin = 'center ' + equation + '%';
  };

  useEffect(() => {
    updateTransformOrigin();
    console.log(window.outerHeight);
  }, []);

  const onScroll = () => {
    updateTransformOrigin();
  };

  const onClose = () => {
    setOpened(false);
    headerRef.current.style.position = 'fixed';
    headerRef.current.style.top = 70 + 'vh';
  };

  const onOpen = () => {
    setOpened(true);
    headerRef.current.style.position = 'absolute';
    headerRef.current.style.top = windowRef.current.scrollTop + window.innerHeight * 0.7 + 'px';
  };

  return (
    <ThemeProvider theme={{ ...themes[theme] }}>
      <GlobalStyle theme={themes[theme]} />
      <SLayout opened={opened}>
        <Navigation onClose={onClose} />
        <div id="front" ref={windowRef} onScroll={onScroll}>
          <main ref={frontRef}>
            <Hamburger onOpen={onOpen} />
            <header ref={headerRef}>{LABELS.TITLE}</header>
            <div className="content">{children}</div>
          </main>
        </div>
      </SLayout>
    </ThemeProvider>
  );
};
