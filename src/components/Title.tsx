import React, { FC } from 'react';
import styled from 'styled-components';

import { SSeparator } from './styled';
import { device } from '../styles';

const STitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-size: calc(1rem + 1vw);
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: ${(props) => props.theme.primary};
    margin: 0 0 1rem;
  }

  @media only screen and ${device.tabletUp} {
    align-items: flex-start;
  }
`;

interface TitleProps {
  caption: string;
  title: string;
}

export const Title: FC<TitleProps> = ({ caption, title }) => {
  return (
    <STitle>
      <p>{caption}</p>
      <h1>{title}</h1>
      <SSeparator />
    </STitle>
  );
};
