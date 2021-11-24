import React, { FC } from 'react';
import { graphql } from 'gatsby';

import { IGroupedField, LABELS } from '../common';
import { Layout, Seo, LevelsList, SCenterSection, SHeading } from '../components';

interface Props {
  data: {
    allMdx: {
      totalCount: number;
      group: IGroupedField[];
    };
  };
}

const LevelsPage: FC<Props> = ({ data }) => (
  <Layout>
    <Seo title={LABELS.LEVEL} />
    <SCenterSection small>
      <SHeading>{LABELS.LEVEL}</SHeading>
      <LevelsList levels={data.allMdx.group} total={data.allMdx.totalCount} />
    </SCenterSection>
  </Layout>
);

export const query = graphql`
  query {
    allMdx(limit: 2000, sort: { fields: frontmatter___date, order: DESC }) {
      totalCount
      group(field: frontmatter___level) {
        totalCount
        fieldValue
      }
    }
  }
`;

export default LevelsPage;
