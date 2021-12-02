import React, { FC } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { Icon } from './Icon';
import { ICONS } from '../common';

const SBackLink = styled((props) => <Link {...props} />)`
  font-size: 1.5rem;
  font-weight: 400;
  color: ${(props) => props.theme.text};
  margin-left: 2.8rem;
  margin-bottom: 3rem;
  position: relative;
  align-self: center;

  svg {
    position: absolute;
    top: 0.4rem;
    left: -2rem;
    height: 1.1rem;
  }
`;

interface BackLinkProps {
  label: string;
  to: string;
}

export const BackLink: FC<BackLinkProps> = ({ label, to }) => (
  <SBackLink to={to}>
    <Icon name={ICONS.ARROW_BACK} color="text" height="20px" />
    {label}
  </SBackLink>
);
