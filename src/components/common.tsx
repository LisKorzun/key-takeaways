import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

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
  color: ${(props) => props.theme.secondary};
  margin: 0;
`;

export const STitleCaption = styled.p`
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
  color: ${(props) => props.theme.text};
`;

export const SText = styled.p`
  font-weight: 300;
  font-size: 14px;
  color: ${(props) => props.theme.text};
  margin: 0;
`;

export const SHeadingLink = styled((props) => <Link {...props} />)`
  font-size: ${HEADING_SIZE}px;
  font-weight: 400;
  text-transform: capitalize;
  margin-bottom: 20px;
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
  & p {
    font-size: 12px;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin: 0;
  }
`;

interface ChipLinkProps {
  selected?: boolean;
}

export const SChipLink = styled((props) => <Link {...props} />)<ChipLinkProps>`
  padding: 8px 16px;
  margin-right: 10px;
  margin-bottom: 8px;
  font-size: 12px;
  font-weight: 700;
  color: ${(props) => props.theme.secondary};
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.border};
    color: ${(props) => props.theme.secondary};
  }

  ${({ selected, theme }) =>
    selected &&
    `
    background-color: ${theme.primary};
    color: ${theme.background};
    &:hover {
    background-color: ${theme.primary};
    color: ${theme.background};
  }
  `}
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
