import React, { FC } from 'react';
import { graphql } from 'gatsby';
import { kebabCase } from 'lodash';

import { Layout, Seo, Title, ChipsByLevels, PostsList, SCenterSection } from '../components';
import { IGroupedField, ILevelData, IPost, LABELS, ROUTES } from '../common';

interface Props {
  pageContext: {
    topic: string;
    level: string;
    levelsData: ILevelData[];
    levels: IGroupedField[];
    total: number;
  };
  data: {
    allMdx: {
      nodes: IPost[];
    };
  };
}

const Topic: FC<Props> = ({
  pageContext: { topic, levelsData, levels, level, total },
  data: {
    allMdx: { nodes },
  },
}) => (
  <Layout>
    <Seo title={topic} />
    <SCenterSection>
      <Title caption={LABELS.TOPIC} title={topic} />
      <ChipsByLevels
        levels={levels}
        data={levelsData}
        active={level}
        baseRoute={`${ROUTES.TOPICS}/${kebabCase(topic)}`}
        total={total}
      />
      <PostsList posts={nodes} />
    </SCenterSection>
  </Layout>
);

export const pageQuery = graphql`
  query ($filter: MdxFrontmatterFilterInput, $skip: Int!, $limit: Int!) {
    allMdx(
      filter: { frontmatter: $filter }
      sort: { fields: frontmatter___date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      totalCount
      nodes {
        ...postFields
      }
    }
  }
`;

export default Topic;
