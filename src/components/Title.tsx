import React, { FC } from 'react';

import { SSeparator, STitleCaption } from './common';
import { SFlexColumnContainer } from './containers';

interface TitleProps {
  caption: string;
  title: string;
}

export const Title: FC<TitleProps> = ({ caption, title }) => {
  return (
    <SFlexColumnContainer mt="50px" mb="30px">
      <STitleCaption>{caption}</STitleCaption>
      <h1>{title}</h1>
      <SSeparator />
    </SFlexColumnContainer>
  );
};
