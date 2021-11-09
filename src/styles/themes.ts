import 'styled-components';
import { DefaultTheme } from 'styled-components';

export type ThemeModes = 'dark' | 'light';

export type IThemes = {
  [key in ThemeModes]: DefaultTheme;
};

export const themes: IThemes = {
  light: {
    primary: '#06BCF0',
    secondary: '#1B263B',
    accent: '#9cacbf',
    background: '#FFF',
    text: '#1B263B',
    border: '#F3F7FA',
  },
  dark: {
    primary: '#06BCF0',
    secondary: '#FFF',
    accent: '#9cacbf',
    background: '#1B263B',
    text: '#FFF',
    border: '#eee',
  }
};
