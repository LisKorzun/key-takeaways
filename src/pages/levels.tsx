import React, { FC, Fragment } from 'react';
import { graphql } from 'gatsby';
import { find } from 'lodash';

import { IGroupedField, LEVELS_TITLE } from '../common';
import { Layout, Seo, Banner, Level, DarkSection, SFlexRowContainer, LevelsList } from '../components';

interface Props {
  data: {
    allMdx: {
      group: IGroupedField[];
    };
    site: { siteMetadata: { levels: { id: string; title: string }[] } };
  };
}

const LevelsPage: FC<Props> = ({ data }) => {
  const { levels } = data.site.siteMetadata;
  const { group } = data.allMdx;

  return (
    <Layout>
      <Seo title={LEVELS_TITLE} />
      <Banner title={LEVELS_TITLE} icon="levels" />
      <DarkSection>
        <LevelsList levels={group} data={levels}/>
      </DarkSection>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(limit: 2000, sort: { order: DESC, fields: frontmatter___date }) {
      group(field: frontmatter___level) {
        totalCount
        fieldValue
      }
    }
    site {
      siteMetadata {
        levels {
          id
          title
        }
      }
    }
  }
`;

export default LevelsPage;
