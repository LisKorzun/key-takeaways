import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Josefin Sans";
    font-size: 16px;
    font-weight: 400;
    line-height: normal;
    color: ${(props) => props.theme.text};
    background-color: ${(props) => props.theme.background};
  }
  a {
    text-decoration: none;
    -moz-transition: all 0.2s ease-in-out;
    -o-transition: all 0.2s ease-in-out;
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
  }
`;

export default GlobalStyle;
