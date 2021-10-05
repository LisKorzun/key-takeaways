import * as React from 'react';
import { PageProps } from 'gatsby';

import Layout from '../components/layout';
import Seo from '../components/seo';

const HomePage: React.FC<PageProps> = () => (
  <Layout>
    <Seo title="Home" />
    <div>Home Page</div>
  </Layout>
);

export default HomePage;
