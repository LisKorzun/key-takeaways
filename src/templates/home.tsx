import React, { FC } from 'react';

import { ICONS, IGroupedField, IPost, LABELS } from '../common';
import { Layout, Seo, Banner, PostsList, SPageWrapper, SCenterSection, SHeading } from '../components';
import { graphql } from 'gatsby';

interface Props {
  pageContext: {
    levels: IGroupedField[];
  };
  data: {
    allMdx: {
      nodes: IPost[];
    };
  };
}

const Home: FC<Props> = ({
  data: {
    allMdx: { nodes },
  },
}) => (
  <Layout>
    <Seo title={LABELS.HOME} />
    <SCenterSection>
      <Banner title={LABELS.TITLE} icon={ICONS.CODE} />
    </SCenterSection>
    <SPageWrapper>
      <SHeading>{LABELS.RECENT}</SHeading>
      <PostsList posts={nodes} />
    </SPageWrapper>
  </Layout>
);

export const pageQuery = graphql`
  query {
    allMdx(limit: 12, sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
       ...postFields
      }
  }
  }
`;

export default Home;
