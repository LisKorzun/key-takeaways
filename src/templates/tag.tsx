import React, { FC } from 'react';
import { take } from 'lodash';
import { graphql } from 'gatsby';

import { Layout, PostCard, Seo, Title, HeadLine, SFlexColumnContainer } from '../components';
import { getPostsCount, IPost } from '../common';

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

const Tag: FC<Props> = ({ pageContext, data }) => {
  const { tag } = pageContext;
  const { nodes, totalCount } = data.allMdx;

  return (
    <Layout>
      <Seo title={`Tag ${tag}`} />
      <div>
        <Title caption="Tag" title={tag} />
        <HeadLine heading={getPostsCount(totalCount)} link="/tags" label="Back to all tags" />
        <SFlexColumnContainer mb="50px">
          {take(nodes, 5).map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </SFlexColumnContainer>
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query ($tag: String) {
    allMdx(filter: { frontmatter: { tags: { in: [$tag] } } }, sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        ...postFields
      }
      totalCount
    }
  }
`;

export default Tag;
