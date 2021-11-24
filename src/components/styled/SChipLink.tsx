import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { device } from '../../styles';

interface ChipLinkProps {
  selected?: boolean;
  size?: 'small';
}

export const SChipLink = styled((props) => <Link {...props} />)<ChipLinkProps>`
  font-size: 1.4rem;
  font-weight: 400;
  text-transform: capitalize;
  line-height: 1;
  padding: 0.6rem 4.5rem;
  margin-right: 1rem;
  margin-bottom: 0.8rem;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.accentRGBA};
  border: 0.3rem solid ${({ theme }) => theme.accentRGBA};
  border-radius: 2rem;
  cursor: pointer;
  position: relative;
  ${({ size }) =>
    size === 'small' &&
    `
    font-size: calc(0.9rem + 0.2vw);
    font-weight: 600;
    padding: 3px 15px 2px;
  `}
  &:hover {
    border-color: ${({ theme }) => theme.primaryRGBA};
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
    background-color: ${theme.primary};
    color: ${theme.background};
    border-color: ${theme.primary};
    font-weight: 600;
    &:hover {
    background-color: ${theme.primary};
    border-color: ${theme.primary};
    color: ${theme.background};
    cursor: default;
  }
  `}
`;

export const SChips = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: calc(2rem + 1.5vw);
  justify-content: center;
  @media only screen and ${device.tabletUp} {
    justify-content: flex-start;
  }
`;
