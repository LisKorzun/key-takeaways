import React, { FC } from 'react';
import styled from 'styled-components';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import { SHeadingCaption, SText, SHeadingLink, STag } from './common';
import { SFlexColumnContainer, SFlexRowContainer } from './containers';
import { Icon } from './Icon';
import { IPost } from '../common';

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
    <SFlexRowContainer pt="15px" pb="15px">
      <SPostImage image={image} alt="" />
      <SFlexColumnContainer jc="space-between">
        <SFlexColumnContainer>
          <SHeadingCaption>
            <Icon name={icon} width="70px" color="primary" />
            <span>/</span>
            <p>{topic}</p>
          </SHeadingCaption>
          <SHeadingLink to={`/${slug}`}>{title}</SHeadingLink>
          <SText>{date}</SText>
        </SFlexColumnContainer>
        <SFlexRowContainer mb="5px">
          {tags.map((tag) => (
            <STag key={tag}>
              <Icon name="tag" height="10px" color="text" />
              <span>{tag}</span>
            </STag>
          ))}
        </SFlexRowContainer>
      </SFlexColumnContainer>
    </SFlexRowContainer>
  );
};
