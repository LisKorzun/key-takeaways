import React, { FC } from 'react';
import { take } from 'lodash';

import { IGroupedField, ILevelData, IPost, LEVELS_TITLE } from '../common';
import {
  Layout,
  Seo,
  Banner,
  HeadLine,
  PostCard,
  LevelsList,
  TopicsList,
  DarkSection,
  SFlexColumnContainer,
} from '../components';

interface Props {
  pageContext: {
    levels: IGroupedField[];
    levelsData: ILevelData[];
    posts: IPost[];
    topics: IGroupedField[];
  };
}

const Home: FC<Props> = ({ pageContext }) => {
  const { levels, levelsData, posts, topics } = pageContext;

  return (
    <Layout>
      <Seo title="Home" />
      <Banner title="Key Takeaways" icon="code" />
      <DarkSection>
        <h3>{LEVELS_TITLE}</h3>
        <LevelsList levels={levels} data={levelsData} />
      </DarkSection>
      <SFlexColumnContainer mb="70px">
        <HeadLine heading="Explore by Topics" link="/topics" label="See all" />
        <TopicsList topics={topics} />
      </SFlexColumnContainer>
      <SFlexColumnContainer mb="70px">
        <HeadLine heading="Recently published" />
        <div>
          {take(posts, 5).map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </SFlexColumnContainer>
    </Layout>
  );
};

export default Home;
