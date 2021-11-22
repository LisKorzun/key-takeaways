import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { device } from '../../styles';

interface ChipLinkProps {
  selected?: boolean;
}

export const SChipLink = styled((props) => <Link {...props} />)<ChipLinkProps>`
  font-size: 1.4rem;
  font-weight: 400;
  text-transform: uppercase;
  line-height: 1;
  display: flex;
  align-items: center;
  min-height: 3.6rem;
  padding-top: 0.3rem;
  padding-right: 4.5rem;
  padding-left: 1.4rem;
  margin-right: 1rem;
  margin-bottom: 0.8rem;
  color: ${({ theme }) => theme.text};
  border: 0.3rem solid rgba(117, 123, 148, 0.3);;
  border-radius: 2rem;
  cursor: pointer;
  position: relative;
  &:hover {
    background-color: ${({ theme }) => theme.primary};
    border-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.background};
  }
  span {
    font-size: 1.3rem;
    padding-top: 0.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 0.3rem;
    top: 0.2rem;
    width: 2.6rem;
    height: 2.6rem;
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.background};
    border-radius: 50%;
  }
 
  ${({ selected, theme }) =>
    selected &&
    `
    background-color: ${theme.accent};
    color: ${theme.background};
    border-color: ${theme.accent};
    font-weight: 700;
    &:hover {
    background-color: ${theme.accent};
    border-color: ${theme.accent};
    color: ${theme.background};
  }
  `}
`;

export const SChips = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 3rem 0;
  justify-content: center;
  @media only screen and ${device.tabletUp} {
    justify-content: flex-start;
  }
`;
