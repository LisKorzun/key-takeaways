import React, { FC } from 'react';
import { graphql } from 'gatsby';

import { IGroupedField, LABELS } from '../common';
import { Layout, Seo, LevelsList, SCenterSection } from '../components';

interface Props {
  data: {
    allMdx: {
      group: IGroupedField[];
    };
  };
}

const LevelsPage: FC<Props> = ({ data }) => (
  <Layout>
    <Seo title={LABELS.LEVEL} />
    <SCenterSection background>
      <LevelsList levels={data.allMdx.group} />
    </SCenterSection>
  </Layout>
);

export const query = graphql`
  query {
    allMdx(limit: 2000, sort: { order: DESC, fields: frontmatter___date }) {
      group(field: frontmatter___level) {
        totalCount
        fieldValue
      }
    }
  }
`;

export default LevelsPage;
