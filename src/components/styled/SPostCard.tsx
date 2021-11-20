import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import { device } from '../../styles';

export const SPostCard = styled.article`
  display: flex;
  padding: 1rem;
  justify-content: space-between;
  position: relative;
  @media only screen and ${device.desktopXLUP} {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  &::before {
    display: none;
    background-color: ${(props) => props.theme.accent};
    content: '';
    position: absolute;
    top: -25%;
    left: -50%;
    width: 200%;
    height: 145%;
    z-index: -1;
    opacity: 0.1;
    overflow-x: hidden;
    border-radius: 0.8rem;
  }
`;

export const SPostCardImage = styled((props) => <GatsbyImage {...props} />)`
  height: auto;
  width: 20rem;
  min-width: 20rem;
  object-fit: cover;
  border-radius: 0.8rem;
  object-position: center;
  overflow: hidden;
  position: relative;
  margin-right: 5rem;
  display: none;
  @media only screen and ${device.tabletUp} {
    display: block;
  }
  @media only screen and ${device.desktopXLUP} {
    width: 30rem;
    min-width: 30rem;
  }
`;

export const SPostCardContent = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
  flex-grow: 1;
  position: relative;
  @media only screen and ${device.tabletUp} {
    margin-top: 3rem;
    margin-bottom: 3rem;
  }
  @media only screen and ${device.desktopXLUP} {
    margin-top: 4rem;
    margin-bottom: 4rem;
  }

  .caption {
    margin-bottom: 2rem;
    a:first-of-type {
      margin-bottom: 1rem;
    }
    span {
      display: none;
      margin: 0 1rem;
      color: ${(props) => props.theme.accent};
    }
    @media only screen and ${device.laptopUp} {
      display: flex;
      span {
        display: block;
      }
    }
  }

  h2 {
    margin-bottom: 2rem;
    a {
      font-size: calc(16px + 1vw);
      font-weight: 400;
      text-transform: capitalize;
      display: block;
      line-height: 1.3;
      color: ${(props) => props.theme.secondary};
      &:hover {
        color: ${(props) => props.theme.accent};
      }
    }
    @media only screen and ${device.desktopXLUP} {
      width: 80%;
    }
  }

  footer {
    display: flex;
    & > div {
      margin-right: 2rem;
    }
    @media only screen and ${device.desktopXLUP} {
      position: absolute;
      top: 30%;
      right: 0;
      flex-direction: column;
      justify-content: center;
      & > div {
        margin-bottom: 2rem;
      }
    }
  }
`;
