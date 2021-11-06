import React, { FC } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { MARGIN_MEDIUM } from '../styles/sizes';
import { Icon } from './Icon';

const SHeadLine = styled.div`
  padding: 25px 0 20px;
  display: flex;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  margin-bottom: ${MARGIN_MEDIUM}px;
  &::before {
    background: #fff url(/images/border.png) 2px top repeat-x;
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    top: 0;
    left: 0;
  }
  &::after {
    background: #fff url(/images/border.png) 2px bottom repeat-x;
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
  }
  & h3 {
    font-size: 20px;
    font-weight: 400;
    text-transform: uppercase;
    color: ${(props) => props.theme.secondary};
    margin: 0;
  }
`;

const SHeadingLink = styled((props) => <Link {...props} />)`
  color: ${(props) => props.theme.secondary};
  display: flex;
  align-items: center;
  font-size: 16px;
  svg {
    margin-right: 10px;
  }
  &:hover {
    color: ${(props) => props.theme.accent};
  }
`;

interface Props {
  heading: string;
  link?: string;
  label?: string;
}

export const HeadLine: FC<Props> = ({ heading, link, label }) => (
  <SHeadLine>
    <h3>{heading}</h3>
    {link && (
      <SHeadingLink to={link}>
        <Icon name="arrow-right" color="secondary" height="16px" />
        {label}
      </SHeadingLink>
    )}
  </SHeadLine>
);
