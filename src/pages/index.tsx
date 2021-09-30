import * as React from 'react';
import { PageProps } from 'gatsby';

import Layout from '../components/layout';

const Greeting: React.FC<PageProps> = () => (
  <Layout>
    <h1>Hello world!</h1>
  </Layout>
);

export default Greeting;
