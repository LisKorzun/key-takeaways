import React, { FC } from 'react';

import { groupByLetter, IGroupedField, LABELS, ROUTES } from '../common';
import { Layout, Seo, AlphabetList, SPageWrapper, SHeading } from '../components';
import { graphql } from 'gatsby';
import styled from 'styled-components';

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

const SContents = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr auto 1fr;
  grid-template-areas:
    'header header header'
    'main main sidebar'
    'footer footer footer';
  gap: 3rem;
  header {
    grid-area: header;
  }
  main {
    grid-area: main;
  }
  aside {
    grid-area: sidebar;
  }
  footer {
    grid-area: footer;
  }
`;

const SHeaderNav = styled.div`
  background: ${({ theme }) => theme.primaryRGBA};
  border-radius: 8px;
  position: relative;
  display: flex;
  align-items: center;
  padding: 2rem;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  a {
    color: ${({ theme }) => theme.text};
    font-weight: 500;
    font-size: 15px;
    white-space: nowrap;
    padding: 0 1rem;
    line-height: 26px;
  }
`;
const Contents: FC<Props> = ({ data }) => {
  const groups = groupByLetter(data.allMdx.group);
  return (
    <Layout>
      <Seo title={LABELS.TAGS} />
      <SPageWrapper>
        <SContents>
          <header>
            <SHeading>Contents</SHeading>
            <SHeaderNav>
              {groups.map(({ items, letter }) => (
                <a href={`#letter-${letter}`} key={letter}>
                  {letter}
                </a>
              ))}
            </SHeaderNav>
          </header>
          <main>
            <AlphabetList list={data.allMdx.group} total={data.allMdx.totalCount} baseUrl={ROUTES.TAG} />
          </main>
          <aside>featured</aside>
          <footer>footer</footer>
        </SContents>
      </SPageWrapper>
    </Layout>
  );
};

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
