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
    text: '#1B263B',
    border: '#F3F7FA',
  },
  yellow: {
    primary: '#06BCF0',
    secondary: '#FFF',
    accent: '#9cacbf',
    background: '#1B263B',
    text: '#FFF',
    border: '#eee',
  },
  green: {
    primary: '#A3BCB6',
    secondary: '#39603D',
    accent: '#DADED4',
    background: '#FFFFFF',
    text: '#3C403D',
    border: '#eee',
  },
};

export default themes;
