import React, { FC } from 'react';
import styled from 'styled-components';
import { GatsbyImage, getImage, ImageDataLike } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

import { STags, TagIcon } from './common';

const SCard = styled.div`
  display: flex;
  padding-bottom: 15px;
  padding-top: 15px;
  border-bottom: ${(props) => `1px solid ${props.theme.border}`};
`;

const SCardImage = styled((props) => <GatsbyImage {...props} />)`
  height: 150px;
  min-height: 150px;
  max-height: 150px;
  width: 250px;
  max-width: 250px;
  min-width: 250px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 30px;
  object-position: center;
`;

const SCardContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const SCardTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const SCardCaption = styled.div`
  font-size: 12px;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-top: 5px;
  margin-bottom: 5px;
  color: ${(props) => props.theme.primary};
`;

const SCardTitle = styled((props) => <Link {...props} />)`
  font-size: 30px;
  font-weight: 400;
  text-transform: capitalize;
  margin-bottom: 8px;
  color: ${(props) => props.theme.text};
  &:hover {
    color: ${(props) => props.theme.accent};
  }
`;

const SCardDate = styled.div`
  font-weight: 300;
  font-size: 16px;
  margin-bottom: 15px;
`;

interface Props {
  post: {
    slug: string;
    id: string;
    frontmatter: {
      title: string;
      date: string;
      topic: string;
      tags: string[];
      hero_image: ImageDataLike;
    };
  };
}

export const Card: FC<Props> = ({ post }) => {
  const image = getImage(post.frontmatter.hero_image);
  return (
    <SCard>
      <SCardImage image={image} alt="" />
      <SCardContent>
        <SCardTitleContainer>
          <SCardCaption>{post.frontmatter.topic}</SCardCaption>
          <SCardTitle to={`/${post.slug}`}>{post.frontmatter.title}</SCardTitle>
          <SCardDate>{post.frontmatter.date}</SCardDate>
        </SCardTitleContainer>
        <STags>
          {post.frontmatter.tags.map((tag) => (
            <span key={tag}>
              <TagIcon /> {tag}
            </span>
          ))}
        </STags>
      </SCardContent>
    </SCard>
  );
};
