import React, { FC } from 'react';
import { Link } from 'gatsby';
import { kebabCase } from 'lodash';
import styled from 'styled-components';

import { ROUTES } from '../common';

const SPostTopic = styled((props) => <Link {...props} />)`
  display: block;
  font-size: 15px;
  font-weight: 400;
  text-transform: uppercase;
  color: ${({ theme }) => theme.primary};
  &:hover {
    color: ${({ theme }) => theme.accent};
  }
`;

interface PostTopicProps {
  topic: string;
}

export const PostTopic: FC<PostTopicProps> = ({ topic }) => (
  <SPostTopic to={`${ROUTES.TOPICS}/${kebabCase(topic)}`}>{topic}</SPostTopic>
);
