import React, { FC } from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import Layout from '../../components/layout';
import Seo from '../../components/seo';

interface Props {
  data: {
    mdx: {
      body: string;
      frontmatter: {
        date: string;
        title: string;
      };
    };
  };
}

const BlogPost: FC<Props> = ({ data }) => {
  return (
    <Layout>
      <Seo title={data.mdx.frontmatter.title} />
      <div>
        <h3>{data.mdx.frontmatter.title}</h3>
        <p>{data.mdx.frontmatter.date}</p>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMM D, YYYY")
      }
      body
    }
  }
`;

export default BlogPost;
