import React, { FC } from 'react';
import { graphql } from 'gatsby';

import { Layout, Seo, Title, HeadLine, ChipsByLevels, SCenterSection, PostsList } from '../components';
import { getPostsCount, IGroupedField, ILevelData, IPost, LABELS, ROUTES } from '../common';
import { kebabCase } from 'lodash';

interface Props {
  pageContext: {
    topic: string;
    levelsData: ILevelData[];
  };
  data: {
    allMdx: {
      nodes: IPost[];
      totalCount: number;
      group: IGroupedField[];
    };
  };
}

const Topic: FC<Props> = ({
  pageContext: { topic, levelsData },
  data: {
    allMdx: { nodes, totalCount, group },
  },
}) => (
  <Layout>
    <Seo title={`${LABELS.TOPIC} - ${topic}`} />
    <SCenterSection>
      <Title caption={LABELS.TOPIC} title={topic} />
      <ChipsByLevels levels={group} data={levelsData} active="all" baseRoute={`${ROUTES.TOPICS}/${kebabCase(topic)}`} />
      <HeadLine heading={getPostsCount(totalCount)} link={ROUTES.TOPICS} label={LABELS.BACK_TO_TOPICS} />
      <PostsList posts={nodes} />
    </SCenterSection>
  </Layout>
);

export const pageQuery = graphql`
  query ($topic: String) {
    allMdx(
      filter: { frontmatter: { topic: { eq: $topic } } }
      sort: { fields: frontmatter___date, order: DESC }
      limit: 2000
    ) {
      totalCount
      nodes {
        ...postFields
      }
      group(field: frontmatter___level) {
        fieldValue
        totalCount
      }
    }
  }
`;

export default Topic;
