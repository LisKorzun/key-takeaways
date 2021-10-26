import React, { FC, Fragment } from 'react';
import { graphql, Link } from 'gatsby';
import { kebabCase, find } from 'lodash';
import { ImageDataLike } from 'gatsby-plugin-image';

import Layout from '../components/layout';
import Seo from '../components/seo';
import { Card } from '../components/card';
import { Title } from '../components/title';
import { SRowContainer, SPostsContainer, STopicContainer, STitleOfList, STopic } from '../components/common';

interface Props {
  data: {
    allMdx: {
      group: {
        fieldValue: string;
        totalCount: number;
        nodes: {
          slug: string;
          id: string;
          frontmatter: { title: string; date: string; topic: string; tags: string[]; hero_image: ImageDataLike };
        }[];
        group: { fieldValue: string; totalCount: number }[];
      }[];
    };
    site: { siteMetadata: { levels: { id: string; title: string }[] } };
  };
}

const HomePage: FC<Props> = ({ data }) => {
  const { levels } = data.site.siteMetadata;

  return (
    <Layout>
      <Seo title="Home" />
      <div>
        {data.allMdx.group.map((difficulty) => {
          const level = find(levels, ['id', difficulty.fieldValue]);
          return (
            <Fragment key={difficulty.fieldValue}>
              {level && (
                <>
                  <Title
                    caption="Competency level"
                    title={level.title}
                    link={`/levels/${kebabCase(level.title)}`}
                    count={difficulty.totalCount}
                  />
                  <SRowContainer>
                    <SPostsContainer>
                      <>
                        <STitleOfList>Recent Articles</STitleOfList>
                        {difficulty.nodes.map((post) => (
                          <Card key={post.id} post={post} />
                        ))}
                      </>
                    </SPostsContainer>
                    <STopicContainer>
                      <>
                        <STitleOfList>Topics</STitleOfList>
                        {difficulty.group.map((topic) => (
                          <STopic key={topic.fieldValue}>
                            <Link to={`/topics/${kebabCase(topic.fieldValue)}`}>
                              {topic.fieldValue}
                              <span>{topic.totalCount}</span>
                            </Link>
                          </STopic>
                        ))}
                      </>
                    </STopicContainer>
                  </SRowContainer>
                </>
              )}
            </Fragment>
          );
        })}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(limit: 5, sort: { order: DESC, fields: frontmatter___date }) {
      group(field: frontmatter___level) {
        totalCount
        fieldValue
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
        group(field: frontmatter___topic, limit: 5) {
          fieldValue
          totalCount
        }
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

export default HomePage;
