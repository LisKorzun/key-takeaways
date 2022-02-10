const PRIMARY = '6, 188, 240';

export const COLORS = {
  text: {
    light: '#1B263B',
    dark: '#FFF',
  },
  background: {
    light: '#FFF',
    dark: '#1B263B',
  },
  primary: {
    light: `rgb(${PRIMARY})`,
    dark: `rgb(${PRIMARY})`,
  },
  secondary: {
    light: '#757B94',
    dark: '#757B94',
  },
  primary100: {
    light: `rgba(${PRIMARY}, 0.1)`,
    dark: `rgba(${PRIMARY}, 0.1)`,
  },
  secondary100: {
    light: 'rgba(117, 123, 148, 0.1)',
    dark: 'rgba(117, 123, 148, 0.1)',
  },
};

export const COLOR_MODE_KEY = 'color-mode';
export const INITIAL_COLOR_MODE_CSS_PROP = '--initial-color-mode';
