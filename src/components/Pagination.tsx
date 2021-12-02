import React, { FC } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { device } from '../styles';

const SPagination = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin: 3rem 0;

  a {
    padding: 0.5rem 2rem;
    margin-right: 2rem;
    border: 1px solid ${({ theme }) => theme.accentRGBA};
    color: ${({ theme }) => theme.text};
    font-size: 1.2rem;
    font-weight: 600;
    text-transform: uppercase;
    border-radius: 100px;
    @media only screen and ${device.laptopUp} {
      font-size: 1.3rem;
    }
  }

  .disabled-link {
    pointer-events: none;
    opacity: 0.1;
  }

  .actions {
    display: flex;
    width: 100%;
    margin: 0 auto;
    justify-content: flex-end;
    @media only screen and ${device.mobileUp} {
      width: 85vw;
    }
    @media only screen and ${device.tabletUp} {
      width: 80vw;
    }
    @media only screen and ${device.laptopUp} {
      width: 70vw;
    }
    @media only screen and ${device.desktopUp} {
      width: 800px;
    }
    @media only screen and ${device.desktopXLUP} {
      width: 900px;
    }
  }

  .counter {
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    font-weight: 600;
    line-height: 1;
    font-size: 1.6rem;
    padding: 0.5rem 0.5rem 0.5rem 2rem;
    color: ${({ theme }) => theme.background};
    background-color: ${({ theme }) => theme.text};
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    @media only screen and ${device.laptopUp} {
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
      <div className="counter">
        {`${currentPage} / `}
        <sup>{numPages}</sup>
      </div>
      <div className="actions">
        <Link to={isFirst ? '/' : prevPage} rel="prev" className={`${isFirst ? 'disabled-link' : ''}`}>
          Prev
        </Link>
        <Link to={isLast ? '/' : nextPage} rel="next" className={`${isLast ? 'disabled-link' : ''}`}>
          Next
        </Link>
      </div>
    </SPagination>
  );
};
