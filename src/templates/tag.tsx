import React, { FC } from 'react';
import { graphql } from 'gatsby';
import { kebabCase } from 'lodash';

import { Layout, Seo, Title, HeadLine, ChipsByLevels, SCenterSection, PostsList } from '../components';
import { getPostsCount, IGroupedField, ILevelData, IPost, LABELS, ROUTES } from '../common';

interface Props {
  pageContext: {
    tag: string;
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

const Tag: FC<Props> = ({
  pageContext: { tag, levelsData },
  data: {
    allMdx: { nodes, totalCount, group },
  },
}) => (
  <Layout>
    <Seo title={`${LABELS.TAG} - ${tag}`} />
    <SCenterSection>
      <Title caption={LABELS.TAG} title={tag} />
      <ChipsByLevels levels={group} data={levelsData} active="all" baseRoute={`${ROUTES.TAGS}/${kebabCase(tag)}`} />
      <HeadLine heading={getPostsCount(totalCount)} link={ROUTES.TAGS} label={LABELS.BACK_TO_TAGS} />
      <PostsList posts={nodes} />
    </SCenterSection>
  </Layout>
);

export const pageQuery = graphql`
  query ($tag: String) {
    allMdx(
      filter: { frontmatter: { tags: { in: [$tag] } } }
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

export default Tag;
