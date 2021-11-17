import React, { FC } from 'react';
import { Link } from 'gatsby';
import { kebabCase } from 'lodash';
import styled from 'styled-components';

import { Icon } from './Icon';
import { getPostsCount } from '../common';
import { device } from '../styles';

const SLevelCard = styled((props) => <Link {...props} />)`
  padding-top: 5rem;
  padding-left: 2rem;
  min-width: 90%;
  background-color: ${(props) => `${props.theme.background}`};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 0.8rem;
  color: ${(props) => `${props.theme.text}`};
  border: 1px solid ${(props) => `${props.theme.background}`};
  transition: transform 0.2s ease-in-out;
  @media only screen and ${device.mobileUp} {
    min-width: 40%;
  }

  & h3 {
    margin: 0.5rem 0;
    font-size: 23px;
    font-weight: 300;
    color: ${(props) => `${props.theme.accent}`};
  }

  & span {
    align-self: flex-end;
    font-size: 1.1rem;
    font-weight: 600;
    text-transform: uppercase;
    padding: 0.7rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    margin-right: -0.1rem;
    line-height: 1;
    color: ${(props) => `${props.theme.background}`};
    background-color: ${(props) => `${props.theme.text}`};
  }
  &:hover {
    transform: scale(1.03);
  }
`;

interface LevelCardProps {
  title: string;
  count: number;
  icon: string;
}

export const LevelCard: FC<LevelCardProps> = ({ title, count, icon }) => (
  <SLevelCard to={`/levels/${kebabCase(title)}`}>
    <Icon name={icon} width="90px" color="primary" />
    <h3>{title}</h3>
    <span>{getPostsCount(count)}</span>
  </SLevelCard>
);
