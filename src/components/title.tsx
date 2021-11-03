import React, { FC } from 'react';

import { STitle, SSeparator } from './common';
import { SFlexColumnContainer } from './containers';
import styled from 'styled-components';

interface TitleProps {
  caption: string;
  title: string;
}

const STitleCaption = styled.caption`
  font-size: 15px;
  font-weight: 600;
  text-transform: uppercase;
  text-align: start;
  color: ${(props) => props.theme.primary};
  margin-bottom: 10px;
`;

export const Title: FC<TitleProps> = ({ caption, title }) => {
  return (
    <SFlexColumnContainer mt="50px">
      <STitleCaption>{caption}</STitleCaption>
      <STitle>{title}</STitle>
      <SSeparator />
    </SFlexColumnContainer>
  );
};
