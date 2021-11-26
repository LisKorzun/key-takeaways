import React from 'react';
import styled from 'styled-components';

export const SH1 = styled((props) => <h1 {...props} />)`
  font-size: calc(3rem + 3vw);
  margin: 3rem 0;
  font-weight: 900;
  text-transform: capitalize;
`;

export const SH2 = styled((props) => <h2 {...props} />)`
  font-size: calc(2.5rem + 2vw);
  margin: 2.5rem 0;
  font-weight: 800;
`;

export const SH3 = styled((props) => <h3 {...props} />)`
  font-size: calc(2.5rem + 1.2vw);
  margin: 2rem 0;
  font-weight: 600;
`;

export const SH4 = styled((props) => <h4 {...props} />)`
  font-size: calc(2rem + 1vw);
  margin: 2rem 0;
  font-weight: 400;
`;

export const SH5 = styled((props) => <h5 {...props} />)`
  font-size: calc(1.8rem + 1vw);
  margin: 1.5rem 0;
  font-weight: 300;
`;

export const SH6 = styled((props) => <h6 {...props} />)`
  font-size: calc(1.8rem + 0.7vw);
  margin: 1rem 0;
  font-weight: 200;
`;

export const SP = styled((props) => <p {...props} />)`
  font-size: calc(1.8rem + 0.2vw);
  line-height: calc(1.4em + 0.2vw);
  margin-bottom: 2rem;
  font-weight: 300;
`;

export const SEm = styled((props) => <em {...props} />)`
  font-style: italic;
`;

export const SStrong = styled((props) => <strong {...props} />)`
  font-weight: 600;
`;
