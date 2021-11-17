import React, { FC } from 'react';
import { IPost, LABELS } from '../common';
import styled from 'styled-components';
import { SHeading } from './styled';
import { device } from '../styles';

const SFeaturedList = styled.div`
  height: auto;
  width: 100%;
  max-width: 90vw;
  margin: -6vh auto 2rem;
  position: relative;
  border-radius: 1rem;
  @media only screen and ${device.mobileUp} {
    max-width: 85vw;
  }

  @media only screen and ${device.tabletUp} {
    max-width: 80vw;
  }
  @media only screen and ${device.laptopUp} {
    width: 40%;
    max-width: 30vw;
    margin: -13vh auto 2rem;
  }
  div {
    margin: 2rem 0;
    padding: 2rem 3rem;
    color: ${(props) => props.theme.background};
    font-weight: 500;
    font-size: 25px;
    line-height: 1.2;
    span {
      display: block;
      font-weight: 400;
      font-size: 14px;
      margin-bottom: 1rem;
      text-transform: uppercase;
      color: ${(props) => props.theme.accent};
    }
  }
  h2 {
    color: ${(props) => props.theme.background};
    border-bottom: 1px dashed ${(props) => props.theme.accent};
    padding: 3rem;
    margin: 0;
  }

  &::before {
    background-color: ${(props) => props.theme.text};
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    overflow-x: hidden;
    border-radius: 0.8rem;
  }
`;

interface FeaturedListProps {
  posts: IPost[];
}

export const FeaturedList: FC<FeaturedListProps> = ({ posts }) => (
  <SFeaturedList>
    <SHeading>{LABELS.FEATURED}</SHeading>
    {posts.map((post) => (
      <div key={post.id}>
        <span>{post.frontmatter.topic}</span>
        {post.frontmatter.title}
      </div>
    ))}
  </SFeaturedList>
);
