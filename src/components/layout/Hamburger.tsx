import React, { FC } from 'react';
import styled from 'styled-components';

import { device } from '../../styles';

const SHamburger = styled.button`
  position: fixed;
  z-index: 4;
  top: 25px;
  left: 20px;
  width: 52px;
  height: 38px;
  transition: all 300ms cubic-bezier(0.61, 0.01, 0.42, 1);
  cursor: pointer;
  background: transparent;
  border: 0;
  padding: 0;

  @media only screen and ${device.laptopUp} {
    top: 30px;
    left: 30px;
  }
  div {
    height: 0;
    width: 35px;
    display: block;
    position: absolute;
    border-radius: 2px;
    transition: all 300ms cubic-bezier(0.61, 0.01, 0.42, 1);
    background: ${(props) => props.theme.text};
    border: 2px solid ${(props) => props.theme.text};
  }

  &:hover {
    transition-delay: 100ms;
    transform: scale(1.1);
  }

  &:hover div:nth-child(3):before {
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background: ${(props) => props.theme.text};
  }

  &:hover div {
    border: 3px solid ${(props) => props.theme.text};
    height: 13px;
    border-radius: 50%;
    margin-left: -1px;
    margin-top: 2px;
    animation: atom 300ms linear 1;
    width: 35px;
    top: 0;
    background: transparent;
  }

  &:focus {
    outline: 0;
  }

  div:nth-child(1) {
    top: 0;
  }

  div:nth-child(2) {
    top: 14px;
    width: 25px;
  }

  div:nth-child(3) {
    top: 28px;
  }

  div:nth-child(3):before {
    opacity: 0;
    animation: ball 1.5s linear infinite;
    content: '';
    border: 2px solid ${(props) => props.theme.text};
    display: block;
    position: relative;
    top: 0.25px;
  }

  &:hover div:nth-child(1) {
    transform: rotate(-33deg);
    top: 9px;
  }

  &:hover div:nth-child(2) {
    transform: rotate(90deg);
    top: 8px;
    width: 35px;
  }

  &:hover div:nth-child(3) {
    transform: rotate(33deg);
    top: 9px;
  }

  &:hover div:nth-child(3):before {
    opacity: 1;
    transition: opacity 600ms cubic-bezier(0.61, 0.01, 0.42, 1);
  }

  &:active:hover div:nth-child(3):before,
  &:active div:nth-child(3):before,
  &:active div:nth-child(2) {
    opacity: 0;
    transition: all 200ms;
  }

  &:active div {
    border: 1.5px solid ${(props) => props.theme.text};
    height: 0;
    border-radius: 0%;
    margin-left: -1px;
    margin-top: 6px;
    animation: division 300ms linear 1;
    width: 25px;
    top: 0;
  }

  &:active div:nth-child(2) {
    width: 0;
  }

  &:active div:nth-child(3) {
    transform: rotate(45deg);
  }

  &:active div:nth-child(1) {
    transform: rotate(-45deg);
  }

  @keyframes atom {
    0% {
      transform: rotate(180deg);
    }
  }

  @keyframes division {
    0% {
      transform: rotate(180deg);
    }
  }

  @keyframes ball {
    0% {
      left: -20%;
      top: 10%;
    }
    10% {
      left: 10%;
      top: -35%;
    }
    25% {
      left: 45%;
      top: -50%;
    }
    40% {
      left: 80%;
      top: -20%;
    }
    50% {
      left: 98%;
      top: 18%;
    }
    60% {
      left: 80%;
      top: 50%;
    }
    75% {
      left: 45%;
      top: 80%;
    }
    90% {
      left: 0%;
      top: 60%;
    }
    100% {
      left: -20%;
      top: 10%;
    }
  }
`;

interface HamburgerProps {
  onOpen(): void;
}

export const Hamburger: FC<HamburgerProps> = ({ onOpen }) => (
  <SHamburger onClick={onOpen}>
    <div />
    <div />
    <div />
  </SHamburger>
);
