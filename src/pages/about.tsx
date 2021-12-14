import React, { FC } from 'react';
import { PageProps } from 'gatsby';

import { Layout, Seo, SCenterSection } from '../components';
import { LABELS } from '../common';

const AboutPage: FC<PageProps> = () => (
  <Layout>
    <Seo title={LABELS.ABOUT} />
    <SCenterSection>
      <h1>{LABELS.ABOUT}</h1>
    </SCenterSection>
  </Layout>
);

export default AboutPage;
