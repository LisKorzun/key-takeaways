import React, { FC } from 'react';
import { graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import { Layout, Seo, SFullSection, SPageWrapper } from '../components';
import { IPost } from '../common';

interface IFullPost extends IPost {
  body: string;
}

interface Props {
  pageContext: {
    slug: string;
  };
  data: {
    mdx: IFullPost;
  };
}

const components = {};

const Post: FC<Props> = ({ data }) => {
  const image = getImage(data.mdx.frontmatter.hero_image)!;

  return (
    <Layout>
      <Seo title={data.mdx.frontmatter.title} />
      <SFullSection>
        <h1>{data.mdx.frontmatter.title}</h1>
        <GatsbyImage image={image} alt="test-img" />
        <p>{data.mdx.frontmatter.date}</p>
      </SFullSection>
      <SPageWrapper>
        <MDXProvider components={components}>
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </MDXProvider>
      </SPageWrapper>
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
