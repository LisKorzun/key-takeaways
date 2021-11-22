import React, { FC } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const SPercentageRow = styled((props) => <Link {...props} />)`
  width: 100%;
  display: block;
  padding: 1rem 1.5rem;
  margin-bottom: 1rem;
  position: relative;
  color: ${(props) => props.theme.text};
  text-transform: lowercase;
  font-weight: 300;
  font-size: 2.5rem;
  strong {
    float: right;
    font-size: 2rem;
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
    border-radius: 8px;
    background: ${(props) => props.theme.text};
    opacity: 0.1;
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
  label: string;
  to: string;
  count: number;
  total: number;
}

export const PercentageRow: FC<PercentageRowProps> = ({ label, to, count, total }) => (
  <SPercentageRow to={to}>
    <strong>{count}</strong>
    {label}
    <span style={{ width: `${(count * 100) / total}%` }} />
  </SPercentageRow>
);
