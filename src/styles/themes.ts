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
    accent: '#757B94',
    background: '#FFF',
    text: '#1B263B',
    border: '#F3F7FA',
    primaryRGBA: 'rgba(6, 188, 240, 0.1)',
    accentRGBA: 'rgba(117, 123, 148, 0.1)',
  },
  dark: {
    primary: '#06BCF0',
    secondary: '#FFF',
    accent: '#757B94',
    background: '#1B263B',
    text: '#FFF',
    border: '#eee',
    primaryRGBA: 'rgba(6, 188, 240, 0.1)',
    accentRGBA: 'rgba(117, 123, 148, 0.1)',
  },
};
