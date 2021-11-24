import React, { FC } from 'react';
import styled from 'styled-components';

import { SSeparator } from './styled';
import { device } from '../styles';
import { Icon } from './Icon';

const SBanner = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  justify-items: end;
  column-gap: 5rem;
  position: relative;
  & .banner-content {
    h1 {
      font-weight: 900;
    }
    margin-top: 5rem;
  }
  & svg {
    align-self: center;
    position: absolute;
    top: 20%;
    right: -20%;
  }

  @media only screen and ${device.laptopUp} {
    grid-template-columns: 2fr 1fr;
    grid-template-rows: min-content;
    & svg {
      position: static;
      margin-right: -15vw;
    }
  }
`;

interface Props {
  title: string;
  icon: string;
  description?: string;
}
const defaultDescription =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
export const Banner: FC<Props> = ({ title, description = defaultDescription, icon }) => (
  <SBanner>
    <div className="banner-content">
      <h1>{title}</h1>
      <SSeparator />
      <p>{description}</p>
    </div>
    <Icon name={icon} height="80%" color="primary" opacity={0.1} />
  </SBanner>
);
