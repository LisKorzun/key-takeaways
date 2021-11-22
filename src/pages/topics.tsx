import React, { FC } from 'react';
import { graphql } from 'gatsby';
import { kebabCase } from 'lodash';

import { Layout, PercentageRow, SCenterSection, Seo } from '../components';
import { IGroupedField, LABELS, ROUTES } from '../common';

interface Props {
  data: {
    allMdx: {
      totalCount: number;
      group: IGroupedField[];
    };
  };
}

const TopicsPage: FC<Props> = ({ data }) => (
  <Layout>
    <Seo title={LABELS.TOPICS} />
    <SCenterSection>
      {data.allMdx.group.map(({ fieldValue, totalCount }) => (
        <PercentageRow
          key={fieldValue}
          label={fieldValue}
          to={`${ROUTES.TOPICS}/${kebabCase(fieldValue)}`}
          count={totalCount}
          total={data.allMdx.totalCount}
        />
      ))}
    </SCenterSection>
  </Layout>
);

export const query = graphql`
  query {
    allMdx(limit: 2000, sort: { fields: frontmatter___date, order: DESC }) {
      totalCount
      group(field: frontmatter___topic) {
        fieldValue
        totalCount
      }
    }
  }
`;

export default TopicsPage;
