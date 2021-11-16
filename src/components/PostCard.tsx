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
  border-radius: 1rem;
  object-position: center;
  overflow: hidden;
  margin-right: 2rem;
  //border: solid 0.8rem ${(props) => props.theme.accent};
  //transform: scale(0.84) translateX(15%) rotateZ(calc(-1 * (11 * 1deg)));
  //transform-origin: 0 100%;
  //transition: transform 0.2s ease-out;
  position: relative;
  // &::after{
  //   content: "";
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   right: 0;
  //   bottom: 0;
  //   background: ${(props) => props.theme.accent};
  //   opacity: .3;
  // }
`;

const SPostCard = styled.div`
  display: flex;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  justify-content: space-between;
`;

interface Props {
  post: IPost;
  right: boolean;
}

export const PostCard: FC<Props> = ({ post, right }) => {
  const {
    slug,
    frontmatter: { hero_image, topic, title, date, tags, level },
  } = post;
  const image = getImage(hero_image);
  const icon = `Level-${level}`;

  return (
    <SPostCard>
      {!right && <SPostImage image={image} alt="" />}
      <PostCardHeading level={icon} topic={topic} title={title} slug={slug} date={date} tags={tags} />
      {right && <SPostImage image={image} alt="" />}
    </SPostCard>
  );
};
