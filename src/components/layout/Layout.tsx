import React, { FC, useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

import { device } from '../../styles';
import { ThemeProvider } from '../ThemeContext';
import { Navigation, Hamburger } from './';
import { LABELS } from '../../common';
import ThemeToggle from '../ThemeToggle';

const HEADER_TOP = 200;

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
      .page {
        transform: rotate(10deg) translateZ(0);
      }
  `}
  }
  .page {
    pointer-events: auto;
    min-height: 100vh;
    position: relative;
    z-index: 3;
    background-color: var(--color-background);
    box-shadow: 0 0 20px rgba(black, 0.7);
    transform-origin: center 70%;
    transition: all 0.3s ease;
  }
  .header {
    opacity: 0;
    font-weight: 100;
    font-size: 1.5rem;
    font-family: 'Syncopate', sans-serif;
    position: fixed;
    z-index: -1;
    top: 250px;
    left: -50px;
    height: 35px;
    color: var(--color-text);
    -webkit-transform: rotate(-90deg);
    transform: rotate(-90deg);
    transition: opacity 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    @media only screen and ${device.tabletUp} {
      opacity: 1;
    }
    @media only screen and ${device.laptopUp} {
      left: -40px;
    }
  }
  .content {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    z-index: 5;
  }
`;

export const Layout: FC = ({ children }) => {
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
    <ThemeProvider>
      <SLayout opened={opened}>
        <Navigation onClose={onClose} />
        <div id="front" ref={windowRef} onScroll={onScroll}>
          <div ref={frontRef} className="page">
            <Hamburger onOpen={onOpen} />
            <div ref={headerRef} className="header">
              {LABELS.HEADER}
            </div>
            <div className="content">{children}</div>
            <ThemeToggle />
          </div>
        </div>
      </SLayout>
    </ThemeProvider>
  );
};
