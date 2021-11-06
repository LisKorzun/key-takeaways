import React, { FC } from 'react';
import { graphql } from 'gatsby';

import { Layout, PostCard, Seo, Title, HeadLine, SFlexColumnContainer } from '../components';
import { getPostsCount, IPost, LABELS, ROUTES } from '../common';

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

const Topic: FC<Props> = ({
  pageContext: { topic },
  data: {
    allMdx: { nodes, totalCount },
  },
}) => (
  <Layout>
    <Seo title={`${LABELS.TOPIC} - ${topic}`} />
    <Title caption={LABELS.TOPIC} title={topic} />
    <SFlexColumnContainer mb="50px">
      <HeadLine heading={getPostsCount(totalCount)} link={ROUTES.TOPICS} label={LABELS.BACK_TO_TOPICS} />
      <div>
        {nodes.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </SFlexColumnContainer>
  </Layout>
);

export const pageQuery = graphql`
  query ($topic: String) {
    allMdx(
      filter: { frontmatter: { topic: { eq: $topic } } }
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

export default Topic;
