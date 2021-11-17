import React, { FC } from 'react';
import styled from 'styled-components';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import { IPost } from '../common';
import { PostCardHeading } from './PostCardHeading';

const SPostImage = styled((props) => <GatsbyImage {...props} />)`
  height: 30rem;
  width: 30rem;
  min-width: 30rem;
  object-fit: cover;
  border-radius: 0.8rem;
  object-position: center;
  overflow: hidden;
  position: relative;
`;
const SPostCard = styled.div`
  display: flex;
  padding-top: 2rem;
  padding-bottom: 2rem;
  justify-content: space-between;
  position: relative;
  margin-top: 1rem;
  margin-bottom: 1rem;
  &::before {
    display: none;
    background-color: ${(props) => props.theme.accent};
    content: '';
    position: absolute;
    top: -30%;
    left: -50%;
    width: 200%;
    height: 160%;
    z-index: -1;
    opacity: 0.1;
    overflow-x: hidden;
    border-radius: 0.8rem;
  }
`;

interface Props {
  post: IPost;
}

export const PostCard: FC<Props> = ({ post }) => {
  const {
    slug,
    frontmatter: { hero_image, topic, title, date, tags, level },
  } = post;
  const image = getImage(hero_image);
  const icon = `Level-${level}`;

  return (
    <SPostCard>
      <SPostImage image={image} alt="" />
      <PostCardHeading level={icon} topic={topic} title={title} slug={slug} date={date} tags={tags} />
    </SPostCard>
  );
};
