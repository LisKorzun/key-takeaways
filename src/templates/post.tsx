import React, { FC } from 'react';
import { graphql, Link } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import { Layout, Seo } from '../components';
import { IPost } from '../common';
import styled from 'styled-components';
import { device } from '../styles';
import { PostTags } from '../components/PostTags';
import { PostInfo } from '../components/PostInfo';

interface IFullPost extends IPost {
  body: string;
  tableOfContents: { items: IHeading[] };
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

interface IHeading {
  url: string;
  title: string;
}
interface IToc {
  items: IHeading[];
}
const ToC: FC<IToc> = ({ items = [] }) => (
  <>
    <h6>Table of Contents</h6>
    <ul>
      {items.map((item) => (
        <li key={item.url}>
          <Link to={item.url}>{item.title}</Link>
        </li>
      ))}
    </ul>
  </>
);

const Layt = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-self: center;
  margin: 0 auto;
  max-width: 1300px;
  width: 100%;
  padding: 0 2rem;
  aside {
    max-width: min(300px, 100%);
    margin-left: 5rem;
    position: sticky;
    top: 3rem;
    align-self: flex-start;
    display: none;
    @media only screen and ${device.xlUp} {
      display: block;
    }
  }
  article {
    flex: 1 1 600px;
    max-width: min(600px, 100%);
    @media only screen and ${device.lUp} {
      flex: 1 1 900px;
      max-width: min(900px, 100%);
    }
  }
`;

const Post: FC<Props> = ({ data }) => {
  const image = getImage(data.mdx.frontmatter.hero_image)!;

  return (
    <Layout>
      <Seo title={data.mdx.frontmatter.title} />
      <SBlogImg image={image} alt="test-img" />
      <PostHeader>
        <PostTags tags={data.mdx.frontmatter.tags} size="medium" />
        <h1>{data.mdx.frontmatter.title}</h1>
      </PostHeader>
      <Layt>
        <article>
          <PostInfo icon="time" label={`${data.mdx.timeToRead} min read`} />
          <PostInfo icon="date" label={data.mdx.frontmatter.date} />
          <MDXProvider components={components}>
            <MDXRenderer>{data.mdx.body}</MDXRenderer>
          </MDXProvider>
        </article>
        <aside>
          <ToC items={data.mdx.tableOfContents.items} />
        </aside>
      </Layt>
    </Layout>
  );
};

export default Post;

export const pageQuery = graphql`
  query ($slug: String!) {
    mdx(slug: { eq: $slug }) {
      ...postFields
      body
      tableOfContents
    }
  }
`;
