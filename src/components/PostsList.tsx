import React, { FC } from 'react';

import { PostCard } from './PostCard';
import { IPost } from '../common';
import styled from 'styled-components';

const SPostsList = styled.div`
`;

interface PostsListProps {
  posts: IPost[];
}

export const PostsList: FC<PostsListProps> = ({ posts }) => (
  <SPostsList>
    {posts.map((post, index) => (
      <PostCard key={post.id} post={post} right={index % 2 !== 0}/>
    ))}
  </SPostsList>
);
