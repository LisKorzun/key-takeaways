import { kebabCase } from 'lodash';
import React, { FC } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { SFlexColumnContainer } from './containers';
import { IGroupedField } from '../common';

export const STopicCard = styled((props) => <Link {...props} />)`
  min-height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  color: ${(props) => props.theme.secondary};
  & h3 {
    font-size: 30px;
    line-height: 30px;
    font-weight: 200;
    width: 100%;
    text-transform: capitalize;
    padding-left: 25px;
    position: relative;
    overflow: hidden;
    margin: 20px 0;
  }
  & h3:before {
    width: 8px;
    height: 8px;
    background: #06bcf0;
    margin-top: 10px;
    margin-left: -25px;
    position: absolute;
    border-radius: 1px;
    content: '';
  }
  & h3:after {
    content: '';
    position: absolute;
    top: 50%;
    width: 100%;
    height: 1px;
    border-top: 1px dashed ${(props) => props.theme.border};
    margin-left: 20px;
  }
  & span {
    margin-left: 20px;
    margin-right: 20px;
    font-weight: 400;
  }
  &:hover {
    color: ${(props) => props.theme.accent};
  }
`;

interface TopicCardProps {
  title: string;
  count: number;
}

export const Topic: FC<TopicCardProps> = ({ title, count }) => (
  <STopicCard to={`/topics/${kebabCase(title)}`}>
    <h3> {title}</h3>
    <span>{count}</span>
  </STopicCard>
);

interface TopicsListProps {
  topics: IGroupedField[];
}

export const TopicsList: FC<TopicsListProps> = ({ topics }) => (
  <SFlexColumnContainer>
    {topics.map(({ fieldValue, totalCount }) => (
      <Topic key={fieldValue} title={fieldValue} count={totalCount} />
    ))}
  </SFlexColumnContainer>
);
