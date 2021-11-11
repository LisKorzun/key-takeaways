import React, { FC } from 'react';
import { PageProps } from 'gatsby';

import { Layout, Seo, Banner, SCenterSection } from '../components';
import { ICONS, LABELS } from '../common';

const AboutPage: FC<PageProps> = () => (
  <Layout>
    <Seo title={LABELS.ABOUT} />
    <SCenterSection>
      <Banner title={LABELS.ABOUT} icon={ICONS.ABOUT} />
    </SCenterSection>
  </Layout>
);

export default AboutPage;
