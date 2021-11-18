import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { device } from '../../styles';

interface ChipLinkProps {
  selected?: boolean;
}

export const SChipLink = styled((props) => <Link {...props} />)<ChipLinkProps>`
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 1.2;
  padding: 0.7rem 4.5rem 0.7rem 1.4rem;
  margin-right: 1rem;
  margin-bottom: 0.8rem;
  color: ${({ theme }) => theme.text};
  border: 0.2rem solid ${({ theme }) => theme.accent};
  border-radius: 1.6rem;
  cursor: pointer;
  position: relative;
  &:hover {
    background-color: ${({ theme }) => theme.accent};
    color: ${({ theme }) => theme.background};
  }
  span {
    font-size: 1.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 0.1rem;
    position: absolute;
    right: 0.3rem;
    top: 0.3rem;
    width: 2.4rem;
    height: 2.4rem;
    color: ${({ theme }) => theme.secondary};
    background-color: ${({ theme }) => theme.border};
    border-radius: 50%;
  }
  svg {
    margin-right: 0.6rem;
  }

  ${({ selected, theme }) =>
    selected &&
    `
    background-color: ${theme.primary};
    color: ${theme.background};
    border-color: ${theme.primary};
    &:hover {
    background-color: ${theme.primary};
    color: ${theme.background};
  }
  `}
`;

export const SChips = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 2rem 0;
  justify-content: center;
  @media only screen and ${device.tabletUp} {
    justify-content: flex-start;
  }
`;
