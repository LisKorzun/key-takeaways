import 'styled-components';
import { DefaultTheme } from 'styled-components';

type themes = 'blue' | 'yellow' | 'green';

export type IThemes = {
  [key in themes]: DefaultTheme;
};

export const themes: IThemes = {
  blue: {
    primary: '#06BCF0',
    secondary: '#1B263B',
    accent: '#9cacbf',
    background: '#FFF',
    text: '#596a71',
    border: '#F3F7FA'
  },
  yellow: {
    primary: '#FFDF6C',
    secondary: '#3F3F3F',
    accent: '#707070',
    background: '#FFFFFF',
    text: '#202020',
    border: '#eee'
  },
  green: {
    primary: '#A3BCB6',
    secondary: '#39603D',
    accent: '#DADED4',
    background: '#FFFFFF',
    text: '#3C403D',
    border: '#eee'
  },
};

export default themes;
