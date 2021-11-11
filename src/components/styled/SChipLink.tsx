import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

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
