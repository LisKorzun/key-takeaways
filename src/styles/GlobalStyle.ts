import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  
  body {
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.background};
  }

  hr {
    border-top: 1px dashed ${({ theme }) => theme.accent};
    &::after {
      color: ${({ theme }) => theme.accent};
    }
  }
  
  a {
    color: ${({ theme }) => theme.primary};
  }
  
  thead tr {
    background-color: ${({ theme }) => theme.primaryRGBA};
    color:  ${({ theme }) => theme.text};
  }

  tbody tr {
    border-bottom: 1px solid ${({ theme }) => theme.accentRGBA};
  }

  tbody tr:nth-of-type(even) {
    background-color: ${({ theme }) => theme.accentRGBA};
  }
  
  blockquote {
    background: ${({ theme }) => theme.accentRGBA};
    border-left: 8px solid ${({ theme }) => theme.accentRGBA};
    margin: 3rem 1rem;
    padding: 1rem;
    quotes: "\\201C""\\201D""\\2018""\\2019";
  }

  blockquote:before {
    color: ${({ theme }) => theme.accentRGBA};
    content: open-quote;
    font-size: 4em;
    line-height: 0.1em;
    margin-right: 0.25em;
    vertical-align: -0.4em;
  }

  blockquote p {
    display: inline;
  }
  
  pre[class*='language-']::before {
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.background};
  }

  div#front::-webkit-scrollbar {
    width: 0.8rem;
    background-color: ${({ theme }) => theme.background};
  }

  div#front::-webkit-scrollbar-track {
    border-radius: 1.5px;
    background-color: ${({ theme }) => theme.accentRGBA};
  }

  div#front::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.text};
    border-radius: 10rem;
  }
  
  pre::-webkit-scrollbar {
    height: 0.8rem;
  }

  pre::-webkit-scrollbar-track {
    border-radius: 1.5px;
    background-color: transparent;
  }

  pre::-webkit-scrollbar-thumb  {
    border-radius: 1rem;
    background-color: ${({ theme }) => theme.accent};
  }
`;
