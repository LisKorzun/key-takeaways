import styled from 'styled-components';
import { Link } from 'gatsby';
import React from 'react';

import {
  DESCRIPTION_SIZE,
  HEADING_SIZE,
  MARGIN_MEDIUM,
  SEPARATOR_HEIGHT,
  SEPARATOR_WIDTH,
  TEXT_SIZE,
  TITLE_SIZE,
} from '../styles/sizes';

export const STitle = styled.h1`
  font-size: ${TITLE_SIZE}px;
  line-height: ${TITLE_SIZE + 10}px;
  text-transform: capitalize;
  margin: 0;
`;

export const STitleCaption = styled.caption`
  font-size: 16px;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-align: start;
  margin-bottom: ${MARGIN_MEDIUM}px;
  color: ${(props) => props.theme.primary};
`;

export const SSeparator = styled.div`
  width: ${SEPARATOR_WIDTH}px;
  margin: ${MARGIN_MEDIUM}px 0;
  border-bottom: ${(props) => `${SEPARATOR_HEIGHT}px solid ${props.theme.primary}`};
`;

export const SDescription = styled.div`
  color: ${(props) => props.theme.secondary};
  font-size: ${DESCRIPTION_SIZE}px;
  font-weight: 300;
`;

export const SText = styled.p`
  font-weight: 300;
  font-size: ${TEXT_SIZE}px;
  margin: 0;
`;

export const SHeadLine = styled.div`
  display: block;
  font-size: ${HEADING_SIZE}px;
  font-weight: 400;
  color: ${(props) => props.theme.secondary};
  position: relative;
  overflow: hidden;
  margin-bottom: ${MARGIN_MEDIUM}px;
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

export const SHeadingLink = styled((props) => <Link {...props} />)`
  font-size: ${HEADING_SIZE}px;
  font-weight: 400;
  text-transform: capitalize;
  margin-bottom: 10px;
  color: ${(props) => props.theme.secondary};
  &:hover {
    color: ${(props) => props.theme.accent};
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
  & caption {
    font-size: 12px;
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
