import React, { FC } from 'react';
import { getImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

import { IPost } from '../common';
import { SPostCard, SPostCardImage, SPostCardContent } from './styled';
import { PostDifficulty } from './PostDifficulty';
import { PostInfo } from './PostInfo';
import { PostTags } from './PostTags';
import { PostTopic } from './PostTopic';

interface Props {
  post: IPost;
}

export const PostCard: FC<Props> = ({ post }) => {
  const {
    slug,
    frontmatter: { hero_image, topic, title, date, tags, level },
  } = post;
  const image = getImage(hero_image);

  return (
    <SPostCard>
      <SPostCardImage image={image} alt="" />
      <SPostCardContent>
        <div className="caption">
          <PostTopic topic={topic} />
          <span>/</span>
          <PostDifficulty level={level} asLink />
        </div>
        <h2>
          <Link to={`/${slug}`}>{title}</Link>
        </h2>
        <footer>
          <PostInfo icon="time" label="5 min read" />
          <PostInfo icon="date" label={date} />
        </footer>
        <PostTags tags={tags} />
      </SPostCardContent>
    </SPostCard>
  );
};
