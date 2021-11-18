import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

export const SText = styled.p`
  font-weight: 300;
  font-size: 15px;
  color: ${(props) => props.theme.accent};
  margin-bottom: 2rem;
`;

export const SHeadingLink = styled((props) => <Link {...props} />)`
  font-size: calc(16px + 1vw);
  font-weight: 400;
  text-transform: capitalize;
  margin-bottom: 10px;
  color: ${(props) => props.theme.secondary};
  &:hover {
    opacity: 0.5;
  }
`;

export const SHeadingCaption = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  margin-top: 5px;
  margin-bottom: 5px;
  color: ${(props) => props.theme.primary};
  & span {
    padding-right: 10px;
    padding-left: 10px;
    font-weight: 600;
  }
  & a {
    font-size: 12px;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin: 0;
    cursor: pointer;
    &:visited,
    &:active {
      color: ${(props) => props.theme.primary};
    }
    &:hover {
      opacity: 0.5;
    }
  }
`;


export const STag = styled.div`
  margin-right: 10px;
  display: flex;
  align-items: baseline;
  & svg {
    margin-right: 3px;
  }
  & span {
    font-size: 11px;
    text-transform: uppercase;
    font-weight: 400;
    color: ${(props) => props.theme.text};
  }
`;


