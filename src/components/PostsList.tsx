import React, { FC } from 'react';
import styled, { css } from 'styled-components';

import { PostCard } from './PostCard';
import { IPost } from '../common';
import { device } from '../styles';

const leftAlignment = css`
  flex-direction: row;
  & > div:first-child {
    margin-right: 5rem;
    margin-left: 0;
  }
`;

const rightAlignment = css`
  flex-direction: row-reverse;
  & > div:first-child {
    margin-right: 0;
    margin-left: 5rem;
  }
`;

const SPostsList = styled.div`
  & > article:nth-child(1n) {
    background-color: ${(props) => props.theme.background};
  }
  & > article:nth-child(2n) {
    background-color: rgba(117, 123, 148, 0.1);
  }
  @media only screen and ${device.tabletUp} {
    & > article:nth-child(1n) {
      background-color: inherit;
    }
    & > article:nth-child(2n) {
      background-color: inherit;
      ${rightAlignment}
    }
    & > article:nth-child(4n) {
      justify-content: center;
      &::before {
        display: block;
      }
      & > div:first-child {
        display: none;
      }
      & > div:nth-child(2n) {
        align-items: center;
      }
    }
  }
  @media only screen and ${device.desktopXLUP} {
    & > article:nth-child(2n) {
      ${leftAlignment}
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
