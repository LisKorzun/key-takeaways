import React, { FC } from 'react';
import { graphql } from 'gatsby';
import { kebabCase } from 'lodash';

import { Layout, Seo, Title, ChipsByLevels, PostsList, SCenterSection, BackLink } from '../components';
import { ICONS, IGroupedField, ILevelData, IPost, LABELS, ROUTES } from '../common';

interface Props {
  pageContext: {
    tag: string;
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

const Tag: FC<Props> = ({
  pageContext: { tag, levelsData, levels, level, total },
  data: {
    allMdx: { nodes },
  },
}) => (
  <Layout>
    <Seo title={`${tag} ${LABELS.TAG}`} />
    <SCenterSection>
      <BackLink label={LABELS.BROWSE_TAGS} to={ROUTES.TAGS}/>
      <Title caption={LABELS.TAG} title={tag} icon={ICONS.TAG} />
      <ChipsByLevels
        levels={levels}
        data={levelsData}
        active={level}
        baseRoute={`${ROUTES.TAGS}/${kebabCase(tag)}`}
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

export default Tag;
