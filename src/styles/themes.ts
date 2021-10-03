import 'styled-components';
import { DefaultTheme } from 'styled-components';

type themes = 'blue' | 'yellow' | 'tan' | 'green';

export type IThemes = {
  [key in themes]: DefaultTheme;
};

export const themes: IThemes = {
  blue: {
    primary: '#4DA8DA',
    secondary: '#203647',
    accent: '#007CC7',
    background: '#EEFBFB',
    text: '#12232E',
  },
  yellow: {
    primary: '#FFDF6C',
    secondary: '#3F3F3F',
    accent: '#707070',
    background: '#FFFFFF',
    text: '#202020',
  },
  tan: {
    primary: '#E8CEBF',
    secondary: '#266150',
    accent: '#DDAF94',
    background: '#FDF8F5',
    text: '#4F4846',
  },
  green: {
    primary: '#A3BCB6',
    secondary: '#39603D',
    accent: '#DADED4',
    background: '#FFFFFF',
    text: '#3C403D',
  },
};

export default themes;
