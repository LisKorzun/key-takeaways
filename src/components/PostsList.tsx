import React, { FC } from 'react';
import styled from 'styled-components';

import { PostCard } from './PostCard';
import { IPost } from '../common';
import { device } from '../styles';

const SPostsList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: minmax(130px, auto);
  gap: 3rem;
  align-items: stretch;

  & > article:nth-child(4),
  & > article:nth-child(6),
  & > article:nth-child(11),
  & > article:nth-child(12) {
    grid-column-end: span 2;
    background-image: none;
    align-self: center;
    & > div:first-child {
      display: none;
    }
    & > div:last-child {
      background-image: none;
      align-self: center;
    }
  }
  & > article:nth-child(5),
  & > article:nth-child(10) {
    grid-row-end: span 2;
    grid-template-rows: 1fr;
    & > div:first-child {
      grid-column: 1;
      grid-row: 1;
      z-index: -1;
      border-radius: 8px;
      //display: none;
    }
    & > div:last-child {
      grid-column: 1;
      grid-row: 1;
      align-self: stretch;
      border-radius: 8px;
      padding: 2rem;
      display: flex;
      flex-direction: column;
      justify-content: end;
      //background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
      background-image: linear-gradient(to top, ${({ theme }) => theme.accentRGBA}, rgba(0, 0, 0, 0));
      //background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.7));
    }
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
