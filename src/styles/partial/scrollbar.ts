import { css } from 'styled-components';

export const ScrollbarStyles = css`
  div#front::-webkit-scrollbar {
    width: 10px;
  }
  div#front::-webkit-scrollbar-track {
    background: var(--color-background);
  }
  div#front::-webkit-scrollbar-thumb {
    background-color: var(--color-background);
    border: 3px solid var(--color-secondary);
    border-radius: 10px;
  }

  pre::-webkit-scrollbar {
    height: 8px;
  }
  pre::-webkit-scrollbar-track {
    border-radius: 1.5px;
    background-color: transparent;
  }
  pre::-webkit-scrollbar-thumb {
    border-radius: 1rem;
    background-color: var(--color-secondary);
  }
`;
