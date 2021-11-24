import React, { FC } from 'react';
import styled from 'styled-components';
import { device } from '../styles';

const STitle = styled.div`
  margin-top: calc(2rem + 1.5vw);
  margin-bottom: calc(2rem + 1.5vw);
  display: flex;
  flex-direction: column;
  align-items: center;
  span {
    font-size: 1.8rem;
    color: ${(props) => props.theme.primary};
    text-transform: uppercase;
    font-weight: 400;
    margin-bottom: 0.5rem;
  }
  h2 {
    font-family: 'Architects Daughter';
    font-size: calc(4rem + 2vw);
    font-weight: 700;
    text-transform: capitalize;
  }
  @media only screen and ${device.tabletUp} {
    align-items: flex-start;
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
      <h2>{title}</h2>
    </STitle>
  );
};
