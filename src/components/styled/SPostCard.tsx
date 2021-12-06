import React from 'react';
import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';

import { device } from '../../styles';

export const SPostCard = styled.article`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 200px 1fr;
  align-items: stretch;
  border-radius: 0.8rem;
  background-image: linear-gradient(to top, ${({ theme }) => theme.accentRGBA}, rgba(0, 0, 0, 0));
  & > div:first-child {
    z-index: -1;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
  & > div:last-child {
    padding: 2rem;
  }
`;

export const SPostCardImage = styled((props) => <GatsbyImage {...props} />)`
  max-width: 100%;
  height: 100%;
  border-radius: 0.8rem;
  object-position: center;
  display: none;
  @media only screen and ${device.tabletUp} {
    display: block;
  }
  @media only screen and ${device.desktopXLUP} {
    //width: 25rem;
    //min-width: 29rem;
    //max-height: 17rem;
  }
`;

export const SPostCardContent = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: auto 1fr 20px;
  grid-template-rows: auto 1fr auto;
  column-gap: 20px;
  row-gap: 10px;

  & > a:nth-child(1) {
    grid-column-end: span 2;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 1px;
  }
  & > a:nth-child(2) {
    grid-row-end: span 3;
  }
  & > h2 {
    grid-column-end: span 2;
    margin: 0;
    align-self: start;
    a {
      font-size: calc(16px + 0.5vw);
      font-weight: 600;
      text-transform: capitalize;
      display: block;
      line-height: 1.3;
      color: ${(props) => props.theme.secondary};
      &:hover {
        color: ${(props) => props.theme.accent};
      }
  }

  //.caption {
  //  margin-bottom: 1rem;
  //  font-size: 1.3rem;
  //  font-weight: 500;
  //  display: flex;
  //  justify-content: space-between;
  //  a:first-of-type {
  //    margin-bottom: 1rem;
  //    font-size: inherit;
  //    font-weight: inherit;
  //    letter-spacing: 1px;
  //  }
  //}

  //h2 {
  //  margin-bottom: 1.5rem;
  //  margin-top: 1rem;
    
  //  }
  //}

  //footer {
  //  display: flex;
  //  & > div {
  //    margin-right: 2rem;
  //  }
  //}
`;
