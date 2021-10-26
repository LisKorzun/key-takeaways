import React, { FC } from 'react';
import { Link, graphql } from 'gatsby';
import { ImageDataLike } from 'gatsby-plugin-image';

import Seo from '../components/seo';
import Layout from '../components/layout';
import { Title } from '../components/title';
import { SPostsContainer, STitleOfList, SRowContainer } from '../components/common';
import { Card } from '../components/card';

interface Props {
  pageContext: {
    topic: string;
  };
  data: {
    allMdx: {
      nodes: {
        slug: string;
        id: string;
        frontmatter: { title: string; date: string; topic: string; tags: string[]; hero_image: ImageDataLike };
      }[];
      totalCount: number;
    };
  };
}

const Topic: FC<Props> = ({ pageContext, data }) => {
  const { topic } = pageContext;
  const { nodes, totalCount } = data.allMdx;

  return (
    <Layout>
      <Seo title={`Topic ${topic}`} />
      <div>
        <Title caption="Topic" title={topic} count={totalCount} />
        <SRowContainer>
          <SPostsContainer>
            <>
              <STitleOfList>Articles</STitleOfList>
              {nodes.map((post) => (
                <Card key={post.id} post={post} />
              ))}
            </>
          </SPostsContainer>
        </SRowContainer>
        <Link to="/topics">All topics</Link>
      </div>
    </Layout>
  );
};

export default Topic;

export const pageQuery = graphql`
  query ($topic: String) {
    allMdx(filter: { frontmatter: { topic: { eq: $topic } } }, sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          title
          tags
          topic
          date(formatString: "MMMM DD, YYYY")
          hero_image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        id
        slug
      }
      totalCount
    }
  }
`;
