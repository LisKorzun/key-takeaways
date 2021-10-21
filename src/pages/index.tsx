import React, { FC } from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../components/layout';
import Seo from '../components/seo';
import { kebabCase } from 'lodash';
import styled from 'styled-components';

const Themes = styled.div`
  display: flex;
`;

const Theme = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 60px;
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
        group: { totalCount: number; fieldValue: string; nodes: { slug: string; frontmatter: { title: string } }[] }[];
      }[];
    };
  };
}
const HomePage: FC<Props> = ({ data }) => (
  <Layout>
    <Seo title="Home" />
    <div>
      {data.allMdx.group.map((category) => (
        <article key={category.fieldValue}>
          <p>
            <Link to={`/${kebabCase(category.fieldValue)}/`}>
              {`${category.fieldValue} (${category.totalCount} articles)`}
            </Link>
            <hr />
            <Themes>
              {category.group.map((theme) => (
                <Theme key={theme.fieldValue}>
                  <h4>{theme.fieldValue}</h4>
                  {theme.nodes.map((post) => (
                    <StyledLink key={post.slug}>
                      <Link to={`/${post.slug}`}>{post.frontmatter.title}</Link>
                    </StyledLink>
                  ))}
                  <StyledLink>{`See All ${theme.totalCount}`}</StyledLink>
                </Theme>
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
    allMdx {
      group(field: frontmatter___category) {
        totalCount
        group(field: frontmatter___theme) {
          totalCount
          nodes {
            slug
            frontmatter {
              title
            }
          }
          fieldValue
        }
        fieldValue
      }
    }
  }
`;

export default HomePage;
