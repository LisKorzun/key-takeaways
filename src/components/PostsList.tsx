import React, { FC } from 'react';
import styled from 'styled-components';

import { PostCard } from './PostCard';
import { IPost } from '../common';

const SPostsList = styled.div`
  & > div:nth-child(1n) {
    flex-direction: row;
  }
  & > div:nth-child(2n) {
    flex-direction: row-reverse;
  }
  & > div:nth-child(3n) {
    flex-direction: row;
  }
  & > div:nth-child(4n) {
    justify-content: center;
    &::before {
      display: block;
    }
    & > div:first-child {
      display: none;
    }
    div {
      align-items: center;
      text-align: center;
    }
  }
  & > div:nth-child(5n) {
    flex-direction: row-reverse;
  }
  & > div:nth-child(6n) {
    flex-direction: row;
  }
  & > div:nth-child(7n) {
    flex-direction: row-reverse;
  }
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
