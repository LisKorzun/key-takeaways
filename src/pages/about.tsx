import React, { FC } from 'react';
import { PageProps } from 'gatsby';

import { Layout, Seo, Banner } from '../components';

const AboutPage: FC<PageProps> = () => (
  <Layout>
    <Seo title="About" />
    <Banner title="About" icon="about" />
  </Layout>
);

export default AboutPage;
