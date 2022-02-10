import React from 'react';

import { ThemeContext } from './ThemeContext';

const ThemeToggle = () => {
  const { colorMode, setColorMode } = React.useContext(ThemeContext);
  console.log(colorMode, setColorMode)

  if (!colorMode) {
    return null;
  }

  return (
    <label>
      <input
        type="checkbox"
        checked={colorMode === 'dark'}
        onChange={(ev) => {
          setColorMode(ev.target.checked ? 'dark' : 'light');
        }}
      />{' '}
      Dark
    </label>
  );
};

export default ThemeToggle;
