import React, { FC } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { device } from '../styles';

const SPagination = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 3rem;
  align-items: center;
  margin: 5rem 0;
  @media only screen and ${device.sUp} {
    gap: 5rem;
  }
  .next,
  .prev {
    padding: 1.3rem 2rem;
    border: 3px solid transparent;
    background-color: ${({ theme }) => theme.accentRGBA};
    color: ${({ theme }) => theme.accent};
    font-size: 1.3rem;
    font-weight: 600;
    text-transform: uppercase;
    border-radius: 0.8rem;
    transition: all 0.2s ease-in-out;
    &:hover,
    &:focus {
      color: ${({ theme }) => theme.text};
      border-color: ${({ theme }) => theme.accentRGBA};
    }
    @media only screen and ${device.laptopUp} {
      font-size: 1.3rem;
    }
  }
  .next {
    text-align: right;
  }

  .disabled-link {
    pointer-events: none;
    opacity: 0.2;
  }
  .counter {
    display: inline-block;
    font-weight: 800;
    line-height: 1;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.accent};
    @media only screen and ${device.lUp} {
      font-size: 2rem;
    }
  }
`;

interface PaginationProps {
  currentPage: number;
  numPages: number;
  baseURL: string;
}

export const Pagination: FC<PaginationProps> = ({ currentPage, numPages, baseURL }) => {
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage - 1 === 1 ? baseURL : `${baseURL}/${(currentPage - 1).toString()}`;
  const nextPage = `${baseURL}/${(currentPage + 1).toString()}`;

  return (
    <SPagination>
      <Link to={isFirst ? '/' : prevPage} rel="prev" className={`prev ${isFirst ? 'disabled-link' : ''}`}>
        Prev
      </Link>
      <div className="counter">
        {`${currentPage} / `}
        <sup>{numPages}</sup>
      </div>
      <Link to={isLast ? '/' : nextPage} rel="next" className={`next ${isLast ? 'disabled-link' : ''}`}>
        Next
      </Link>
    </SPagination>
  );
};
