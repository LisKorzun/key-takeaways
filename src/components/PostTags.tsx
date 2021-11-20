import React, { FC } from 'react';
import styled from 'styled-components';

import { device } from '../styles';

const SPostTags = styled.div`
  display: flex;
  padding-top: 2rem;
  opacity: 0.8;
  color: ${(props) => props.theme.accent};
  & > div {
    margin-right: 1rem;
    font-size: calc(0.9rem + 0.2vw);
    font-weight: 700;
    text-transform: uppercase;
    border: 1px solid rgba(117, 123, 148, 0.5);
    border-radius: 0.8rem;
    padding: 5px 10px 2px;
  }
  @media only screen and ${device.desktopXLUP} {
    width: 80%;
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
