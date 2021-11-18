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

const Level: FC<Props> = ({
  pageContext: {
    topic,
    topics,
    levelData: { title },
  },
  data: {
    allMdx: { nodes, totalCount },
  },
}) => {
  return (
    <Layout>
      <Seo title={`${topic} for ${title}`} />
      <SCenterSection>
        <Title caption={LABELS.LEVEL} title={title} />
        <ChipsByTopics
          topics={topics}
          active={topic}
          baseRoute={`${ROUTES.LEVELS}/${kebabCase(title)}`}
          total={totalCount}
        />
        <PostsList posts={nodes} />
      </SCenterSection>
    </Layout>
  );
};

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

export default Level;
