import React, { FC } from 'react';
import { Link } from 'gatsby';
import { kebabCase } from 'lodash';
import styled from 'styled-components';

import { ILevelData, ROUTES } from '../common';
import { Icon } from './Icon';

const SLevelCard = styled((props) => <Link {...props} />)`
  display: grid;
  grid-template-columns: auto 20px;
  grid-template-rows: auto auto;
  background-color: ${({ theme }) => theme.accentRGBA};
  padding: 10px;
  border-radius: 0.8rem;
  transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);
  &:hover {
    transform: translateY(-4px);
  }
  & > svg {
    grid-row-end: span 2;
  }
  & > span {
    font-size: 1.3rem;
    color: ${({ theme }) => theme.primary};
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 1px;
    line-height: 2rem;
    text-shadow: none;
  }
  & > p {
    color: ${(props) => props.theme.text};
    text-transform: capitalize;
    font-size: 2rem;
    font-weight: 500;
  }
`;

interface LevelCardProps {
  level: ILevelData;
}

export const LevelCard: FC<LevelCardProps> = ({ level }) => {
  return (
    <SLevelCard to={`${ROUTES.LEVEL}/${kebabCase(level.title)}`}>
      <span>{level.caption}</span>
      <Icon name={level.icon} height="30px" color="accent" />
      <p>{level.title}</p>
    </SLevelCard>
  );
};
