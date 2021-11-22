import React, { FC } from 'react';
import { graphql, Link } from 'gatsby';
import { kebabCase } from 'lodash';
import styled from 'styled-components';

import { Layout, Seo, SCenterSection } from '../components';
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
    a {
      width: 100%;
      display: block;
      padding: 1rem 1.5rem;
      margin-bottom: 1rem;
      position: relative;
      color: ${(props) => props.theme.text};
      text-transform: lowercase;
      font-weight: 300;
      font-size: 2.5rem;
      strong {
        float: right;
        font-size: 2rem;
      }
      span {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        overflow: hidden;
        -webkit-transition: background ease 0.2s;
        transition: background ease 0.2s;
        border-radius: 8px;
        background: rgba(0, 0, 0, 0.05);
      }
      &:hover {
        z-index: 1;
        border-radius: 8px;
        background: rgba(0, 0, 0, 0.05);
        cursor: pointer;
      }
    }
    a:last-of-type {
      margin-bottom: 0;
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
                  <strong>{totalCount}</strong>
                  {fieldValue}
                  <span style={{ width: `${(totalCount * 100) / data.allMdx.totalCount}%` }} />
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
