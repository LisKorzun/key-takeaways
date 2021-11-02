import React, { FC } from 'react';
import { take, find } from 'lodash';

import Seo from '../components/seo';
import Layout from '../components/layout';
import { IPost } from '../common';
import { Card } from '../components/card';
import { DarkSection, SFlexColumnContainer, SFlexRowContainer, LevelCard, SHeadLine } from '../components';
import { Banner } from '../components/Banner';

interface Props {
  pageContext: {
    levels: { fieldValue: string; totalCount: number }[];
    levelsData: { id: string; title: string }[];
    posts: IPost[];
  };
}

const Home: FC<Props> = ({ pageContext }) => {
  const { levels, levelsData, posts } = pageContext;

  return (
    <Layout>
      <Seo title="Home" />
      <Banner title="Key Takeaways" />
      <DarkSection>
        <h3>Competency Levels</h3>
        <SFlexRowContainer wrap="wrap" gap="20px">
          {levels.map((l) => {
            const level = find(levelsData, ['id', l.fieldValue]);
            const icon = `Level-${l.fieldValue}`;
            return <>{level && <LevelCard title={level.title} count={l.totalCount} icon={icon} />}</>;
          })}
        </SFlexRowContainer>
      </DarkSection>
      <SFlexColumnContainer>
        <SHeadLine>Recent Posts</SHeadLine>
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
