import React, { FC } from 'react';
import { graphql } from 'gatsby';
import { kebabCase } from 'lodash';

import { Layout, Seo, Title, ChipsByTopics, PostsList, BackLink, Pagination, SCenterSection } from '../components';
import { ICONS, IGroupedField, ILevelData, IPost, LABELS, ROUTES } from '../common';

interface Props {
  pageContext: {
    total: number;
    topic: string;
    topics: IGroupedField[];
    levelData: ILevelData;
    numPages: number;
    currentPage: number;
    baseURL: string;
  };
  data: {
    allMdx: {
      nodes: IPost[];
    };
  };
}

const Level: FC<Props> = ({
  pageContext: {
    total,
    topic,
    topics,
    levelData: { title },
    numPages,
    currentPage,
    baseURL,
  },
  data: {
    allMdx: { nodes },
  },
}) => {
  return (
    <Layout>
      <Seo title={`${topic} for ${title}`} />
      <SCenterSection>
        <BackLink label={LABELS.BROWSE_LEVELS} to={ROUTES.LEVELS} />
        <Title caption={LABELS.LEVEL} title={title} icon={ICONS.LEVELS} />
        <ChipsByTopics
          topics={topics}
          active={topic}
          baseRoute={`${ROUTES.LEVELS}/${kebabCase(title)}`}
          total={total}
        />
        <PostsList posts={nodes} />
      </SCenterSection>
      <Pagination currentPage={currentPage} numPages={numPages} baseURL={baseURL} />
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
