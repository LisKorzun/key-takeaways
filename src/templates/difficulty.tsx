import React, { FC } from 'react';
import { Link, graphql } from 'gatsby';

import Seo from '../components/seo';
import Layout from '../components/layout';

interface Props {
  pageContext: {
    difficulty: string;
  };
  data: {
    allMdx: {
      totalCount: number;
      nodes: { slug: string; frontmatter: { date: string; title: string } }[];
      group: {
        fieldValue: string;
        totalCount: number;
      }[];
    };
  };
}

const Difficulty: FC<Props> = ({ pageContext, data }) => {
  const { difficulty } = pageContext;
  const { totalCount, group, nodes } = data.allMdx;

  return (
    <Layout>
      <Seo title="Difficulty" />
      <div>
        <h1>{`${difficulty} - ${totalCount} articles`}</h1>
        {group.map((theme) => (
          <div key={theme.fieldValue}>{theme.fieldValue}</div>
        ))}
        <hr />
        {nodes.map(({ slug, frontmatter: { title } }) => {
          return (
            <li key={slug}>
              <Link to={`/${slug}`}>{title}</Link>
            </li>
          );
        })}
      </div>
    </Layout>
  );
};

export default Difficulty;

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
          topic
          date(formatString: "DD MMM YYYY")
        }
      }
    }
  }
`;
