import React, { FC, Fragment } from 'react';
import { take, find } from 'lodash';

import { IGroupedField, IPost } from '../common';
import {
  Layout,
  Seo,
  Banner,
  HeadLine,
  PostCard,
  LevelCard,
  TopicCard,
  DarkSection,
  SFlexColumnContainer,
  SFlexRowContainer,
} from '../components';

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
            return (
              <Fragment key={l.fieldValue}>
                {level && <LevelCard title={level.title} count={l.totalCount} icon={icon} />}
              </Fragment>
            );
          })}
        </SFlexRowContainer>
      </DarkSection>
      <SFlexColumnContainer mb="70px">
        <HeadLine heading="Explore by Topics" link="/topics" label="See all" />
        <SFlexColumnContainer>
          {topics.map((topic) => (
            <TopicCard key={topic.fieldValue} title={topic.fieldValue} count={topic.totalCount} />
          ))}
        </SFlexColumnContainer>
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
