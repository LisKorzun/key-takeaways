import React, { FC } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const SPercentageRow = styled((props) => <Link {...props} />)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  margin-bottom: 2rem;
  position: relative;
  color: ${(props) => props.theme.text};
  text-transform: capitalize;
  font-size: 1.6rem;
  font-weight: 500;

  strong {
    float: right;
    font-size: calc(1.2rem + 0.3vw);
    font-weight: 600;
  }
  span {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    overflow: hidden;
    -webkit-transition: background ease 0.2s;
    transition: background ease 0.2s;
    border-radius: 0.8rem;
    background: ${(props) => props.theme.accentRGBA};
    //opacity: 0.1;
  }
  &:last-of-type {
    margin-bottom: 0;
  }
  &:hover {
    z-index: 1;
    border-radius: 8px;
    background: ${(props) => props.theme.primaryRGBA};
    cursor: pointer;
  }
`;

interface PercentageRowProps {
  to: string;
  count: number;
  total: number;
}

export const PercentageRow: FC<PercentageRowProps> = ({ to, count, total, children }) => (
  <SPercentageRow to={to}>
    {children}
    <strong>{count}</strong>
    <span style={{ width: `${(count * 100) / total}%` }} />
  </SPercentageRow>
);
