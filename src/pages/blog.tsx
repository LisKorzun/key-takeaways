import React, { FC } from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import Layout from '../components/layout';
import Seo from '../components/seo';

type Node = {
  id: string;
  frontmatter: {
    date: string;
    title: string;
  };
  body: string;
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
            <h2>{node.frontmatter.title}</h2>
            <p>Posted: {node.frontmatter.date}</p>
            <MDXRenderer>{node.body}</MDXRenderer>
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
        body
      }
    }
  }
`;

export default BlogPage;
