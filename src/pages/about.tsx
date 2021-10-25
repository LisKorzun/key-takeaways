import React, { FC } from 'react';
import { PageProps } from 'gatsby';

import Layout from '../components/layout';
import Seo from '../components/seo';
import { SSection, SSeparator, STitle } from '../components/common';

const AboutPage: FC<PageProps> = () => (
  <Layout>
    <Seo title="About" />
    <SSection>
      <STitle>About</STitle>
      <SSeparator />
    </SSection>
  </Layout>
);

export default AboutPage;
