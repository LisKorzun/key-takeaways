import React, { FC } from 'react';
import { Link } from 'gatsby';
import { kebabCase } from 'lodash';
import styled from 'styled-components';

import { SHeadingCaption, SHeadingLink, STag, SText } from './common';
import { Icon } from './Icon';
import { ROUTES } from '../common';

const SPostCardHeading = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding-right: 10%;
  padding-left: 10%;
  justify-content: center;
`;

interface PostCardHeadingProps {
  level: string;
  topic: string;
  title: string;
  slug: string;
  date: string;
  tags: string[];
}

export const PostCardHeading: FC<PostCardHeadingProps> = ({ level, topic, title, slug, date, tags }) => (
  <SPostCardHeading>
    <SHeadingCaption>
      <Icon name={level} width="70px" color="primary" />
      <span>/</span>
      <Link to={`${ROUTES.TOPICS}/${kebabCase(topic)}`}>{topic}</Link>
    </SHeadingCaption>
    <SHeadingLink to={`/${slug}`}>{title}</SHeadingLink>
    <SText>{date} | 5 min read</SText>
    <div>
      {tags.map((tag) => (
        <STag key={tag}>
          <Icon name="tag" height="10px" color="text" />
          <span>{tag}</span>
        </STag>
      ))}
    </div>
  </SPostCardHeading>
);
