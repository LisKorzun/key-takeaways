import React, { FC } from 'react';
import styled from 'styled-components';
import { GatsbyImage, getImage, ImageDataLike } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

import Tag from '../assets/svg/tag.svg';

const SCard = styled.div`
  display: flex;
  padding-bottom: 15px;
  padding-top: 15px;
  border-bottom: ${(props) => `1px solid ${props.theme.border}`};
`;

const SCardImage = styled((props) => <GatsbyImage {...props} />)`
  height: 100px;
  min-height: 100px;
  max-height: 100px;
  width: 150px;
  max-width: 150px;
  min-width: 150px;
  object-fit: contain;
  border-radius: 3px;
  margin-right: 30px;
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
  font-size: 10px;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 5px;
  color: ${(props) => props.theme.primary};
`;

const SCardTitle = styled((props) => <Link {...props} />)`
  font-size: 20px;
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
  font-size: 13px;
  margin-bottom: 15px;
`;

const SCardTags = styled.div`
  margin-top: 10px;
  display: flex;

  & span {
    margin-right: 10px;
    font-size: 9px;
    text-transform: uppercase;
    font-weight: 600;
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.text};
  }
`;

const TagIcon = styled(Tag)`
  fill: ${(props) => props.theme.text};
  width: 13px;
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
        <SCardTags>
          {post.frontmatter.tags.map((tag) => (
            <span key={tag}>
              <TagIcon /> {tag}
            </span>
          ))}
        </SCardTags>
      </SCardContent>
    </SCard>
  );
};
