import { LABELS } from '../../common';
import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const SHeader = styled.header`
  font-family: 'Josefin Sans';
  font-weight: 200;
  position: fixed;
  opacity: 0.4;
  z-index: 4;
  top: 70vh;
  left: 0;
  width: fit-content;
  height: 10rem;
  font-size: 3rem;
  opacity: 0.4;
  -webkit-transform: rotate(-90deg);
  transform: rotate(-90deg);
`;

export const Header = () => <SHeader>{LABELS.TITLE}</SHeader>;
