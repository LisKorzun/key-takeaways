import React, { FC, useState, useRef, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { GlobalStyle, device, themes, ThemeModes } from '../../styles';
import { Navigation, Hamburger } from './';
import { LABELS } from '../../common';

const HEADER_TOP = 170;

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
    display: none;
    font-weight: 200;
    position: fixed;
    opacity: 0.6;
    z-index: 4;
    top: ${HEADER_TOP}px;
    left: 0.5rem;
    width: fit-content;
    height: 7rem;
    font-size: 2rem;
    color: ${(props) => props.theme.accent};
    -webkit-transform: rotate(-90deg);
    transform: rotate(-90deg);
    transition: all 0.2s ease-in-out;
    @media only screen and ${device.tabletUp} {
      display: block;
    }
    @media only screen and ${device.laptopUp} {
      height: 10rem;
      font-size: 3rem;
    }
  }
  .content {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    z-index: 5;
    overflow: hidden;
  }
`;

interface LayoutProps {
  theme?: ThemeModes;
}

export const Layout: FC<LayoutProps> = ({ children, theme = 'light' }) => {
  const [opened, setOpened] = useState(false);
  const windowRef = useRef<HTMLDivElement>(null);
  const frontRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  const updateTransformOrigin = () => {
    const windowDiv = windowRef.current!;
    const pageDiv = frontRef.current!;
    const equation = ((windowDiv.scrollTop + 1800) / pageDiv.offsetHeight) * 100;
    pageDiv.style.transformOrigin = 'center ' + equation + '%';
  };

  useEffect(() => {
    updateTransformOrigin();
  }, []);

  const onScroll = () => {
    updateTransformOrigin();
  };

  const onClose = () => {
    setOpened(false);

    const headerEl = headerRef.current!;
    headerEl.style.position = 'fixed';
    headerEl.style.top = HEADER_TOP + 'px';
  };

  const onOpen = () => {
    setOpened(true);

    const headerEl = headerRef.current!;
    const windowEl = windowRef.current!;
    headerEl.style.position = 'absolute';
    headerEl.style.top = windowEl.scrollTop + HEADER_TOP + 'px';
  };

  return (
    <ThemeProvider theme={{ ...themes[theme] }}>
      <GlobalStyle theme={themes[theme]} />
      <SLayout opened={opened}>
        <Navigation onClose={onClose} />
        <div id="front" ref={windowRef} onScroll={onScroll}>
          <main ref={frontRef}>
            <Hamburger onOpen={onOpen} />
            <header ref={headerRef}>{LABELS.HEADER}</header>
            <div className="content">{children}</div>
          </main>
        </div>
      </SLayout>
    </ThemeProvider>
  );
};
