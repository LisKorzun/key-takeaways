import React, { FC } from 'react';
import { graphql } from 'gatsby';
import { kebabCase } from 'lodash';

import { Layout, Seo, Title, ChipsByLevels, PostsList, SPageWrapper, Pagination } from '../components';
import { ICONS, IGroupedField, ILevelData, IPost, LABELS, ROUTES } from '../common';

interface Props {
  pageContext: {
    tag: string;
    level: string;
    levelsData: ILevelData[];
    levels: IGroupedField[];
    total: number;
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

const Tag: FC<Props> = ({
  pageContext: { tag, levelsData, levels, level, total, numPages, currentPage, baseURL },
  data: {
    allMdx: { nodes },
  },
}) => (
  <Layout>
    <Seo title={`${tag} ${LABELS.TAG_CAPTION}`} />
    <SPageWrapper>
      <Title caption={LABELS.TAG_CAPTION} title={tag} icon={ICONS.TAG} />
      <ChipsByLevels
        levels={levels}
        data={levelsData}
        active={level}
        baseRoute={`${ROUTES.TAG}/${kebabCase(tag)}`}
        total={total}
      />
      <PostsList posts={nodes} />
      <Pagination currentPage={currentPage} numPages={numPages} baseURL={baseURL} />
    </SPageWrapper>
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

export default Tag;
