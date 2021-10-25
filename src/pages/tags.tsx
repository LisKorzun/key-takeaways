import React, { FC } from 'react';
import { Link, graphql } from 'gatsby';
import { kebabCase } from 'lodash';

import Layout from '../components/layout';
import Seo from '../components/seo';
import { SSection, SSeparator, STitle, TagIcon } from '../components/common';
import styled from 'styled-components';

const STags = styled.div`
  margin-top: 10px;
  display: flex;

  & a {
    margin-right: 20px;
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 600;
    display: flex;
    align-items: center;
    padding: 7px 14px;
    border: 1px solid #eee;
    border-radius: 15px;
    justify-content: center;
    color: ${(props) => props.theme.text};
    &:hover {
      background-color: ${(props) => props.theme.primary};
      color: ${(props) => props.theme.background};
    }
  }
`;

interface Props {
  data: {
    allMdx: {
      group: { fieldValue: string; totalCount: number }[];
    };
  };
}

const TagsPage: FC<Props> = ({ data }) => {
  return (
    <Layout>
      <Seo title="Tags" />
      <SSection>
        <STitle>Tags</STitle>
        <SSeparator />
        <STags>
          {data.allMdx.group.map((tag) => (
            <Link key={tag.fieldValue} to={`/tags/${kebabCase(tag.fieldValue)}/`}>
              <TagIcon /> {tag.fieldValue}
            </Link>
          ))}
        </STags>
        {/*{data.allMdx.group.map((tag) => (*/}
        {/*  <article key={tag.fieldValue}>*/}
        {/*    <p>*/}
        {/*      <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>*/}
        {/*        {tag.fieldValue} ({tag.totalCount})*/}
        {/*      </Link>*/}
        {/*    </p>*/}
        {/*  </article>*/}
        {/*))}*/}
      </SSection>
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
