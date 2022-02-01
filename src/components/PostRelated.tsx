import React, { FC } from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

import { IPost } from '../common';
import { PostTags } from './PostTags';

const SPostRelated = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 30px;
  margin-bottom: 80px;
`;

interface PostRelatedProps {
  posts: IPost[];
}

const SHeading = styled.h5`
  position: relative;
  overflow: hidden;
  margin-top: 80px;
  margin-bottom: 40px;
  line-height: 1;
  color: ${({ theme }) => theme.accentRGBA};
  font-weight: 800;
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.accentRGBA};
    margin-left: 20px;
  }
`;
const SPostTrendingImage = styled((props) => <GatsbyImage {...props} />)`
  z-index: -1;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  max-height: 150px;

  &:after {
    position: absolute;
    content: '';
    display: block;
    width: 100%;
    min-height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(50, 50, 50, 0) 0%,
      rgba(16, 15, 15, 0.91) 89%,
      rgba(16, 15, 15, 0.93) 93%
    );
    transition: 0.2s all ease-in-out;
    opacity: 0.93;
  }
`;

const SPostTrendingCard = styled.div`
  position: relative;
  .content {
    position: absolute;
    bottom: 20px;
    left: 20px;
    right: 20px;
    z-index: 500;
    color: white;
    & > div:nth-child(1) {
      font-size: 12px;
      font-weight: 600;
      margin-bottom: 10px;
    }
    & > a:nth-child(2) {
      color: white;
      font-size: 18px;
      font-weight: 400;
      line-height: 1.3;
    }
  }
`;
interface Props {
  post: IPost;
}
const TrendingCard: FC<Props> = ({ post }) => {
  const {
    slug,
    frontmatter: { hero_image, tags, title },
  } = post;
  const image = getImage(hero_image)!;

  return (
    <SPostTrendingCard>
      <SPostTrendingImage image={image} alt="" />
      <div className="content">
        <PostTags tags={tags} />
        <Link to={`/${slug}`}>{title}</Link>
      </div>
    </SPostTrendingCard>
  );
};
export const PostRelated: FC<PostRelatedProps> = ({ posts }) => (
  <>
    <SHeading>Related Posts</SHeading>
    <SPostRelated>
      {posts.map((post) => (
        <TrendingCard key={post.id} post={post} />
      ))}
    </SPostRelated>
  </>
);
