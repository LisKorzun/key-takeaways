/* Fonts */
import '@fontsource/architects-daughter';
import '@fontsource/space-mono';
import '@fontsource/syncopate';
import '@fontsource/outfit/100.css';
import '@fontsource/outfit/200.css';
import '@fontsource/outfit/300.css';
import '@fontsource/outfit/400.css';
import '@fontsource/outfit/500.css';
import '@fontsource/outfit/600.css';
import '@fontsource/outfit/700.css';
import '@fontsource/outfit/800.css';
import '@fontsource/outfit/900.css';

/* Libraries */
import 'prismjs/themes/prism-solarizedlight.css';

import App from './src/components/App';
import React from 'react';

export const wrapPageElement = ({ element }) => {
  return <App>{element}</App>;
};
