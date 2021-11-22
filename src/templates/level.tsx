import React, { FC } from 'react';
import { graphql } from 'gatsby';
import { kebabCase } from 'lodash';

import { Layout, Seo, Title, ChipsByTopics, PostsList, SCenterSection, BackLink } from '../components';
import { ICONS, IGroupedField, ILevelData, IPost, LABELS, ROUTES } from '../common';

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
        <BackLink label={LABELS.BROWSE_LEVELS} to={ROUTES.LEVELS}/>
        <Title caption={LABELS.LEVEL} title={title} icon={ICONS.LEVELS}/>
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
