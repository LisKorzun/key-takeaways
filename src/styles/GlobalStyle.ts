import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    font-family: "Josefin Sans";
    line-height: 1.15;
    font-size: 62.5%;
    -webkit-text-size-adjust: 100%;
    height: 100%;
  }
  body {
    font-family: "Josefin Sans";
    margin: 0;
    font-size: calc(1.8rem + .2vw);
    line-height: 1.15;
    font-weight: 300;
    display: flex;
    flex-direction: column;
    min-height: 100%;
    height: 100%;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    color: ${(props) => props.theme.text};
    background-color: ${(props) => props.theme.background};

    h1, h2, h3 {
      line-height: 1.2;
    }
    h1 {
      font-size: calc(4rem + 1.6vw);
      text-transform: capitalize;
      color: ${(props) => props.theme.text};
      margin: 0;
    }
    h2 {}
    h3 {}
    
    p {
      font-weight: 300;
      line-height: calc(1.4em + .2vw);
      word-break: break-word;
      color: ${(props) => props.theme.text};
      margin: 0 0 2rem;
    }
    
    a {
      text-decoration: none;
      margin: 0;
      cursor: pointer;
      color: ${(props) => props.theme.text};
      &:visited, &:active {
        color: ${(props) => props.theme.text};
      }
      &:hover {
        opacity: 0.5;
      }
    }
  }
`;

export default GlobalStyle;
