import React, { FC } from 'react';
import styled from 'styled-components';
import { GatsbyImage, getImage, ImageDataLike } from 'gatsby-plugin-image';

import { SCaption, SText, STitleLink, STag } from './common';
import { SFlexColumnContainer, SFlexRowContainer } from './containers';
import { Icon } from './Icon';

const SPostImage = styled((props) => <GatsbyImage {...props} />)`
  height: 150px;
  width: 250px;
  max-width: 250px;
  min-width: 250px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 30px;
  object-position: center;
`;

interface Props {
  post: {
    slug: string;
    id: string;
    frontmatter: {
      title: string;
      date: string;
      topic: string;
      level: string;
      tags: string[];
      hero_image: ImageDataLike;
    };
  };
}

export const PostCard: FC<Props> = ({ post }) => {
  const {
    slug,
    frontmatter: { hero_image, topic, title, date, tags, level },
  } = post;
  const image = getImage(hero_image);
  const icon = `Level-${level}`;

  return (
    <SFlexRowContainer pt="15px" pb="15px">
      <SPostImage image={image} alt="" />
      <SFlexColumnContainer jc="space-between">
        <SFlexColumnContainer>
          <SCaption>
            <Icon name={icon} width="70px" color="primary" />
            <span>/</span>
            <caption>{topic}</caption>
          </SCaption>
          <STitleLink to={`/${slug}`}>{title}</STitleLink>
          <SText>{date}</SText>
        </SFlexColumnContainer>
        <SFlexRowContainer mb="5px">
          {tags.map((tag) => (
            <STag key={tag}>
              <Icon name="tag" height="11px" color="secondary" />
              <span>{tag}</span>
            </STag>
          ))}
        </SFlexRowContainer>
      </SFlexColumnContainer>
    </SFlexRowContainer>
  );
};
