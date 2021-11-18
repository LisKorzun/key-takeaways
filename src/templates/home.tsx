import React, { FC } from 'react';
import { take } from 'lodash';

import { ICONS, IGroupedField, IPost, LABELS } from '../common';
import {
  Layout,
  Seo,
  Banner,
  PostsList,
  LevelsList,
  TopicsList,
  SCenterSection,
  SFullSection,
  SHeading,
  FeaturedList,
} from '../components';

interface Props {
  pageContext: {
    levels: IGroupedField[];
    posts: IPost[];
    topics: IGroupedField[];
  };
}

const Home: FC<Props> = ({ pageContext: { levels, posts, topics } }) => (
  <Layout>
    <Seo title={LABELS.HOME} />
    <SCenterSection>
      <Banner title={LABELS.TITLE} icon={ICONS.CODE} />
    </SCenterSection>
    <SFullSection>
      <LevelsList levels={levels} />
      <FeaturedList posts={take(posts, 4)} />
    </SFullSection>
    <TopicsList topics={topics} />
    <SCenterSection>
      <SHeading>{LABELS.RECENT}</SHeading>
      <PostsList posts={take(posts, 11)} />
    </SCenterSection>
  </Layout>
);

export default Home;
