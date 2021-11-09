import React, { FC } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { Header } from './Header';

const SNavigation = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${(props) => props.theme.text};
  nav {
    padding: 120px 34px;

    a {
      display: block;
      font-size: 3rem;
      margin-bottom: 2.5rem;
      text-decoration: none;
      color: ${(props) => props.theme.background};
      &[aria-current='page'] {
        color: ${(props) => props.theme.primary};
      }
      &:hover {
        color: ${(props) => props.theme.primary};
      }
    }

    .close {
      position: fixed;
      top: 30px;
      left: 30px;
      width: 45px;
      height: 34px;
      cursor: pointer;

      &:before,
      &:after {
        content: '';
        position: absolute;
        display: block;
        width: 45px;
        height: 6px;
        top: 50%;
        background-color: white;
        border-radius: 2px;
      }

      &:before {
        transform: translateY(-50%) rotate(45deg);
      }

      &:after {
        transform: translateY(-50%) rotate(-45deg);
      }
    }
  }
`;

interface NavigationProps {
  onClose(): void;
}

export const Navigation: FC<NavigationProps> = ({ onClose }) => {
  return (
    <SNavigation>
      <nav>
        <div className="close" onClick={onClose} />
        <Link to="/">Home</Link>
        <Link to="/levels">Difficulty</Link>
        <Link to="/topics">Topics</Link>
        <Link to="/tags">Tags</Link>
        <Link to="/about">About</Link>
      </nav>
    </SNavigation>
  );
};
