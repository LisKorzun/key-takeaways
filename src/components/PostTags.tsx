import React, { FC } from 'react';
import { kebabCase } from 'lodash';
import styled from 'styled-components';

import { device } from '../styles';
import { SChipLink } from './styled';
import { ROUTES } from '../common';

const SPostTags = styled.div`
  display: flex;
  padding-top: 2rem;
  @media only screen and ${device.desktopXLUP} {
    width: 70%;
  }
`;

interface PostTagsProps {
  tags: string[];
}

export const PostTags: FC<PostTagsProps> = ({ tags }) => (
  <SPostTags>
    {tags.map((tag) => (
      <SChipLink to={`${ROUTES.TAGS}/${kebabCase(tag)}`} key={tag} size="small">
        {tag}
      </SChipLink>
    ))}
  </SPostTags>
);
