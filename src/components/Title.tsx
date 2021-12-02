import React, { FC } from 'react';
import styled from 'styled-components';
import { device } from '../styles';

const STitle = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
  line-height: 1;
  span {
    font-size: 1.3rem;
    color: ${({ theme }) => theme.primary};
    text-transform: uppercase;
    font-weight: 500;
    letter-spacing: 1px;
  }
  h1 {
    text-transform: capitalize;
    margin: 1rem 0;
  }
  @media only screen and ${device.tabletUp} {
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
      <h1>{title}</h1>
    </STitle>
  );
};
