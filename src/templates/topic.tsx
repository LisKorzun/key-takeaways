import React, { FC } from 'react';
import { Link, graphql } from 'gatsby';

import { Title } from '../components/title';
import { Layout, Seo, SRowContainer } from '../components';
import { ARTICLES_LABEL, IPost } from '../common';
import { PostsList } from '../components';

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
        <Title caption="Topic" title={topic} count={totalCount} />
        <SRowContainer>
          <PostsList posts={nodes} title={ARTICLES_LABEL} />
        </SRowContainer>
        <Link to="/topics">All topics</Link>
      </div>
    </Layout>
  );
};

export default Topic;

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
