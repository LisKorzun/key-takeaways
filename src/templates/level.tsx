import React, { FC } from 'react';
import { graphql, Link } from 'gatsby';

import Seo from '../components/seo';
import Layout from '../components/layout';
import { find } from 'lodash';
import { Title } from '../components/title';
import { SPostsContainer, STitleOfList, SRowContainer, STopicContainer, STopic } from '../components/common';
import { Card } from '../components/card';
import { ImageDataLike } from 'gatsby-plugin-image';

interface Props {
  pageContext: {
    difficulty: string;
  };
  data: {
    allMdx: {
      totalCount: number;
      nodes: {
        slug: string;
        id: string;
        frontmatter: { title: string; date: string; topic: string; tags: string[]; hero_image: ImageDataLike };
      }[];
      group: {
        fieldValue: string;
        totalCount: number;
      }[];
    };
    site: { siteMetadata: { levels: { id: string; title: string }[] } };
  };
}

const Level: FC<Props> = ({ pageContext, data }) => {
  const { difficulty } = pageContext;
  const { totalCount, group, nodes } = data.allMdx;
  const { levels } = data.site.siteMetadata;
  const level = find(levels, ['id', difficulty]) || { title: '' };

  return (
    <Layout>
      <Seo title={level.title} />
      <div>
        <Title caption="Competency Level" title={level.title || ''} count={totalCount} />
        <SRowContainer>
          <SPostsContainer>
            <>
              <STitleOfList>Articles</STitleOfList>
              {nodes.map((post) => (
                <Card key={post.id} post={post} />
              ))}
            </>
          </SPostsContainer>
          <STopicContainer>
            <>
              <STitleOfList>Topics</STitleOfList>
              {group.map((topic) => (
                <STopic key={topic.fieldValue}>
                  <a>
                    {topic.fieldValue}
                    <span>{topic.totalCount}</span>
                  </a>
                </STopic>
              ))}
            </>
          </STopicContainer>
        </SRowContainer>
        <Link to="/levels">All Competency Levels</Link>
      </div>
    </Layout>
  );
};

export default Level;

export const pageQuery = graphql`
  query ($difficulty: String) {
    allMdx(
      filter: { frontmatter: { difficulty: { eq: $difficulty } } }
      sort: { fields: frontmatter___date, order: DESC }
      limit: 1000
    ) {
      totalCount
      group(field: frontmatter___topic) {
        fieldValue
        totalCount
      }
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
    }
    site {
      siteMetadata {
        levels {
          id
          title
        }
      }
    }
  }
`;
