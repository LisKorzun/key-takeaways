import React, { FC } from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { MDXProvider } from '@mdx-js/react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import isEmpty from 'lodash/isEmpty';

import { Seo, PostTags, PostInfo, PostLevelLabel, PostToC, PostRelated, SPostLayout } from '../components';
import { IPost, IHeading } from '../common';
import { device } from '../styles';

interface IFullPost extends IPost {
  body: string;
  tableOfContents: { items: IHeading[] };
  relatedPosts: IPost[];
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

const SPostHeaderImage = styled((props) => <GatsbyImage {...props} />)`
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

const SPostHeader = styled.div`
  padding: 100px 20px 30px;
  min-height: 550px;
  max-height: 550px;
  display: grid;
  justify-content: start;
  align-items: end;
  grid-template-rows: 1fr auto minmax(40px, auto);
  margin-bottom: 50px;
  gap: 50px;
  h1 {
    color: white;
    align-self: end;
    margin: 0;
  }
  .post-summary {
    display: grid;
    grid-template-columns: auto auto auto;
    align-items: center;
    justify-content: start;
    gap: 20px;
    color: white;
  }
  @media only screen and ${device.mUp} {
    margin-left: 80px;
    padding: 100px 60px 30px;
  }
  @media only screen and ${device.lUp} {
    margin-left: 100px;
  }
  @media only screen and ${device.xlUp} {
    padding: 100px 5vw 30px;
  }
`;

const Post: FC<Props> = ({ data }) => {
  const image = getImage(data.mdx.frontmatter.hero_image)!;

  return (
    <>
      <Seo title={data.mdx.frontmatter.title} />
      <SPostHeaderImage image={image} alt="test-img" />
      <SPostHeader>
        <PostTags tags={data.mdx.frontmatter.tags} size="medium" />
        <h1>{data.mdx.frontmatter.title}</h1>
        <div className="post-summary">
          <PostLevelLabel level={data.mdx.frontmatter.level} />
          <PostInfo icon="time" label={`${data.mdx.timeToRead} min read`} />
          <PostInfo icon="date" label={data.mdx.frontmatter.date} />
        </div>
      </SPostHeader>
      <SPostLayout>
        <article>
          <MDXProvider components={components}>
            <MDXRenderer>{data.mdx.body}</MDXRenderer>
          </MDXProvider>
          <PostRelated posts={data.mdx.relatedPosts} />
        </article>
        {!isEmpty(data.mdx.tableOfContents.items) ? (
          <aside>
            <PostToC items={data.mdx.tableOfContents.items} />
          </aside>
        ) : null}
      </SPostLayout>
    </>
  );
};

export default Post;

export const pageQuery = graphql`
  query ($slug: String!) {
    mdx(slug: { eq: $slug }) {
      ...postFields
      body
      tableOfContents
      relatedPosts {
        ...postFields
      }
    }
  }
`;
