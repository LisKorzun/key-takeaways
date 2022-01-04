import React, { FC } from 'react';
import { graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import { Layout, Seo, SPageWrapper } from '../components';
import { IPost } from '../common';
import styled from 'styled-components';
import { device } from '../styles';
import { PostTags } from '../components/PostTags';

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

const SBlogImg = styled((props) => <GatsbyImage {...props} />)`
  height: auto;
  min-height: 550px;
  max-height: 550px;
  width: 100%;
  object-fit: cover;
  margin-bottom: -550px;
  z-index: -1;
  position: relative;
  &:after {
    position: absolute;
    content: '';
    display: block;
    width: 100%;
    background: rgba(0, 0, 0, 0.2);
    min-height: 100%;
  }
  @media only screen and ${device.mUp} {
    margin-left: 80px;
  }
  @media only screen and ${device.lUp} {
    margin-left: 100px;
  }
`;

const PostHeader = styled.div`
  padding: 100px 20px 50px;
  min-height: 550px;
  max-height: 550px;
  display: grid;
  justify-content: start;
  align-items: end;
  grid-template-rows: 1fr auto;
  margin-bottom: 50px;
  gap: 50px;
  h1 {
    color: white;
    align-self: end;
    margin: 0;
  }
  @media only screen and ${device.mUp} {
    margin-left: 80px;
    padding: 100px 60px 60px;
  }
  @media only screen and ${device.lUp} {
    margin-left: 100px;
  }
  @media only screen and ${device.xlUp} {
    padding: 100px 5vw 5vw;
  }
`;

const Post: FC<Props> = ({ data }) => {
  const image = getImage(data.mdx.frontmatter.hero_image)!;

  return (
    <Layout>
      <Seo title={data.mdx.frontmatter.title} />
      <SBlogImg image={image} alt="test-img" />
      <PostHeader>
        <PostTags tags={data.mdx.frontmatter.tags} size="medium"/>
        <h1>{data.mdx.frontmatter.title}</h1>
      </PostHeader>
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
      ...postFields
      body
    }
  }
`;
