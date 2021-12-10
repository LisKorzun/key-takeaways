import React, { FC } from 'react';
import styled from 'styled-components';
import { device } from '../styles';

const STitle = styled.h1`
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
  margin-bottom: 3rem;
  line-height: 1;
  span {
    font-size: 1.3rem;
    color: ${({ theme }) => theme.primary};
    text-transform: uppercase;
    font-weight: 500;
    letter-spacing: 1px;
    text-shadow: 0 3px 3px rgb(0 0 0 / 50%);
  }
  div {
    text-transform: capitalize;
  }
  @media only screen and ${device.desktopXLUP} {
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
