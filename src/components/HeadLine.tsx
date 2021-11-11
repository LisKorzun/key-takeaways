import React, { FC } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { MARGIN_MEDIUM } from '../styles/sizes';
import { Icon } from './Icon';
import { ICONS } from '../common';
import { device } from '../styles';

const SHeadLine = styled.div`
  padding: 25px 0 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  overflow: hidden;
  margin-bottom: ${MARGIN_MEDIUM}px;
  @media only screen and ${device.tabletUp} {
    align-items: flex-end;
  }

  &::after {
    background: #fff url(/images/border.png) 1px bottom repeat-x;
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: 0;
    left: 0;
  }
  h2 {
    text-transform: uppercase;
    color: ${(props) => props.theme.primary};
    line-height: 1;
  }
`;

const SHeadLineLink = styled((props) => <Link {...props} />)`
  color: ${(props) => props.theme.text};
  display: flex;
  align-items: center;
  opacity: 0.6;
  span {
    font-size: calc(1rem + 0.7vw);
    display: none;
    font-weight: 600;
  }
  svg {
    margin-right: 2rem;
    height: calc(2rem + 0.7vw);
  }
  &:hover {
    color: ${(props) => props.theme.accent};
  }
  @media only screen and ${device.tabletUp} {
    span {
      display: block;
      font-size: 21px;
      color: ${(props) => props.theme.accent};
    }
    svg {
      margin-right: 1rem;
      height: 18px;
      fill: ${(props) => props.theme.accent};
    }
  }
`;

interface Props {
  heading: string;
  link?: string;
  label?: string;
}

export const HeadLine: FC<Props> = ({ heading, link, label }) => (
  <SHeadLine>
    <h2>{heading}</h2>
    {link && (
      <SHeadLineLink to={link}>
        <Icon name={ICONS.ARROW_RIGHT} color="secondary" height="10px" />
        <span>{label}</span>
      </SHeadLineLink>
    )}
  </SHeadLine>
);
