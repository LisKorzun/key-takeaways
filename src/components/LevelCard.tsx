import React, { FC } from 'react';
import { Link } from 'gatsby';
import { kebabCase } from 'lodash';
import styled from 'styled-components';

import { Icon } from './Icon';

const SLevelCard = styled((props) => <Link {...props} />)`
  padding-top: 50px;
  padding-left: 20px;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 3px;
  border: ${(props) => `1px solid ${props.theme.background}`};
  color: ${(props) => `${props.theme.background}`};

  & h4 {
    margin: 5px 0;
    font-size: 30px;
    font-weight: 200;
  }

  & span {
    align-self: flex-end;
    font-size: 10px;
    font-weight: 600;
    text-transform: uppercase;
    padding: 6px;
    margin-top: 10px;
    margin-bottom: 10px;
    border: ${(props) => `1px solid${props.theme.background}`};
    color: ${(props) => `${props.theme.secondary}`};
    background-color: ${(props) => `${props.theme.background}`};
  }
  &:hover {
    border: ${(props) => `1px solid ${props.theme.primary}`};
  }
`;

interface Props {
  title: string;
  count: number;
  icon: string;
}

export const LevelCard: FC<Props> = ({ title, count, icon }) => (
  <SLevelCard to={`/levels/${kebabCase(title)}`}>
    <Icon name={icon} width="90px" color="primary" />
    <h4>{title}</h4>
    <span>{count} articles</span>
  </SLevelCard>
);