import React, { FC } from 'react';
import { Link } from 'gatsby';
import { kebabCase } from 'lodash';

import styled from 'styled-components';

const STopicCard = styled((props) => <Link {...props} />)`
  min-height: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  color: ${(props) => props.theme.text};
  & h3 {
    line-height: 1;
    width: 100%;
    text-transform: capitalize;
    padding-left: 2.5rem;
    position: relative;
    overflow: hidden;
    margin: 2rem 0;
  }
  & h3:before {
    width: 0.8rem;
    height: 0.8rem;
    background: ${(props) => props.theme.primary};
    margin-top: 1rem;
    margin-left: -2.5rem;
    position: absolute;
    border-radius: 0.1rem;
    content: '';
  }
  & h3:after {
    content: '';
    position: absolute;
    top: 50%;
    width: 100%;
    height: 1px;
    border-top: 1px dashed ${(props) => props.theme.border};
    margin-left: 2rem;
  }
  & span {
    margin-left: 2rem;
    margin-right: 2rem;
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

export const TopicCard: FC<TopicCardProps> = ({ title, count }) => (
  <STopicCard to={`/topics/${kebabCase(title)}`}>
    <h3> {title}</h3>
    <span>{count}</span>
  </STopicCard>
);
