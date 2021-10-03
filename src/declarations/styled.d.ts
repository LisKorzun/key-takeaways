import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
  }
}
