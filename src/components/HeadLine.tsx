import React, { FC } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

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
  margin-bottom: 2rem;

  h2 {
    text-transform: uppercase;
    color: ${(props) => props.theme.accent};
    opacity: 0.6;
    line-height: 1;
  }
`;

const SHeadLineLink = styled((props) => <Link {...props} />)`
  color: ${(props) => props.theme.text};
  display: flex;
  align-items: center;
  opacity: 0.6;
  span {
    display: none;
    font-size: calc(1rem + 0.6vw);
    font-weight: 400;
    color: ${(props) => props.theme.accent};
  }
  svg {
    margin-right: 2rem;
    height: calc(2rem + 0.7vw);
    fill: ${(props) => props.theme.accent};
  }
  &:hover {
    span {
      color: ${(props) => props.theme.primary};
    }
    svg {
      fill: ${(props) => props.theme.primary};
    }
  }
  @media only screen and ${device.tabletUp} {
    span {
      display: block;
    }
    svg {
      margin-right: 1rem;
      height: 18px;
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
