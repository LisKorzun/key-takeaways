import React, { FC } from 'react';
import { take } from 'lodash';
import { graphql } from 'gatsby';

import { Layout, PostCard, Seo, Title, HeadLine, SFlexColumnContainer } from '../components';
import { getPostsCount, IPost } from '../common';

interface Props {
  pageContext: {
    topic: string;
  };
  data: {
    allMdx: {
      nodes: IPost[];
      totalCount: number;
    };
  };
}

const Topic: FC<Props> = ({ pageContext, data }) => {
  const { topic } = pageContext;
  const { nodes, totalCount } = data.allMdx;

  return (
    <Layout>
      <Seo title={`Topic ${topic}`} />
      <div>
        <Title caption="Topic" title={topic} />
        <SFlexColumnContainer mb="50px">
          <HeadLine heading={getPostsCount(totalCount)} link="/topics" label="Back to all topics" />
          <div>
            {take(nodes, 5).map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </SFlexColumnContainer>
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query ($topic: String) {
    allMdx(filter: { frontmatter: { topic: { eq: $topic } } }, sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        ...postFields
      }
      totalCount
    }
  }
`;

export default Topic;
