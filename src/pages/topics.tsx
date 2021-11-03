import React, { FC } from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Seo from '../components/seo';
import { Banner } from '../components/Banner';
import { TopicCard } from '../components/TopicCard';
import { SFlexColumnContainer } from '../components';
import { IGroupedField } from '../common';

interface Props {
  data: {
    allMdx: {
      group: IGroupedField[];
    };
  };
}

const TopicsPage: FC<Props> = ({ data }) => {
  return (
    <Layout>
      <Seo title="Topics" />
      <Banner title="Topics" icon="topics"/>
      <SFlexColumnContainer>
        {data.allMdx.group.map((topic) => (
          <TopicCard key={topic.fieldValue} title={topic.fieldValue} count={topic.totalCount} />
        ))}
      </SFlexColumnContainer>
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
