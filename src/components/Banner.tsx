import React, { FC } from 'react';
import styled from 'styled-components';

import { SSeparator } from './common';
import { device } from '../styles/breakpoints';
import { Icon } from './Icon';

interface SBannerProps {
  rotate: boolean;
}

const SBanner = styled.div<SBannerProps>`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  justify-items: end;
  column-gap: 5rem;
  position: relative;
  & .banner-content {
    margin-top: 10rem;
  }
  & svg {
    align-self: center;
    position: absolute;
    top: -100px;
    right: 0;
    transform: ${({ rotate }) => (rotate ? `rotate(0.1turn)` : `none`)};
  }

  @media only screen and ${device.laptopUp} {
    grid-template-columns: 1fr min-content;
    grid-template-rows: min-content;
    & svg {
      position: static;
    }
  }
`;

interface Props {
  title: string;
  icon: string;
  description?: string;
  rotateIcon?: boolean;
}
const defaultDescription =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
export const Banner: FC<Props> = ({ title, description = defaultDescription, icon, rotateIcon = false }) => (
  <SBanner rotate={rotateIcon}>
    <div className="banner-content">
      <h1>{title}</h1>
      <SSeparator />
      <p>{description}</p>
    </div>
    <Icon name={icon} height="80%" color="primary" opacity={0.1} />
  </SBanner>
);
