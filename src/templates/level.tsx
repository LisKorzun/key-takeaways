import React, { FC } from 'react';
import { graphql } from 'gatsby';
import { kebabCase } from 'lodash';

import {
  Layout,
  Seo,
  Title,
  ChipsByTags,
  PostsList,
  Pagination,
  SPageWrapper,
} from '../components';
import { ICONS, IGroupedField, ILevelData, IPost, LABELS, ROUTES } from '../common';

interface Props {
  pageContext: {
    total: number;
    tag: string;
    tags: IGroupedField[];
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
    tag,
    tags,
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
      <Seo title={`${tag} for ${title}`} />
      <SPageWrapper>
        <Title caption={LABELS.LEVEL} title={title} icon={ICONS.LEVELS} />
        <ChipsByTags tags={tags} active={tag} baseRoute={`${ROUTES.LEVELS}/${kebabCase(title)}`} total={total} />
        <PostsList posts={nodes} />
      </SPageWrapper>
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
