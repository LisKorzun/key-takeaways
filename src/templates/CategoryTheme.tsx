import React, { FC } from 'react';
import { Link, graphql } from 'gatsby';

import Seo from '../components/seo';
import Layout from '../components/layout';

interface Props {
  pageContext: {
    category: string;
    theme: string;
  };
  data: {
    allMdx: {
      totalCount: number;
      group: {
        fieldValue: string;
        totalCount: number;
        nodes: { slug: string; frontmatter: { date: string; title: string } }[];
      }[];
    };
  };
}

const CategoryTheme: FC<Props> = ({ pageContext, data }) => {
  const { category } = pageContext;
  const { totalCount, group } = data.allMdx;

  return (
    <Layout>
      <Seo title="Category" />
      <div>
        <h1>{`${category} - ${totalCount} articles`}</h1>
        {group.map((theme) => (
          <div key={theme.fieldValue}>
            {theme.fieldValue}
            <hr />
            {theme.nodes.map(({ slug, frontmatter: { title } }) => {
              return (
                <li key={slug}>
                  <Link to={`/${slug}`}>{title}</Link>
                </li>
              );
            })}
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default CategoryTheme;

export const pageQuery = graphql`
  query ($category: String, $theme: String) {
    allMdx(
      filter: { frontmatter: { category: { eq: $category }, theme: { eq: $theme } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      totalCount
      nodes {
        slug
        frontmatter {
          title
        }
      }
    }
  }
`;
