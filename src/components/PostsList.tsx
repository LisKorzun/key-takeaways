import React, { FC } from 'react';
import styled from 'styled-components';

import { PostCard } from './PostCard';
import { IPost } from '../common';
import { device } from '../styles';

const SPostsList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-auto-rows: minmax(130px, auto);
  gap: 2rem;
  align-items: center;
  //grid-auto-flow: dense;
  & > div:nth-child(odd) {
    grid-column-end: span 3;
  }
  & > div:nth-child(even) {
    grid-column-end: span 3;
  }
  //& > div:nth-child(5n) {
  //  grid-column: 1/10;
  //  grid-row: 3;
  //  max-height: 220px;
  //  display: none;
  //}
  //& > div:nth-child(6) {
  //  grid-column: 1/10;
  //  grid-row: 3;
  //  padding: 3rem;
  //}
  //& > div:nth-child(1) {
  //  grid-column: 1/5;
  //  grid-row: 1/3;
  //  z-index: -1;
  //}
  //& > div:nth-child(2) {
  //  grid-column: 1/5;
  //  grid-row: 1/3;
  //  align-self: end;
  //  border-radius: 8px;
  //  padding: 4rem 3rem;
  //  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
  //}
  //& > div:nth-child(3) {
  //  display: none;
  //}
  //& > div:nth-child(4) {
  //  grid-column-end: span 4;
  //}
  //& > div:nth-child(5) {
  //  display: none;
  //}
  //& > div:nth-child(6) {
  //  grid-column-end: span 4;
  //}
  //& > div:nth-child(7) {
  //  display: none;
  //}
  //& > div:nth-child(8) {
  //  grid-column-end: span 8;
  //  grid-row-end: span 2;
  //  padding: 0 5rem;
  //}

  & > div:nth-child(1) {
    grid-column: 1/4;
    grid-row: 1;
    z-index: -1;
  }
  & > div:nth-child(2) {
    grid-column: 1/4;
    grid-row: 1;
    align-self: end;
    border-radius: 8px;
    padding: 4rem 3rem;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
  }
  & > div:nth-child(3) {
    display: none;
  }
  & > div:nth-child(4) {
    grid-column-end: span 3;
  }
  & > div:nth-child(5) {
    grid-column: 7/10;
    grid-row: 1/3;
    z-index: -1;
  }
  & > div:nth-child(6) {
    grid-column: 7/10;
    grid-row: 1/3;
    border-radius: 8px;
    padding: 6rem 3rem;
    align-self: center;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  }
  & > div:nth-child(7) {
    display: none;
  }
  & > div:nth-child(8) {
    grid-column-end: span 3;
  }
  & > div:nth-child(9) {
    grid-column: 4/7;
    grid-row: 2;
    z-index: -1;
  }
  & > div:nth-child(10) {
    grid-column: 4/7;
    grid-row: 2;
    align-self: end;
    border-radius: 8px;
    padding: 4rem 3rem;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
  }
  & > div:nth-child(11) {
    grid-column: 1/4;
    grid-row: 3/5;
    z-index: -1;
  }
  & > div:nth-child(12) {
    grid-column: 1/4;
    grid-row: 3/5;
    align-self: end;
    border-radius: 8px;
    padding: 4rem 3rem;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
  }
  & > div:nth-child(15) {
    grid-column: 7/10;
    grid-row: 3;
    z-index: -1;
  }
  & > div:nth-child(16) {
    grid-column: 7/10;
    grid-row: 3;
    align-self: end;
    border-radius: 8px;
    padding: 4rem 3rem;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
  }
  //& > div:nth-child(17) {
  //  grid-column: 7/10;
  //  grid-row: 6/7;
  //  z-index: -1;
  //}
  //& > div:nth-child(18) {
  //  grid-column: 7/10;
  //  grid-row: 6/7;
  //  align-self: end;
  //  border-radius: 8px;
  //  padding: 4rem 3rem;
  //  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
  //}
  & > div:nth-child(13) {
    display: none;
  }
  & > div:nth-child(14) {
    grid-column-end: span 3;
  }
  & > div:nth-child(17) {
    display: none;
  }
  & > div:nth-child(18) {
    grid-column-end: span 6;
  }
  //& > div:nth-child(15) {
  //  grid-column-end: span 2;
  //}
  //& > div:nth-child(16) {
  //  grid-column-end: span 4;
  //}
  //& > div:nth-child(17) {
  //  grid-column-end: span 2;
  //  display: none;
  //}
  //& > div:nth-child(18) {
  //  grid-column-end: span 5;
  //}
  //& > div:nth-child(19) {
  //  grid-column-end: span 2;
  //  display: none;
  //}
  //& > div:nth-child(20) {
  //  grid-column-end: span 5;
  //}
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
