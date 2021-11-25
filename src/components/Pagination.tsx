import React, { FC } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { Icon } from './Icon';
import { ICONS } from '../common';
import { device } from '../styles';

const SPagination = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 5rem;
  background-color: ${({ theme }) => theme.accentRGBA};
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and ${device.laptopUp} {
    height: 7rem;
  }
  a {
    display: flex;
    flex-grow: 1;
    align-self: center;
    justify-content: center;
    svg {
      height: 3rem;
      @media only screen and ${device.laptopUp} {
        height: 4rem;
      }
    }
    &:hover {
      svg {
        path:nth-child(1) {
          opacity: 0.9;
          transition: opacity 125ms ease 0s;
        }
        path:nth-child(2) {
          opacity: 0.6;
          transition: opacity 125ms ease 125ms;
        }
        path:nth-child(3) {
          opacity: 0.3;
          transition: opacity 125ms ease 250ms;
        }
      }
    }
  }
  .disabled-link {
    pointer-events: none;
    opacity: 0.1;
  }
  .counter {
    display: inline-block;
    position: relative;
    padding: 0.5rem 2rem;
    font-weight: 900;
    line-height: 1;
    & > span {
      position: relative;
      display: inline-block;
      z-index: 1;
      transform: translateY(-2px);
      color: ${({ theme }) => theme.text};
    }
    & > span:first-of-type {
      font-size: 2.5rem;
      &::after {
        content: '/';
        display: inline-block;
        padding: 0 0.2rem;
        font-size: 2.5rem;
      }
      @media only screen and ${device.laptopUp} {
        font-size: 3.5rem;
        &::after {
          font-size: 3.5rem;
        }
      }
    }
    & > span:last-of-type {
      font-size: 1.5rem;
      transform: translateY(-0.8rem) translateX(-0.2rem);
      @media only screen and ${device.laptopUp} {
        font-size: 2rem;
      }
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
      <Link to={isFirst ? '/' : prevPage} rel="prev" className={`${isFirst ? 'disabled-link' : ''}`}>
        <Icon name={ICONS.PREV} color="text" height="40px" />
      </Link>
      <div className="counter">
        <span>{currentPage}</span>
        <span>{numPages}</span>
      </div>
      <Link to={isLast ? '/' : nextPage} rel="next" className={`${isLast ? 'disabled-link' : ''}`}>
        <Icon name={ICONS.NEXT} color="text" height="40px" />
      </Link>
    </SPagination>
  );
};
