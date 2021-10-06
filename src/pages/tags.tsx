import React, { FC } from 'react';
import { Link, graphql } from 'gatsby';
import { kebabCase } from 'lodash';

import Layout from '../components/layout';
import Seo from '../components/seo';

interface Props {
  data: {
    allMdx: {
      group: { fieldValue: string; totalCount: number }[];
    };
  };
}

const TagsPage: FC<Props> = ({ data }) => {
  return (
    <Layout>
      <Seo title="Tags" />
      <div>
        {data.allMdx.group.map((tag) => (
          <article key={tag.fieldValue}>
            <p>
              <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                {tag.fieldValue} ({tag.totalCount})
              </Link>
            </p>
          </article>
        ))}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;

export default TagsPage;
