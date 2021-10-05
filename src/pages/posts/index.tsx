import React, { FC } from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../../components/layout';
import Seo from '../../components/seo';

type Node = {
  id: string;
  frontmatter: {
    date: string;
    title: string;
  };
  slug: string;
};

interface Props {
  data: {
    allMdx: {
      nodes: Node[];
    };
  };
}

const BlogPage: FC<Props> = ({ data }) => {
  return (
    <Layout>
      <Seo title="Blog" />
      <div>
        {data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <h2>
              <Link to={`/posts/${node.slug}`}>{node.frontmatter.title}</Link>
            </h2>
            <p>Posted: {node.frontmatter.date}</p>
          </article>
        ))}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
        }
        id
        slug
      }
    }
  }
`;

export default BlogPage;
