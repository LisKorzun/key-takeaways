import React, { FC } from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import Seo from '../components/seo';
import Layout from '../components/layout';
import { MDXRenderer } from 'gatsby-plugin-mdx';

interface Props {
  pageContext: {
    slug: string;
  };
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

const Post: FC<Props> = ({ data }) => {
  const image = getImage(data.mdx.frontmatter.hero_image);

  return (
    <Layout>
      <Seo title={data.mdx.frontmatter.title} />
      <div>
        <h3>{data.mdx.frontmatter.title}</h3>
        <GatsbyImage image={image} alt="test-img" />
        <p>{data.mdx.frontmatter.date}</p>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </div>
    </Layout>
  );
};

export default Post;

export const pageQuery = graphql`
  query ($slug: String!) {
    mdx(slug: { eq: $slug }) {
      frontmatter {
        title
        date(formatString: "MMM D, YYYY")
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      body
    }
  }
`;
