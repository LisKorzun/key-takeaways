import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    -webkit-text-size-adjust: 100%;
    height: 100%;
  }
  
  body {
    font-family: "Outfit";
    font-weight: 300;
    font-size: calc(1.8rem + .2vw);
    line-height: 1.2;
    display: flex;
    flex-direction: column;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.background};
  }

  h1, h2, h3, h4, h5, h6 {
    line-height: 1.2;
    margin: 0;
  }

  h1 {
    font-weight: 900;
    font-size: calc(3rem + 3vw);
    text-transform: capitalize;
  }
  h2 {
    font-size: calc(2.5rem + 1.5vw);
    font-weight: 300;
  }
  h3 {
    font-size: calc(2rem + 1vw);
    font-weight: 300;
  }

  p {
    font-weight: 300;
    font-size: calc(1.8rem + .2vw);
    line-height: calc(1.4em + .2vw);
    word-break: break-word;
    margin: 1rem 0;
    text-align: justify;
  }
  
  em {
    font-style: italic;
  }
  
  strong {
    font-weight: 600;
  }
  
  a {
    text-decoration: none;
    margin: 0;
    cursor: pointer;
    color: ${({ theme }) => theme.primary};
    font-weight: 400;
  }
  
  hr {
    width: 100%;
    border: 0;
    height: 0;
    border-top: 1px solid ${({ theme }) => theme.accentRGBA};
  }

  ul, ol {
    margin: 0;
    li {
      margin: 1.1rem 0;
      p {
        margin: 0 0 1.1rem;
      }
    }
  }

  ul li {
    list-style-type: circle;
  }
  
  table {
    border-collapse: collapse;
    margin: 2.5rem 0;
    font-size: 0.9em;
    font-family: sans-serif;
    min-width: 4rem;
  }
  thead tr {
    background-color: ${({ theme }) => theme.primaryRGBA};
    color:  ${({ theme }) => theme.text};
    text-align: left;
  }
  
  th, td {
    padding: 12px 15px;
    min-width: 12rem;
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
    color: ${({ theme }) => theme.accent};
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
    font-family: "Outfit";
    border-radius: 0 0 4px 4px;
    font-size: 1.4rem;
    line-height: 1;
    padding: 0.5rem 0.8rem;
    position: absolute;
    left: 2.5rem;
    text-transform: uppercase;
    font-weight: 600;
    top: 0;
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.background};
  }

  div#front::-webkit-scrollbar {
    width: 0.8rem;
    background-color: ${({ theme }) => theme.background};
  }

  div#front::-webkit-scrollbar-track {
    border-radius: 1.5px;
    background-color: transparent;
  }

  div#front::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.accent};;
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
