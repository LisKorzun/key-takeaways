import React, { FC } from 'react';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

import { IPost } from '../common';
import { SPostCardContent, SPostCard } from './styled';
import { PostLevel } from './PostLevel';
import { PostInfo } from './PostInfo';
import { PostTags } from './PostTags';

interface Props {
  post: IPost;
}

export const PostCard: FC<Props> = ({ post }) => {
  const {
    slug,
    timeToRead,
    frontmatter: { hero_image, tags, title, date, level },
  } = post;
  const image = getImage(hero_image)!;

  return (
    <SPostCard>
      <GatsbyImage image={image} alt="" />
      <SPostCardContent>
        <PostTags tags={tags} />
        <PostLevel level={level} />
        <h2>
          <Link to={`/${slug}`}>{title}</Link>
        </h2>
        <PostInfo icon="time" label={`${timeToRead} min read`} />
        <PostInfo icon="date" label={date} />
      </SPostCardContent>
    </SPostCard>
  );
};
