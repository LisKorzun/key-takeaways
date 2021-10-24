import React, { FC } from 'react';
import { graphql, Link } from 'gatsby';
import { kebabCase, find } from 'lodash';
import { ImageDataLike } from 'gatsby-plugin-image';

import Layout from '../components/layout';
import Seo from '../components/seo';
import styled from 'styled-components';
import { Card } from '../components/card';

const SCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px 0;
`;

const STitleCaption = styled.div`
  text-transform: uppercase;
  letter-spacing: 2px;
  color: ${(props) => props.theme.primary};
  font-weight: bold;
  font-size: 10px;
  margin-bottom: 10px;
  margin-top: 70px;
`;

const STitle = styled((props) => <Link {...props} />)`
  color: ${(props) => props.theme.secondary};
  font-size: 40px;
  text-transform: capitalize;
  display: flex;
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: ${(props) => `3px solid ${props.theme.accent}`};
`;

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
            <>
              {level && (
                <div key={difficulty.fieldValue}>
                  <>
                    <STitleCaption>Difficulty</STitleCaption>
                    <STitle to={`/${kebabCase(level.title)}`}>{`${level.title}`}</STitle>
                    <SCardsContainer>
                      {difficulty.nodes.map((post) => (
                        <Card key={post.id} post={post} />
                      ))}
                    </SCardsContainer>
                  </>
                </div>
              )}
            </>
          );
        })}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(limit: 5, sort: { order: DESC, fields: frontmatter___date }) {
      group(field: frontmatter___difficulty) {
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
