import React, { FC } from 'react';

import { PostCard } from './PostCard';
import { IPost } from '../common';
import styled from 'styled-components';

const SPostsList = styled.div`
  //margin-top: 1rem;
  //margin-bottom: 1rem;
`;

interface PostsListProps {
  posts: IPost[];
}

export const PostsList: FC<PostsListProps> = ({ posts }) => (
  <SPostsList>
    {posts.map((post) => (
      <PostCard key={post.id} post={post} />
    ))}
  </SPostsList>
);
