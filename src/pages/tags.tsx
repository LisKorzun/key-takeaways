import React, { FC, Fragment } from 'react';
import { graphql, Link } from 'gatsby';
import { kebabCase } from 'lodash';
import styled from 'styled-components';

import { Layout, Seo, SBigChar, SCenterSection, SChipLink, SChips } from '../components';
import { groupByLetter, IGroupedField, LABELS, ROUTES } from '../common';

interface Props {
  data: {
    allMdx: {
      group: IGroupedField[];
    };
  };
}

const Stags = styled.div`
  display: flex;
  margin: 2rem 0;
  border-bottom: 1px solid #f3f3f4;
  h4 {
    font-size: 6rem;
    font-weight: 700;
    text-transform: uppercase;
    min-width: 10rem;
    color: ${(props) => props.theme.primary};
  }
  ol {
    margin: 0;
    width: 100%;
    a {
      width: 100%;
      display: block;
      padding: 1rem 0.5rem;
      margin-bottom: 1rem;
      position: relative;
      em {
        float: right;
      }
      span {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        min-width: 12%;
        height: 100%;
        overflow: hidden;
        -webkit-transition: background ease 0.2s;
        transition: background ease 0.2s;
        border-radius: 4px;
        background: rgba(0, 0, 0, 0.05);
        text-indent: -9999px;
        width: 76%;
      }
    }
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
                <Link key={fieldValue} to={`${ROUTES.TAGS}/${kebabCase(fieldValue)}`}>
                  <em>{totalCount}</em>
                  {fieldValue}
                  <span style={{ width: `${(totalCount * 100) / data.allMdx.group[0].totalCount}%` }}>
                    {(totalCount * 100) / data.allMdx.group[0].totalCount}
                  </span>
                </Link>
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
    allMdx {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;

export default TagsPage;
