import React, { FC } from 'react';
import styled from 'styled-components';

import { Icon } from './Icon';

const SBackImage = styled.div`
  position: absolute;
  opacity: 0.2;
  top: -20rem;
  right: -40rem;
  height: 60rem;
  width: 60rem;
  background-color: ${(props) => props.theme.accent};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: rgb(0 0 0 / 17%) 0px -23px 25px 0px inset, rgb(0 0 0 / 15%) 0px -36px 30px 0px inset,
    rgb(0 0 0 / 10%) 0px -79px 40px 0px inset, rgb(0 0 0 / 6%) 0px 2px 1px, rgb(0 0 0 / 9%) 0px 4px 2px,
    rgb(0 0 0 / 9%) 0px 8px 4px, rgb(0 0 0 / 9%) 0px 16px 8px, rgb(0 0 0 / 9%) 0px 32px 16px;
  svg {
    width: 14rem;
  }
`;

interface BackImageProps {
  icon: string;
}
export const BackImage: FC<BackImageProps> = ({ icon }) => (
  <SBackImage>
    <Icon name={icon} color="background" width="40px" />
  </SBackImage>
);
