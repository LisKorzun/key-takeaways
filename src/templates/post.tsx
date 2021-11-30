import React, { FC } from 'react';
import { graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import { Layout, SCenterSection, Seo, SFullSection } from '../components';
import { SH1, SH2, SH3, SH4, SH5, SH6 } from '../components/mdx-ui';
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

const components = {
  // h1: SH1,
  // h2: SH2,
  // h3: SH3,
  // h4: SH4,
  // h5: SH5,
  // h6: SH6,
};

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
      <SCenterSection>
        <MDXProvider components={components}>
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </MDXProvider>
      </SCenterSection>
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
