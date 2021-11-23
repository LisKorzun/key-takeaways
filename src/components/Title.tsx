import React, { FC } from 'react';
import styled from 'styled-components';

const STitle = styled.div`
  margin-top: 5rem;
  margin-bottom: 5rem;
  display: flex;
  flex-direction: column;
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
