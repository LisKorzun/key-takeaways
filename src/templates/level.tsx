import React, { FC } from 'react';
import { graphql } from 'gatsby';
import { kebabCase } from 'lodash';

import { Layout, Seo, Title, HeadLine, ChipsByTopics, SCenterSection, PostsList } from '../components';
import { getPostsCount, IGroupedField, ILevelData, IPost, LABELS, ROUTES } from '../common';

interface Props {
  pageContext: {
    levelData: ILevelData;
  };
  data: {
    allMdx: {
      totalCount: number;
      nodes: IPost[];
      group: IGroupedField[];
    };
  };
}

const Level: FC<Props> = ({
  pageContext: {
    levelData: { title },
  },
  data: {
    allMdx: { totalCount, nodes, group },
  },
}) => (
  <Layout>
    <Seo title={`${LABELS.LEVEL} - ${title}`} />
    <SCenterSection>
      <Title caption={LABELS.LEVEL} title={title} />
      <ChipsByTopics topics={group} active="all" baseRoute={`${ROUTES.LEVELS}/${kebabCase(title)}`} />
      {/*<HeadLine heading={getPostsCount(totalCount)} link={ROUTES.LEVELS} label={LABELS.BACK_TO_LEVELS} />*/}
      <PostsList posts={nodes} />
    </SCenterSection>
  </Layout>
);

export const pageQuery = graphql`
  query ($level: String) {
    allMdx(
      filter: { frontmatter: { level: { eq: $level } } }
      sort: { fields: frontmatter___date, order: DESC }
      limit: 2000
    ) {
      totalCount
      nodes {
        ...postFields
      }
      group(field: frontmatter___topic) {
        fieldValue
        totalCount
      }
    }
  }
`;

export default Level;
