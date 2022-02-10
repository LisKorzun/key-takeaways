import React, { FC } from 'react';
import { graphql } from 'gatsby';

import { groupByLetter, IGroupedField, ILevelData, LABELS, ROUTES } from '../common';
import { Seo, AlphabetList, SPageWrapper, SLetterNav, SPageLayout, LevelsList } from '../components';

interface Props {
  pageContext: {
    levels: IGroupedField[];
    levelsData: ILevelData[];
  };
  data: {
    allMdx: {
      totalCount: number;
      group: IGroupedField[];
    };
  };
}

const Contents: FC<Props> = ({ data, pageContext: { levels, levelsData } }) => {
  const groups = groupByLetter(data.allMdx.group);

  return (
    <>
      <Seo title={LABELS.TAGS} />
      <SPageWrapper>
        <SPageLayout>
          <header>
            <h1>Contents</h1>
            <SLetterNav>
              {groups.map(({ letter }) => (
                <a href={`#letter-${letter}`} key={letter}>
                  {letter}
                </a>
              ))}
            </SLetterNav>
          </header>
          <main>
            <AlphabetList list={data.allMdx.group} total={data.allMdx.totalCount} baseUrl={ROUTES.TAG} />
          </main>
          <aside>
            <LevelsList levels={levels} levelsData={levelsData} />
          </aside>
        </SPageLayout>
      </SPageWrapper>
    </>
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
