import React, { FC } from 'react';
import { kebabCase } from 'lodash';
import styled from 'styled-components';

import { ROUTES } from '../common';
import { Link } from 'gatsby';

interface IPostTags {
  size?: 'small' | 'medium';
}
const SPostTags = styled.div<IPostTags>`
  display: flex;
  flex-wrap: wrap;
  a {
    text-transform: uppercase;
    font-size: ${({ size = 'small' }) => `${size === 'small' ? 1.1 : 1.5}rem`};
    margin-inline-end: ${({ size = 'small' }) => `${size === 'small' ? 1.1 : 1.6}rem`};
    font-weight: 700;
    color: ${({ theme }) => theme.primary};
  }
`;

interface PostTagsProps {
  tags: string[];
  size?: 'small' | 'medium';
}

export const PostTags: FC<PostTagsProps> = ({ tags, size = 'small' }) => (
  <SPostTags size={size}>
    {tags.map((tag) => (
      <Link to={`${ROUTES.TAG}/${kebabCase(tag)}`} key={tag}>
        #{tag}
      </Link>
    ))}
  </SPostTags>
);
