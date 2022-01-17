import React, { FC } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { IHeading } from '../common';

const SPostToC = styled.div`
  background-color: ${(props) => props.theme.accentRGBA};
  padding: 1rem 3rem;
  border-radius: 8px;
  h4 {
    text-transform: uppercase;
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 2rem;
    color: ${(props) => props.theme.accent};
  }
  ul {
    padding-inline-start: 5px;
  }
  li {
    list-style-type: none;
    a {
      color: ${(props) => props.theme.accent};
      font-size: 1.7rem;
      font-weight: normal;
    }
  }
`;

interface IToc {
  items: IHeading[];
}
export const PostToC: FC<IToc> = ({ items = [] }) => (
  <SPostToC>
    <h4>Table of Contents</h4>
    <ul>
      {items.map((item) => (
        <li key={item.url}>
          <Link to={item.url}>{item.title}</Link>
        </li>
      ))}
    </ul>
  </SPostToC>
);
