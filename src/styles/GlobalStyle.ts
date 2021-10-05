import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Josefin Sans";
    font-size: 16px;
    color: ${(props) => props.theme.text};
    background-color: ${(props) => props.theme.background};
  }
  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
