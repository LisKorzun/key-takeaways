import React, { FC } from 'react';
import { kebabCase } from 'lodash';
import styled from 'styled-components';

import { ROUTES } from '../common';
import { Link } from 'gatsby';

const SPostTags = styled.div`
  a {
    text-transform: uppercase;
    font-size: 1.1rem;
    margin-inline-end: 1.1rem;
    font-weight: 700;
    color: ${({ theme }) => theme.primary};
  }
`;

interface PostTagsProps {
  tags: string[];
}

export const PostTags: FC<PostTagsProps> = ({ tags }) => (
  <SPostTags>
    {tags.map((tag) => (
      <Link to={`${ROUTES.TAG}/${kebabCase(tag)}`} key={tag}>
        {tag}
      </Link>
    ))}
  </SPostTags>
);
