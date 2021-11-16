import React, { FC } from 'react';
import { graphql } from 'gatsby';
import { kebabCase } from 'lodash';

import { Layout, Seo, Title, HeadLine, ChipsByTopics, SCenterSection, PostsList } from '../components';
import { getPostsCount, IGroupedField, ILevelData, IPost, LABELS, ROUTES } from '../common';

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
    allMdx: { totalCount, nodes },
  },
}) => {
  return (
    <Layout>
      <Seo title={`${LABELS.TOPIC} - ${topic} | ${LABELS.LEVEL} - ${title}`} />
      <SCenterSection>
        <Title caption={LABELS.LEVEL} title={title} />
        <ChipsByTopics topics={topics} active={topic} baseRoute={`${ROUTES.LEVELS}/${kebabCase(title)}`} />
        {/*<HeadLine heading={getPostsCount(totalCount)} link={ROUTES.LEVELS} label={LABELS.BACK_TO_LEVELS} />*/}
        <PostsList posts={nodes} />
      </SCenterSection>
    </Layout>
  );
};

export const pageQuery = graphql`
  query ($level: String, $topic: String) {
    allMdx(
      filter: { frontmatter: { level: { eq: $level }, topic: { eq: $topic } } }
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

export default LevelByTopic;
