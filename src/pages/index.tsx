import React, { FC } from 'react';
import { graphql, Link } from 'gatsby';
import { kebabCase, find } from 'lodash';

import Layout from '../components/layout';
import Seo from '../components/seo';
import styled from 'styled-components';

const Themes = styled.div`
  display: flex;
`;

const StyledLink = styled.li`
  margin: 0 0 20px 0;
  padding: 0;
  list-style: none;
  font-size: 18px;
`;

interface Props {
  data: {
    allMdx: {
      group: {
        fieldValue: string;
        totalCount: number;
        nodes: { slug: string; frontmatter: { title: string } }[];
      }[];
    };
  };
}
const HomePage: FC<Props> = ({ data }) => (
  <Layout>
    <Seo title="Home" />
    <div>
      {data.allMdx.group.map((difficulty) => (
        <article key={difficulty.fieldValue}>
          <p>
            <Link to={`/${kebabCase(find(data.site.siteMetadata.levels, ['id', difficulty.fieldValue]).title)}/`}>
              {`${difficulty.fieldValue} (${difficulty.totalCount} articles)`}
            </Link>
            <hr />
            <Themes>
              {difficulty.nodes.map((post) => (
                <StyledLink key={post.slug}>
                  <Link to={`/${post.slug}`}>{post.frontmatter.title}</Link>
                </StyledLink>
              ))}
            </Themes>
          </p>
        </article>
      ))}
    </div>
  </Layout>
);

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
            date(formatString: "DD MMM YYYY")
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
