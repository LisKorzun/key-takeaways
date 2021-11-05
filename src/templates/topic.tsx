import React, { FC } from 'react';
import { take } from 'lodash';
import { Link, graphql } from 'gatsby';

import { Title } from '../components/Title';
import { Layout, PostCard, Seo, SFlexColumnContainer, SHeadLine } from '../components';
import { ARTICLES_LABEL, IPost } from '../common';

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
          <SHeadLine>{`${totalCount} ${ARTICLES_LABEL}`}</SHeadLine>
          <div>
            {take(nodes, 5).map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </SFlexColumnContainer>
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
