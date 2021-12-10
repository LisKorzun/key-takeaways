import React, { FC } from 'react';
import { take } from 'lodash';

import { ICONS, IGroupedField, IPost, LABELS } from '../common';
import { Layout, Seo, Banner, PostsList, SPageWrapper, SCenterSection, SHeading } from '../components';

interface Props {
  pageContext: {
    levels: IGroupedField[];
    posts: IPost[];
    topics: IGroupedField[];
  };
}

const Home: FC<Props> = ({ pageContext: { posts } }) => (
  <Layout>
    <Seo title={LABELS.HOME} />
    <SCenterSection>
      <Banner title={LABELS.TITLE} icon={ICONS.CODE} />
    </SCenterSection>
    <SPageWrapper>
      <SHeading>{LABELS.RECENT}</SHeading>
      <PostsList posts={take(posts, 13)} />
    </SPageWrapper>
  </Layout>
);

export default Home;
