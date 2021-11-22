import React, { FC } from 'react';
import { graphql } from 'gatsby';
import { kebabCase } from 'lodash';
import styled from 'styled-components';

import { Layout, Seo, SCenterSection, PercentageRow } from '../components';
import { groupByLetter, IGroupedField, LABELS, ROUTES } from '../common';

interface Props {
  data: {
    allMdx: {
      totalCount: number;
      group: IGroupedField[];
    };
  };
}

const Stags = styled.div`
  display: flex;
  margin: 2rem 0;
  padding: 2rem 0 0;
  border-top: 1px solid ${(props) => props.theme.border};
  h4 {
    font-size: 5rem;
    line-height: normal;
    font-weight: 700;
    text-transform: uppercase;
    min-width: 3.5rem;
    color: ${(props) => props.theme.primary};
    text-shadow: 2px 7px 5px rgba(0, 0, 0, 0.3), 0px -4px 10px rgba(255, 255, 255, 0.3);
  }
  ol {
    margin: 0;
    width: 100%;
  }
`;

const TagsPage: FC<Props> = ({ data }) => {
  const groups = groupByLetter(data.allMdx.group);

  return (
    <Layout>
      <Seo title={LABELS.TAGS} />
      <SCenterSection>
        {groups.map(({ tags, letter }) => (
          <Stags key={letter}>
            <h4>{letter}</h4>
            <ol>
              {tags.map(({ fieldValue, totalCount }) => (
                <PercentageRow
                  key={fieldValue}
                  label={fieldValue}
                  to={`${ROUTES.TAGS}/${kebabCase(fieldValue)}`}
                  count={totalCount}
                  total={data.allMdx.totalCount}
                />
              ))}
            </ol>
          </Stags>
        ))}
      </SCenterSection>
    </Layout>
  );
};

export const query = graphql`
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

export default TagsPage;
