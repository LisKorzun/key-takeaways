import React, { FC } from 'react';
import { graphql } from 'gatsby';
import { kebabCase } from 'lodash';

import { Layout, Seo, Title, ChipsByTopics, PostsList, SCenterSection } from '../components';
import { IGroupedField, ILevelData, IPost, LABELS, ROUTES } from '../common';

interface Props {
  pageContext: {
    topic: string;
    topics: IGroupedField[];
    levelData: ILevelData;
  };
  data: {
    allMdx: {
      totalCount: number;
      nodes: IPost[];
    };
  };
}

const LevelByTopic: FC<Props> = ({
  pageContext: {
    topic,
    topics,
    levelData: { title },
  },
  data: {
    allMdx: { nodes },
  },
}) => {
  return (
    <Layout>
      <Seo title={`${LABELS.TOPIC} - ${topic} | ${LABELS.LEVEL} - ${title}`} />
      <SCenterSection>
        <Title caption={LABELS.LEVEL} title={title} />
        <ChipsByTopics topics={topics} active={topic} baseRoute={`${ROUTES.LEVELS}/${kebabCase(title)}`} />
        <PostsList posts={nodes} />
      </SCenterSection>
    </Layout>
  );
};

export const pageQuery = graphql`
  query ($filter: MdxFrontmatterFilterInput) {
    allMdx(filter: { frontmatter: $filter }, sort: { fields: frontmatter___date, order: DESC }, limit: 2000) {
      totalCount
      nodes {
        ...postFields
      }
    }
  }
`;

export default LevelByTopic;
