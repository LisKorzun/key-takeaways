import React, { FC } from 'react';
import styled from 'styled-components';

import { Icon } from './Icon';

const SPostInfo = styled.div`
  position: relative;
  padding-left: calc(1.8rem + 0.3vw);
  text-transform: uppercase;
  
  font-size: calc(1rem + 0.2vw);
  font-weight: 500;
  color: ${(props) => props.theme.accent};
  opacity: 0.6;
  svg {
    position: absolute;
    top: -0.1rem;
    left: 0;
    height: calc(1rem + 0.3vw);
  }
`;

interface PostInfoProps {
  icon: string;
  label: string;
}

export const PostInfo: FC<PostInfoProps> = ({ icon, label }) => (
  <SPostInfo>
    <Icon name={icon} height="13px" color="accent" />
    {label}
  </SPostInfo>
);
