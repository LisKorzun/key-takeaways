import React, { FC } from 'react';
import styled, { css } from 'styled-components';

import { PostCard } from './PostCard';
import { IPost } from '../common';
import { device } from '../styles';

const hideImage = css`
  grid-template-rows: auto;
  & > div:first-child {
    display: none;
  }
`;

const horizontalCard = css`
  grid-column-end: span 2;
  align-self: center;
  ${hideImage}

  & > div:last-child {
    align-self: center;
  }
`;

const verticalCard = css`
  grid-row-end: span 2;
  ${hideImage}

  & > div:last-child {
    align-self: auto;
  }
`;

const SPostsList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-auto-rows: minmax(115px, auto);
  gap: 3rem;
  align-items: stretch;
  @media only screen and ${device.small} {
    & > article:nth-child(3n) {
      ${hideImage}
    }
  }

  @media only screen and ${device.medium} {
    grid-template-columns: repeat(2, 1fr);
    & > article:nth-child(3),
    & > article:nth-child(8) {
      ${horizontalCard}
    }
    & > article:nth-child(5),
    & > article:nth-child(9) {
      grid-template-rows: auto;
      & > div:first-child {
        display: none;
      }

      & > div:last-child {
        align-self: auto;
      }
    }
  }
  @media only screen and ${device.large} {
    grid-template-columns: repeat(3, 1fr);
    & > article:nth-child(4),
    & > article:nth-child(6),
    & > article:nth-child(11),
    & > article:nth-child(12) {
      ${horizontalCard}
    }

    & > article:nth-child(5),
    & > article:nth-child(10) {
      ${verticalCard}
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
