import React, { FC } from 'react';

import { Layout } from './layout';

const App: FC = ({ children }) => {
  return <Layout>{children}</Layout>;
};

export default App;
