import React, { FC } from 'react';
import { graphql, Link } from 'gatsby';
import { kebabCase } from 'lodash';

import Layout from '../components/layout';
import Seo from '../components/seo';
import { SSection, SSeparator, STitle, STopic } from '../components/common';
import styled from 'styled-components';

const STopicContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 35%;
`;

interface Props {
  data: {
    allMdx: {
      group: { fieldValue: string; totalCount: number }[];
    };
  };
}

const TopicsPage: FC<Props> = ({ data }) => {
  return (
    <Layout>
      <Seo title="Topics" />
      <SSection>
        <STitle>Topics</STitle>
        <SSeparator />
        <STopicContainer>
          {data.allMdx.group.map((topic) => (
            <STopic key={topic.fieldValue}>
              <Link to={`/topics/${kebabCase(topic.fieldValue)}`}>
                {topic.fieldValue}
                <span>{topic.totalCount}</span>
              </Link>
            </STopic>
          ))}
        </STopicContainer>
      </SSection>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx {
      group(field: frontmatter___topic) {
        fieldValue
        totalCount
      }
    }
  }
`;

export default TopicsPage;
