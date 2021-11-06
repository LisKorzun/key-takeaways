import React, { FC } from 'react';
import { graphql } from 'gatsby';

import { Layout, PostCard, Seo, Title, HeadLine, SFlexColumnContainer } from '../components';
import { getPostsCount, IPost, LABELS, ROUTES } from '../common';

interface Props {
  pageContext: {
    tag: string;
  };
  data: {
    allMdx: {
      nodes: IPost[];
      totalCount: number;
    };
  };
}

const Tag: FC<Props> = ({
  pageContext: { tag },
  data: {
    allMdx: { nodes, totalCount },
  },
}) => (
  <Layout>
    <Seo title={`${LABELS.TAG} - ${tag}`} />
    <Title caption={LABELS.TAG} title={tag} />
    <HeadLine heading={getPostsCount(totalCount)} link={ROUTES.TAGS} label={LABELS.BACK_TO_TAGS} />
    <SFlexColumnContainer mb="50px">
      {nodes.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </SFlexColumnContainer>
  </Layout>
);

export const pageQuery = graphql`
  query ($tag: String) {
    allMdx(
      filter: { frontmatter: { tags: { in: [$tag] } } }
      sort: { fields: frontmatter___date, order: DESC }
      limit: 2000
    ) {
      nodes {
        ...postFields
      }
      totalCount
    }
  }
`;

export default Tag;
