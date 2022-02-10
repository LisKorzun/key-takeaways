import { createGlobalStyle } from 'styled-components';

import { BaseStyles, PrismStyles, ScrollbarStyles } from './partial';
import { variables } from './variables';

export const GlobalStyle = createGlobalStyle`
  ${variables};
  
  ${BaseStyles}
  
  ${ScrollbarStyles}
  ${PrismStyles}
`;
