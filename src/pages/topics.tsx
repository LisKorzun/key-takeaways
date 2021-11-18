import React, { FC } from 'react';
import { graphql } from 'gatsby';

import { Layout, Seo, TopicsList } from '../components';
import { IGroupedField, LABELS } from '../common';

interface Props {
  data: {
    allMdx: {
      group: IGroupedField[];
    };
  };
}

const TopicsPage: FC<Props> = ({ data }) => (
  <Layout>
    <Seo title={LABELS.TOPICS} />
    <TopicsList topics={data.allMdx.group} />
  </Layout>
);

export const query = graphql`
  query {
    allMdx {
      group(field: frontmatter___topic) {
        fieldValue
        totalCount
      }
    }
  }
`;

export default TopicsPage;
