import React, { FC } from 'react';
import { getImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

import { IPost } from '../common';
import { SPostCardImage, SPostCardContent } from './styled';
import { PostDifficulty } from './PostDifficulty';
import { PostInfo } from './PostInfo';
import { PostTags } from './PostTags';
import { PostTopic } from './PostTopic';
import styled from 'styled-components';

interface Props {
  post: IPost;
}

const SPostCard = styled.article`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: minmax(170px, 60%) 1fr;
  align-items: stretch;
  border-radius: 0.8rem;
  background-image: linear-gradient(to top, ${({ theme }) => theme.accentRGBA}, rgba(0, 0, 0, 0));
  & > div:first-child {
    z-index: -1;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
  & > div:last-child {
    padding: 2rem;
  }
`;

export const PostCard: FC<Props> = ({ post }) => {
  const {
    slug,
    timeToRead,
    frontmatter: { hero_image, topic, title, date, tags, level },
  } = post;
  const image = getImage(hero_image);

  return (
    <SPostCard>
      <SPostCardImage image={image} alt="" />
      <SPostCardContent>
        <div className="caption">
          <PostTopic topic={topic} />
        </div>
        <h2>
          <Link to={`/${slug}`}>{title}</Link>
        </h2>
        <footer>
          <PostInfo icon="time" label={`${timeToRead} min read`} />
          <PostInfo icon="date" label={date} />
          <PostDifficulty level={level} asLink />
        </footer>
        {/*<PostTags tags={tags} />*/}
      </SPostCardContent>
    </SPostCard>
  );
};
