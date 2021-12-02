import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { device } from '../../styles';

interface ChipLinkProps {
  selected?: boolean;
  size?: 'small';
}

export const SChipLink = styled((props) => <Link {...props} />)<ChipLinkProps>`
  font-size: 1.3rem;
  font-weight: 600;
  text-transform: capitalize;
  line-height: 160%;
  padding: 0 9px;
  margin-bottom: 0.8rem;
  border-radius: 6px;
  color: ${({ theme }) => theme.text};
  ${({ size }) =>
    size === 'small' &&
    `
    font-size: calc(0.9rem + 0.2vw);
    font-weight: 600;
    padding: 3px 15px 2px;
  `}
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
  span {
    font-size: 1.3rem;
    padding-top: 0.2rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 1px;
    top: 1px;
    width: 2.4rem;
    height: 2.4rem;
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.background};
    border-radius: 50%;
  }

  ${({ selected, theme }) =>
    selected &&
    `
    background-color: ${theme.text};
    color: ${theme.background};
    &:hover {
    background-color: ${theme.text};
    color: ${theme.background};
    cursor: default;
  }
  `}
`;

export const SChips = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 1rem 2rem;
  @media only screen and ${device.tabletUp} {
    justify-content: flex-start;
  }
`;
