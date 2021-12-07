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
  padding: 0 20px;
  margin: 0 auto;
  max-width: 1300px;
  @media only screen and ${device.tabletUp} {
    padding: 0 80px;
  }
  @media only screen and ${device.laptopUp} {
    padding: 0 100px;
  }
`;
const SSheetAndSideBar = styled.div`
  display: block;
  padding-top: 0;
  margin: 0 auto;
`;
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
      </SSheetAndSideBar>
    </SPageWrapper>
  </Layout>
);

export default Home;
