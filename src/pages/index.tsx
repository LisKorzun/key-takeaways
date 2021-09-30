import * as React from 'react';
import { PageProps } from 'gatsby';

import Layout from '../components/layout';
import Seo from '../components/seo';

const HomePage: React.FC<PageProps> = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Hello world!</h1>
  </Layout>
);

export default HomePage;
