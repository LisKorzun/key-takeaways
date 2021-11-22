import React, { FC } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { Icon } from './Icon';
import { ICONS } from '../common';

const SBackLink = styled((props) => <Link {...props} />)`
  font-size: 21px;
  font-weight: 500;
  color: ${(props) => props.theme.accent};
  padding-left: 2.5rem;
  position: relative;
  width: 100%;
  display: block;
  svg {
    position: absolute;
    top: 3px;
    left: 0;
    height: 14px;
  }
  &::before {
    background-color: ${(props) => props.theme.primary};
    content: '';
    position: absolute;
    top: -400px;
    left: -50%;
    width: 200%;
    height: 650px;
    z-index: -1;
    opacity: 0.1;
    transform: rotate(-11deg) translateZ(0);
    overflow-x: hidden;
  }
`;

interface BackLinkProps {
  label: string;
  to: string;
}

export const BackLink: FC<BackLinkProps> = ({ label, to }) => (
  <SBackLink to={to}>
    <Icon name={ICONS.ARROW_BACK} color="accent" height="20px" />
    {label}
  </SBackLink>
);
