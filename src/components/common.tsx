import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

export const SText = styled.p`
  font-weight: 300;
  font-size: 14px;
  color: ${(props) => props.theme.text};
  margin: 0;
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

export const STagChipLink = styled((props) => <Link {...props} />)`
  margin-right: 20px;
  margin-bottom: 20px;
  font-size: 15px;
  display: flex;
  text-transform: uppercase;
  font-weight: 400;
  align-items: baseline;
  color: ${(props) => props.theme.secondary};
  padding: 7px 45px 7px 14px;
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 15px;
  justify-content: center;
  position: relative;
  cursor: pointer;
  height: fit-content;
  & svg {
    margin-right: 6px;
  }
  & span {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 2px;
    top: 2px;
    width: 28px;
    height: 28px;
    font-size: 13px;
    color: ${(props) => props.theme.secondary};
    border-radius: 50%;
    background-color: ${(props) => props.theme.border};
  }
  &:hover {
    background-color: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.background};
  }
`;

export const STagLetter = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 60px;
  font-weight: 700;
  text-transform: uppercase;
  margin-right: 50px;
  min-width: 100px;
  color: ${(props) => props.theme.primary};
  border-right: 1px solid ${(props) => props.theme.border};
`;
