import React, { FC } from 'react';
import { take } from 'lodash';

import { ICONS, IGroupedField, IPost, LABELS, ROUTES } from '../common';
import {
  Layout,
  Seo,
  Banner,
  HeadLine,
  PostCard,
  LevelsList,
  TopicsList,
  SCenterSection,
  SFullSection, SHeading
} from '../components';
import styled from 'styled-components';
import { device } from '../styles';

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
    </SFullSection>
    <SCenterSection>
      <HeadLine heading={LABELS.EXPLORE_TOPICS} link={ROUTES.TOPICS} label={LABELS.SEE_TOPICS} />
      <TopicsList topics={topics} />
    </SCenterSection>
    <SCenterSection>
      <SHeading>{LABELS.RECENT}</SHeading>
      <div>
        {take(posts, 5).map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </SCenterSection>
  </Layout>
);

export default Home;
