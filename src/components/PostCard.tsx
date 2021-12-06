import React, { FC } from 'react';
import { getImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

import { IPost } from '../common';
import { SPostCardImage, SPostCardContent, SPostCard } from './styled';
import { PostDifficulty } from './PostDifficulty';
import { PostInfo } from './PostInfo';
import { PostTopic } from './PostTopic';

interface Props {
  post: IPost;
}

export const PostCard: FC<Props> = ({ post }) => {
  const {
    slug,
    timeToRead,
    frontmatter: { hero_image, topic, title, date, level },
  } = post;
  const image = getImage(hero_image);

  return (
    <SPostCard>
      <SPostCardImage image={image} alt="" />
      <SPostCardContent>
        <PostTopic topic={topic} />
        <PostDifficulty level={level} asLink />
        <h2>
          <Link to={`/${slug}`}>{title}</Link>
        </h2>
        <PostInfo icon="time" label={`${timeToRead} min read`} />
        <PostInfo icon="date" label={date} />
      </SPostCardContent>
    </SPostCard>
  );
};
