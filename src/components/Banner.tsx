import React, { FC } from 'react';

import { SFlexColumnContainer, SFlexRowContainer } from './containers';
import { SDescription, SSeparator, STitle } from './common';
import { Icon } from './Icon';

interface Props {
  title: string;
  icon: string;
  description?: string;
}
const defaultDescription =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
export const Banner: FC<Props> = ({ title, description = defaultDescription, icon }) => (
  <SFlexRowContainer jc="space-between" mt="150px" mb="150px">
    <SFlexColumnContainer maxW="40%" jc="center">
      <STitle>{title}</STitle>
      <SSeparator />
      <SDescription>{description}</SDescription>
    </SFlexColumnContainer>
    <Icon name={icon} height="300px" color="primary" opacity={0.1} />
  </SFlexRowContainer>
);
