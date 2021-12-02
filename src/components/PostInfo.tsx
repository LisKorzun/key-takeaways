import React, { FC } from 'react';
import styled from 'styled-components';

import { Icon } from './Icon';

const SPostInfo = styled.div`
  position: relative;
  padding-left: 20px;
  text-transform: capitalize;

  font-size: 12px;
  font-weight: 400;
  color: ${(props) => props.theme.accent};
  svg {
    position: absolute;
    top: 0;
    left: 0;
    height: 13px;
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
