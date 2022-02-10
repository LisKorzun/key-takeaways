import React, { FC } from 'react';
import { graphql } from 'gatsby';
import { kebabCase } from 'lodash';

import { Seo, Title, ChipsByTags, PostsList, Pagination, SPageWrapper } from '../components';
import { ICONS, IGroupedField, ILevelData, IPost, ROUTES } from '../common';

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
    levelData: { title, caption },
    numPages,
    currentPage,
    baseURL,
  },
  data: {
    allMdx: { nodes },
  },
}) => {
  return (
    <>
      <Seo title={`${tag} for ${title}`} />
      <SPageWrapper>
        <Title caption={caption} title={title} icon={ICONS.LEVELS} />
        <ChipsByTags tags={tags} active={tag} baseRoute={`${ROUTES.LEVEL}/${kebabCase(title)}`} total={total} />
        <PostsList posts={nodes} />
        <Pagination currentPage={currentPage} numPages={numPages} baseURL={baseURL} />
      </SPageWrapper>
    </>
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
