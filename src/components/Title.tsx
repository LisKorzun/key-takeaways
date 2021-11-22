import React, { FC } from 'react';
import styled from 'styled-components';

import { Icon } from './Icon';

const STitle = styled.div`
  margin-top: 6rem;
  margin-bottom: 6rem;
  display: flex;
  padding-left: 20rem;
  position: relative;
  h2 {
    font-family: 'Architects Daughter';
    font-size: 7rem;
    font-weight: 700;
    text-transform: capitalize;
    display: flex;
    flex-direction: column;
    span {
      font-family: 'Josefin Sans';
      font-size: 2rem;
      color: ${(props) => props.theme.primary};
      text-transform: uppercase;
    }
  }
  div {
    position: absolute;
    top: -15%;
    left: 0;
    height: 14rem;
    width: 14rem;
    background-color: ${(props) => props.theme.primary};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: rgb(0 0 0 / 17%) 0px -23px 25px 0px inset, rgb(0 0 0 / 15%) 0px -36px 30px 0px inset, rgb(0 0 0 / 10%) 0px -79px 40px 0px inset, rgb(0 0 0 / 6%) 0px 2px 1px, rgb(0 0 0 / 9%) 0px 4px 2px, rgb(0 0 0 / 9%) 0px 8px 4px, rgb(0 0 0 / 9%) 0px 16px 8px, rgb(0 0 0 / 9%) 0px 32px 16px;
    //box-shadow: rgb(204 219 232) 3px 3px 6px 0 inset, rgb(255 255 255 / 50%) -3px -3px 6px 1px inset;
    svg {
      width: 7rem;
    }
  }
`;

interface TitleProps {
  caption: string;
  title: string;
  icon?: string;
}

export const Title: FC<TitleProps> = ({ caption, title, icon = 'tag' }) => {
  return (
    <STitle>
      <div>
        <Icon name={icon} color="background" width="40px" />
      </div>
      <h2>
        <span>{caption}</span>
        {title}
      </h2>
    </STitle>
  );
};
