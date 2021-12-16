import React, { FC } from 'react';
import styled from 'styled-components';
import { device } from '../styles';

const STitle = styled.h1`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  margin-bottom: 3rem;
  line-height: 1;
  text-align: center;
  span {
    font-size: 1.3rem;
    color: ${({ theme }) => theme.primary};
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 1px;
    line-height: 2rem;
    text-shadow: none;
  }
  div {
    text-transform: capitalize;
  }
  @media only screen and ${device.tabletUp} {
    text-align: left;
  }
  @media only screen and ${device.desktopXLUP} {
    margin-top: 5rem;
    span {
      font-size: 1.6rem;
    }
  }
`;

interface TitleProps {
  caption: string;
  title: string;
  icon?: string;
}

export const Title: FC<TitleProps> = ({ caption, title }) => {
  return (
    <STitle>
      <span>{caption}</span>
      <div>{title}</div>
    </STitle>
  );
};
