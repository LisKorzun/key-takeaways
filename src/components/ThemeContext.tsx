import React, { FC } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { COLORS, COLOR_MODE_KEY, INITIAL_COLOR_MODE_CSS_PROP } from '../styles/constants';
import { GlobalStyle, theme } from '../styles';

export const ThemeContext = React.createContext({});

// TODO: Refactor

export const ThemeProvider: FC = ({ children }) => {
  const [colorMode, rawSetColorMode] = React.useState(undefined);

  React.useEffect(() => {
    const root = window.document.documentElement;
    // Because colors matter so much for the initial page view, we're
    // doing a lot of the work in gatsby-ssr. That way it can happen before
    // the React component tree mounts.
    const initialColorValue = root.style.getPropertyValue(INITIAL_COLOR_MODE_CSS_PROP);

    rawSetColorMode(initialColorValue);
  }, []);

  const contextValue = React.useMemo(() => {
    function setColorMode(newValue) {
      const root = window.document.documentElement;

      localStorage.setItem(COLOR_MODE_KEY, newValue);

      Object.entries(COLORS).forEach(([name, colorByTheme]) => {
        const cssVarName = `--color-${name}`;

        root.style.setProperty(cssVarName, colorByTheme[newValue]);
      });

      rawSetColorMode(newValue);
    }

    return {
      colorMode,
      setColorMode,
    };
  }, [colorMode, rawSetColorMode]);

  return (
    <ThemeContext.Provider value={contextValue}>
      <StyledThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
