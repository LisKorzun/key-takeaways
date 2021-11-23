import React, { FC } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { Icon } from './Icon';
import { ICONS } from '../common';

const SBackLink = styled((props) => <Link {...props} />)`
  font-size: 2rem;
  font-weight: 600;
  color: ${(props) => props.theme.text};
  padding-left: 2.5rem;
  position: relative;
  width: 100%;
  display: block;
  svg {
    position: absolute;
    top: 4px;
    left: 0;
    height: 13px;
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
