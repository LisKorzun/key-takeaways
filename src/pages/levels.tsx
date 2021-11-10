import React, { FC } from 'react';
import { graphql } from 'gatsby';

import { IGroupedField, LABELS, ICONS } from '../common';
import { Layout, Seo, Banner, LevelsList, SCenterSection, SFullSection } from '../components';

interface Props {
  data: {
    allMdx: {
      group: IGroupedField[];
    };
  };
}

const LevelsPage: FC<Props> = ({ data }) => (
  <Layout>
    <Seo title={LABELS.LEVELS} />
    <SCenterSection>
      <Banner title={LABELS.LEVELS} icon={ICONS.LEVELS} />
    </SCenterSection>
    <SFullSection>
      <LevelsList levels={data.allMdx.group} />
    </SFullSection>
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
