import React, { FC } from 'react';
import { PageProps } from 'gatsby';

import { Layout, Seo, Banner } from '../components';
import { ICONS, LABELS } from '../common';

const AboutPage: FC<PageProps> = () => (
  <Layout>
    <Seo title={LABELS.ABOUT} />
    <Banner title={LABELS.ABOUT} icon={ICONS.ABOUT} />
  </Layout>
);

export default AboutPage;
