import React, { FC } from 'react';
import { graphql, Link } from 'gatsby';
import { kebabCase, find } from 'lodash';
import { ImageDataLike } from 'gatsby-plugin-image';

import Layout from '../components/layout';
import Seo from '../components/seo';
import styled from 'styled-components';
import { Card } from '../components/card';

const SContainer = styled.div`
  display: flex;
  margin: 30px 0;
`;

const SCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 30px;
  width: 60%;
  border-right: 1px solid #eee;
`;

const STopicContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
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

const STitleContainer = styled.div`
  display: flex;
  align-items: flex-start;
  border-bottom: ${(props) => `3px solid ${props.theme.accent}`};
  padding-bottom: 10px;
  padding-right: 30px;
  margin-bottom: 10px;
`;

const STitle = styled((props) => <Link {...props} />)`
  display: flex;
  align-items: flex-start;
  color: ${(props) => props.theme.secondary};
  font-size: 40px;
  text-transform: capitalize;
  cursor: pointer;
  -moz-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
  & span {
    font-size: 10px;
    font-weight: 600;
    text-transform: uppercase;
    padding: 4px;
    margin-left: 15px;
    border: ${(props) => `1px solid ${props.theme.secondary}`};
    border-radius: 3px;
  }
  &:hover,
  &:hover span {
    color: ${(props) => props.theme.accent};
    border-color: ${(props) => props.theme.accent};
  }
`;

const SCardsHeader = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  color: ${(props) => props.theme.secondary};
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
        group: { fieldValue: string }[];
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
                    <STitleContainer>
                      <STitle to={`/${kebabCase(level.title)}`}>
                        {level.title}
                        <span>{`${difficulty.totalCount} Article`}</span>
                      </STitle>
                    </STitleContainer>
                    <SContainer>
                      <SCardsContainer>
                        <>
                          <SCardsHeader>Recent Stories</SCardsHeader>
                          {difficulty.nodes.map((post) => (
                            <Card key={post.id} post={post} />
                          ))}
                        </>
                      </SCardsContainer>
                      <STopicContainer>
                        <>
                          <SCardsHeader>Read by topics</SCardsHeader>
                          {difficulty.group.map((topic) => (
                            <div key={topic.fieldValue}>{topic.fieldValue}</div>
                          ))}
                        </>
                      </STopicContainer>
                    </SContainer>
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
        group(field: frontmatter___topic, limit: 5) {
          fieldValue
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
