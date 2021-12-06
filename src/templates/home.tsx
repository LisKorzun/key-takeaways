import React, { FC } from 'react';
import { take } from 'lodash';

import { ICONS, IGroupedField, IPost, LABELS } from '../common';
import { Layout, Seo, Banner, PostsList, SCenterSection, SHeading } from '../components';
import styled from 'styled-components';
import { device } from '../styles';

interface Props {
  pageContext: {
    levels: IGroupedField[];
    posts: IPost[];
    topics: IGroupedField[];
  };
}

const SPageWrapper = styled.div`
  padding: 0 100px;
  margin: 0 auto;
  max-width: 1600px;
`;
const SSheetAndSideBar = styled.div`
  display: block;
  padding-top: 0;
  margin: 0 auto;
  @media only screen and ${device.tabletUp} {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 300px;
    gap: 30px;
  }
`;
const SSideBar = styled.div``;
const SSheet = styled.div`
  position: relative;
  z-index: 1;
  align-self: start;
`;

const Home: FC<Props> = ({ pageContext: { posts } }) => (
  <Layout>
    <Seo title={LABELS.HOME} />
    <SCenterSection>
      <Banner title={LABELS.TITLE} icon={ICONS.CODE} />
    </SCenterSection>
    <SPageWrapper>
      <SSheetAndSideBar>
        <SSheet>
          <SHeading>{LABELS.RECENT}</SHeading>
          <PostsList posts={take(posts, 13)} />
        </SSheet>
        <SSideBar>SideBar</SSideBar>
      </SSheetAndSideBar>
    </SPageWrapper>
  </Layout>
);

export default Home;
