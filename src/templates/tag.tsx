import React, { FC } from 'react';
import { take } from 'lodash';
import { Link, graphql } from 'gatsby';

import { Title } from '../components/title';
import { Layout, PostCard, Seo, SFlexColumnContainer, SHeadLine } from '../components';
import { ARTICLES_LABEL, IPost } from '../common';

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
        <SHeadLine>{`${totalCount} ${ARTICLES_LABEL}`}</SHeadLine>
        <SFlexColumnContainer mb="50px">
          {take(nodes, 5).map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </SFlexColumnContainer>
        <Link to="/tags">All tags</Link>
      </div>
    </Layout>
  );
};

export default Tag;

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
