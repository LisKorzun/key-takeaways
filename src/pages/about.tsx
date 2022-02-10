import React, { FC } from 'react';
import { PageProps } from 'gatsby';

import { Seo, SPageWrapper } from '../components';
import { LABELS } from '../common';

const AboutPage: FC<PageProps> = () => (
  <>
    <Seo title={LABELS.ABOUT} />
    <SPageWrapper>
      <h1>{LABELS.ABOUT}</h1>
    </SPageWrapper>
  </>
);

export default AboutPage;
