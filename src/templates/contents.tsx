import React, { FC } from 'react';

import { IGroupedField, LABELS, ROUTES } from '../common';
import { Layout, Seo, AlphabetList, SPageWrapper, SHeading } from '../components';
import { graphql } from 'gatsby';

interface Props {
  pageContext: {
    levels: IGroupedField[];
  };
  data: {
    allMdx: {
      totalCount: number;
      group: IGroupedField[];
    };
  };
}

const Contents: FC<Props> = ({ data }) => (
  <Layout>
    <Seo title={LABELS.TAGS} />
    <SPageWrapper>
      <SHeading>{LABELS.TAGS}</SHeading>
      <AlphabetList list={data.allMdx.group} total={data.allMdx.totalCount} baseUrl={ROUTES.TAG} />
    </SPageWrapper>
  </Layout>
);

export const pageQuery = graphql`
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

export default Contents;
