import React, { FC } from 'react';
import styled from 'styled-components';

import { device } from '../styles';

const SPostTags = styled.div`
  display: flex;
  padding-top: 2rem;
  color: ${({ theme }) => theme.text};
  & > div {
    margin-right: 1rem;
    font-size: calc(0.9rem + 0.2vw);
    font-weight: 500;
    text-transform: capitalize;
    border: 2px solid ${({ theme }) => theme.accentRGBA};
    background-color: ${({ theme }) => theme.accentRGBA};
    border-radius: 1rem;
    padding: 3px 15px 2px;
  }
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
      <div key={tag}>{tag}</div>
    ))}
  </SPostTags>
);
