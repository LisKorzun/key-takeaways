import { kebabCase } from 'lodash';
import React, { FC } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

export const STopicCard = styled((props) => <Link {...props} />)`
  min-height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  color: #0d1b2a;
  & h3 {
    font-size: 30px;
    line-height: 30px;
    font-weight: 300;
    width: 100%;
    text-transform: capitalize;
    padding-left: 25px;
    position: relative;
    overflow: hidden;
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
    //background-color: ${(props) => props.theme.primary};
    //padding: 5px;
    //border-radius: 3px;
  }
  &:hover {
    color: #bbc6d4;
  }
`;

interface Props {
  title: string;
  count: number;
}

export const TopicCard: FC<Props> = ({ title, count }) => (
  <STopicCard to={`/topics/${kebabCase(title)}`}>
    <h3> {title}</h3>
    <span>{count}</span>
  </STopicCard>
);
