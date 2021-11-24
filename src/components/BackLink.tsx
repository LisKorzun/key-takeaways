import React, { FC } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { Icon } from './Icon';
import { ICONS } from '../common';

const SBackLink = styled((props) => <Link {...props} />)`
  font-size: 2rem;
  font-weight: 600;
  color: ${(props) => props.theme.text};
  margin-left: 2.5rem;
  position: relative;

  svg {
    position: absolute;
    top: 0.4rem;
    left: -2rem;
    height: 1.3rem;
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
