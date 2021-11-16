import React, { FC } from 'react';
import { graphql } from 'gatsby';

import { Layout, Seo, Title, HeadLine, ChipsByLevels, SCenterSection, PostsList } from '../components';
import { getPostsCount, IGroupedField, ILevelData, IPost, LABELS, ROUTES } from '../common';
import { kebabCase } from 'lodash';

interface Props {
  pageContext: {
    topic: string;
    level: string;
    levelsData: ILevelData[];
    levels: IGroupedField[];
  };
  data: {
    allMdx: {
      nodes: IPost[];
      totalCount: number;
    };
  };
}

const TopicByLevels: FC<Props> = ({
  pageContext: { topic, levelsData, levels, level },
  data: {
    allMdx: { nodes, totalCount },
  },
}) => (
  <Layout>
    <Seo title={`${LABELS.TOPIC} - ${topic}`} />
    <SCenterSection>
      <Title caption={LABELS.TOPIC} title={topic} />
      <ChipsByLevels
        levels={levels}
        data={levelsData}
        active={level}
        baseRoute={`${ROUTES.TOPICS}/${kebabCase(topic)}`}
      />
      <HeadLine heading={getPostsCount(totalCount)} link={ROUTES.TOPICS} label={LABELS.BACK_TO_TOPICS} />
      <PostsList posts={nodes} />
    </SCenterSection>
  </Layout>
);

export const pageQuery = graphql`
  query ($topic: String, $level: String) {
    allMdx(
      filter: { frontmatter: { topic: { eq: $topic }, level: { eq: $level } } }
      sort: { fields: frontmatter___date, order: DESC }
      limit: 2000
    ) {
      totalCount
      nodes {
        ...postFields
      }
    }
  }
`;

export default TopicByLevels;
