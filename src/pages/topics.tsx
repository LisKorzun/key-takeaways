import React, { FC } from 'react';
import { graphql } from 'gatsby';

import { AlphabetList, Layout, SCenterSection, Seo, SHeading } from '../components';
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
    <SCenterSection small>
      <SHeading>{LABELS.TOPICS}</SHeading>
      <AlphabetList list={data.allMdx.group} total={data.allMdx.totalCount} baseUrl={ROUTES.TOPICS} />
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
