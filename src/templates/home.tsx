import React, { FC } from 'react';
import { take, find } from 'lodash';

import { IGroupedField, IPost } from '../common';
import { Card } from '../components/card';
import {
  Layout,
  Seo,
  Banner,
  DarkSection,
  SFlexColumnContainer,
  SFlexRowContainer,
  LevelCard,
  SHeadLine,
} from '../components';
import { TopicCard } from '../components/TopicCard';

interface Props {
  pageContext: {
    levels: IGroupedField[];
    levelsData: { id: string; title: string }[];
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
        <h3>Competency Levels</h3>
        <SFlexRowContainer wrap="wrap" gap="20px" mt="30px">
          {levels.map((l) => {
            const level = find(levelsData, ['id', l.fieldValue]);
            const icon = `Level-${l.fieldValue}`;
            return <>{level && <LevelCard title={level.title} count={l.totalCount} icon={icon} />}</>;
          })}
        </SFlexRowContainer>
      </DarkSection>
      <SFlexColumnContainer>
        <SHeadLine>Explore by Topics</SHeadLine>
        <SFlexColumnContainer>
          {topics.map((topic) => (
            <TopicCard key={topic.fieldValue} title={topic.fieldValue} count={topic.totalCount} />
          ))}
        </SFlexColumnContainer>
      </SFlexColumnContainer>

      <SFlexColumnContainer mt="70px">
        <SHeadLine>Recently published</SHeadLine>
        <div>
          {take(posts, 5).map((post) => (
            <Card key={post.id} post={post} />
          ))}
        </div>
      </SFlexColumnContainer>
    </Layout>
  );
};

export default Home;
