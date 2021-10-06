import React, { FC } from 'react';
import { Link, graphql } from 'gatsby';

import Seo from '../components/seo';
import Layout from '../components/layout';

interface Props {
  pageContext: {
    tag: string;
  };
  data: {
    allMdx: {
      nodes: { slug: string; frontmatter: { date: string; title: string } }[];
      totalCount: number;
    };
  };
}

const Tags: FC<Props> = ({ pageContext, data }) => {
  const { tag } = pageContext;
  const { nodes, totalCount } = data.allMdx;
  const tagHeader = `${totalCount} post${totalCount === 1 ? '' : 's'} tagged with "${tag}"`;

  return (
    <Layout>
      <Seo title="Tags" />
      <div>
        <h1>{tagHeader}</h1>
        <ul>
          {nodes.map(({ slug, frontmatter: { title } }) => {
            return (
              <li key={slug}>
                <Link to={`/posts/${slug}`}>{title}</Link>
              </li>
            );
          })}
        </ul>
        <Link to="/tags">All tags</Link>
      </div>
    </Layout>
  );
};

export default Tags;

export const pageQuery = graphql`
  query ($tag: String) {
    allMdx(filter: { frontmatter: { tags: { eq: $tag } } }, sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        slug
        frontmatter {
          title
          date(formatString: "MMM D, YYYY")
        }
      }
      totalCount
    }
  }
`;
