import React, { FC } from 'react';
import { graphql } from 'gatsby';
import { kebabCase } from 'lodash';
import styled from 'styled-components';

import { Layout, Seo, SBigChar, SCenterSection, SChipLink, SChips } from '../components';
import { groupByLetter, IGroupedField, LABELS, ROUTES } from '../common';

const STagLine = styled.div`
  display: flex;
  margin-bottom: 5rem;
`;

interface Props {
  data: {
    allMdx: {
      group: IGroupedField[];
    };
  };
}

const TagsPage: FC<Props> = ({ data }) => {
  const groups = groupByLetter(data.allMdx.group);

  return (
    <Layout>
      <Seo title={LABELS.TAGS} />
      <SCenterSection background>
        <div>
          {groups.map(({ tags, letter }) => (
            <STagLine key={letter}>
              <SBigChar>{letter}</SBigChar>
              <SChips>
                {tags.map(({ fieldValue, totalCount }) => (
                  <SChipLink key={fieldValue} to={`${ROUTES.TAGS}/${kebabCase(fieldValue)}`}>
                    {fieldValue}
                    <span>{totalCount}</span>
                  </SChipLink>
                ))}
              </SChips>
            </STagLine>
          ))}
        </div>
      </SCenterSection>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;

export default TagsPage;
