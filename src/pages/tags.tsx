import React, { FC } from 'react';
import { graphql } from 'gatsby';

import { Layout, Seo, SCenterSection, SHeading, AlphabetList } from '../components';
import { IGroupedField, LABELS, ROUTES } from '../common';

interface Props {
  data: {
    allMdx: {
      totalCount: number;
      group: IGroupedField[];
    };
  };
}

const TagsPage: FC<Props> = ({ data }) => (
  <Layout>
    <Seo title={LABELS.TAGS} />
    <SCenterSection small>
      <SHeading>{LABELS.TAGS}</SHeading>
      <AlphabetList list={data.allMdx.group} total={data.allMdx.totalCount} baseUrl={ROUTES.TAG} />
    </SCenterSection>
  </Layout>
);

export const query = graphql`
  query {
    allMdx(limit: 2000, sort: { fields: frontmatter___date, order: DESC }) {
      totalCount
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;

export default TagsPage;
