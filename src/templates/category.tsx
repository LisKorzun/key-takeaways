import React, { FC } from 'react';
import { Link, graphql } from 'gatsby';

import Seo from '../components/seo';
import Layout from '../components/layout';

interface Props {
  pageContext: {
    category: string;
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

const Category: FC<Props> = ({ pageContext, data }) => {
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

export default Category;

export const pageQuery = graphql`
  query ($category: String) {
    allMdx(
      filter: { frontmatter: { category: { eq: $category } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      totalCount
      group(field: frontmatter___theme) {
        fieldValue
        totalCount
        nodes {
          slug
          frontmatter {
            title
            date(formatString: "MMM D, YYYY")
          }
        }
      }
    }
  }
`;
