import React, { FC } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { device } from '../../styles/breakpoints';
import { LABELS } from '../../common';

const SHeader = styled((props) => <Link {...props} />)`
  display: flex;
  align-items: center;
  position: relative;
  margin: 2rem 2.5rem;
  span {
    font-size: 3rem;
    font-weight: 200;
    line-height: 1;
    text-transform: uppercase;
    text-decoration: none;
    color: ${(props) => props.theme.primary};
  }
  &:hover {
    opacity: 1;
  }

  @media only screen and ${device.laptopUp} {
    height: 30rem;
    width: 5rem;
    span {
      width: 30rem;
      position: absolute;
      left: -12rem;
      top: 8rem;
      -webkit-transform: rotate(-90deg);
      transform: rotate(-90deg);
    }
  }
`;

export const Header: FC = () => {
  return (
    <SHeader to="/">
      <span>{LABELS.TITLE}</span>
    </SHeader>
  );
};
