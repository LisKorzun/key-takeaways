import React, { FC } from 'react';
import { graphql } from 'gatsby';
import { kebabCase } from 'lodash';

import {
  Layout,
  Seo,
  Banner,
  Icon,
  SFlexRowContainer,
  SFlexColumnContainer,
  STagChipLink,
  STagLetter,
  SCenterSection,
  SChipLink,
  SChips,
} from '../components';
import { groupByLetter, IGroupedField, LABELS, ROUTES, ICONS } from '../common';

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
            <SFlexRowContainer key={letter} mb="50px">
              <STagLetter>{letter}</STagLetter>
              <SChips>
                {tags.map(({ fieldValue, totalCount }) => (
                  <SChipLink key={fieldValue} to={`${ROUTES.TAGS}/${kebabCase(fieldValue)}`}>
                    <Icon name={ICONS.TAG} height="14px" color="secondary" />
                    {fieldValue}
                    <span>{totalCount}</span>
                  </SChipLink>
                ))}
              </SChips>
            </SFlexRowContainer>
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
