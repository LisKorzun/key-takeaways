import styled from 'styled-components';
import { Link } from 'gatsby';
import React from 'react';

export const STitle = styled.h1`
  font-size: 60px;
  line-height: 70px;
  text-transform: capitalize;
  margin: 0;
`;

export const SDescription = styled.div`
  color: ${(props) => props.theme.secondary};
  font-size: 20px;
  font-weight: 300;
`;

export const SText = styled.p`
  font-weight: 300;
  font-size: 16px;
  margin: 0;
`;

export const SSeparator = styled.div`
  width: 100px;
  margin: 20px 0;
  border-bottom: ${(props) => `8px solid ${props.theme.primary}`};
`;

export const SHeadLine = styled.div`
  display: block;
  font-size: 30px;
  position: relative;
  overflow: hidden;
  font-weight: 600;
  color: ${(props) => props.theme.secondary};
  margin-bottom: 30px;
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    width: 100%;
    height: 1px;
    background-color: ${(props) => props.theme.accent};
    margin-left: 20px;
    opacity: 0.3;
  }
`;

export const SCaption = styled.div`
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
  & caption {
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
`;

export const STag = styled.div`
  margin-right: 10px;
  display: flex;
  align-items: baseline;
  & svg {
    margin-right: 5px;
  }
  & span {
    font-size: 12px;
    text-transform: uppercase;
    font-weight: 600;
    color: ${(props) => props.theme.secondary};
  }
`;

export const STitleLink = styled((props) => <Link {...props} />)`
  font-size: 30px;
  font-weight: 400;
  text-transform: capitalize;
  margin-bottom: 10px;
  color: ${(props) => props.theme.secondary};
  &:hover {
    color: ${(props) => props.theme.accent};
  }
`;

export const SPostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 30px;
  padding-right: 30px;
  width: 65%;
  border-right: ${(props) => `1px solid ${props.theme.border}`};
`;

export const STopicContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding-right: 30px;
`;

export const STopic = styled.div`
  border-bottom: ${(props) => `1px solid ${props.theme.border}`};
  padding: 20px 0;
  display: block;
  position: relative;
  & a {
    display: block;
    font-weight: bold;
    font-size: 13px;
    position: relative;
    padding-left: 14px;
    text-transform: uppercase;
    cursor: pointer;
    &::before {
      content: '.';
      display: inline-block;
      font-size: 25px;
      position: absolute;
      left: 0;
      top: -14px;
    }
    & span {
      float: right;
      padding: 0 8px;
    }
    &:hover {
      color: ${(props) => props.theme.accent};
    }
  }
`;
