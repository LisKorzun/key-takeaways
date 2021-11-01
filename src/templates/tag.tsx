import React, { FC } from 'react';
import { Link, graphql } from 'gatsby';

import Seo from '../components/seo';
import Layout from '../components/layout';
import { Title } from '../components/title';
import { SRowContainer } from '../components/common';
import { ARTICLES_LABEL, IPost } from '../common';
import { PostsList } from '../components';

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
        <Title caption="Tag" title={tag} count={totalCount} />
        <SRowContainer>
          <PostsList posts={nodes} title={ARTICLES_LABEL} />
        </SRowContainer>
        <Link to="/tags">All tags</Link>
      </div>
    </Layout>
  );
};

export default Tag;

export const pageQuery = graphql`
  query ($tag: String) {
    allMdx(filter: { frontmatter: { tags: { in: [$tag] }  } }, sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        ...postFields
      }
      totalCount
    }
  }
`;
