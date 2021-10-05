import * as React from 'react';
import { PageProps } from 'gatsby';

import Layout from '../components/layout';
import Seo from '../components/seo';

const AboutPage: React.FC<PageProps> = () => (
  <Layout>
    <Seo title="About" />
    <div>About Page</div>
  </Layout>
);

export default AboutPage;
