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
  }
`;
