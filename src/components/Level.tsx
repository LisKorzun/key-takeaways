import React, { FC, Fragment } from 'react';
import { Link } from 'gatsby';
import { find, kebabCase } from 'lodash';
import styled from 'styled-components';

import { Icon } from './Icon';
import { getPostsCount, IGroupedField } from '../common';
import { SFlexRowContainer } from './containers';

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
    font-weight: 700;
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

interface LevelCardProps {
  title: string;
  count: number;
  icon: string;
}

export const Level: FC<LevelCardProps> = ({ title, count, icon }) => (
  <SLevelCard to={`/levels/${kebabCase(title)}`}>
    <Icon name={icon} width="90px" color="primary" />
    <h4>{title}</h4>
    <span>{getPostsCount(count)}</span>
  </SLevelCard>
);

interface LevelsListProps {
  levels: IGroupedField[];
  data: { id: string; title: string }[];
}

export const LevelsList: FC<LevelsListProps> = ({ levels, data }) => (
  <SFlexRowContainer wrap="wrap" gap="20px" mt="30px" w="50%">
    {levels.map(({ fieldValue, totalCount }) => {
      const level = find(data, ['id', fieldValue]);
      const icon = `Level-${fieldValue}`;
      return (
        <Fragment key={fieldValue}>{level && <Level title={level.title} count={totalCount} icon={icon} />}</Fragment>
      );
    })}
  </SFlexRowContainer>
);
