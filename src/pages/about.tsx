import React, { FC } from 'react';
import { PageProps } from 'gatsby';

import { Layout, Seo, SPageWrapper } from '../components';
import { LABELS } from '../common';

const AboutPage: FC<PageProps> = () => (
  <Layout>
    <Seo title={LABELS.ABOUT} />
    <SPageWrapper>
      <h1>{LABELS.ABOUT}</h1>
    </SPageWrapper>
  </Layout>
);

export default AboutPage;
