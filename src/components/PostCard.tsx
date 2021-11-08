import React, { FC } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import { SHeadingCaption, SText, STag } from './common';
import { SFlexColumnContainer, SFlexRowContainer } from './containers';
import { Icon } from './Icon';
import { IPost, ROUTES } from '../common';
import { kebabCase } from 'lodash';

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
            <Link to={`${ROUTES.TOPICS}/${kebabCase(topic)}`}>{topic}</Link>
          </SHeadingCaption>
          <h2><Link to={`/${slug}`}>{title}</Link></h2>
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
