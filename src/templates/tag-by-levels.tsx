import React, { FC } from 'react';
import { graphql } from 'gatsby';
import { kebabCase } from 'lodash';

import { Layout, PostCard, Seo, Title, HeadLine, ChipsByLevels, SCenterSection } from '../components';
import { getPostsCount, IGroupedField, ILevelData, IPost, LABELS, ROUTES } from '../common';

interface Props {
  pageContext: {
    tag: string;
    level: string;
    levelsData: ILevelData[];
    levels: IGroupedField[];
  };
  data: {
    allMdx: {
      nodes: IPost[];
      totalCount: number;
    };
  };
}

const TagByLevels: FC<Props> = ({
  pageContext: { tag, levelsData, levels, level },
  data: {
    allMdx: { nodes, totalCount },
  },
}) => (
  <Layout>
    <Seo title={`${LABELS.TAG} - ${tag}`} />
    <SCenterSection>
      <Title caption={LABELS.TAG} title={tag} />
      <ChipsByLevels levels={levels} data={levelsData} active={level} baseRoute={`${ROUTES.TAGS}/${kebabCase(tag)}`} />
      <HeadLine heading={getPostsCount(totalCount)} link={ROUTES.TAGS} label={LABELS.BACK_TO_TAGS} />
      <div>
        {nodes.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </SCenterSection>
  </Layout>
);

export const pageQuery = graphql`
  query ($tag: String, $level: String) {
    allMdx(
      filter: { frontmatter: { tags: { in: [$tag] }, level: { eq: $level } } }
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

export default TagByLevels;
