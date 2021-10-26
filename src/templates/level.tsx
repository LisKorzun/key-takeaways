import React, { FC } from 'react';
import { graphql, Link } from 'gatsby';

import Seo from '../components/seo';
import Layout from '../components/layout';
import { find } from 'lodash';
import { Title } from '../components/title';
import { STitleOfList, SRowContainer, STopicContainer, STopic } from '../components/common';
import { PostsList } from '../components';
import { ARTICLES_LABEL, IPost } from '../common';

interface Props {
  pageContext: {
    level: string;
  };
  data: {
    allMdx: {
      totalCount: number;
      nodes: IPost[];
      group: {
        fieldValue: string;
        totalCount: number;
      }[];
    };
    site: { siteMetadata: { levels: { id: string; title: string }[] } };
  };
}

const Level: FC<Props> = ({ pageContext, data }) => {
  const { level } = pageContext;
  const { totalCount, group, nodes } = data.allMdx;
  const { levels } = data.site.siteMetadata;
  const levelData = find(levels, ['id', level]) || { title: '' };

  return (
    <Layout>
      <Seo title={levelData.title} />
      <div>
        <Title caption="Competency Level" title={levelData.title || ''} count={totalCount} />
        <SRowContainer>
          <PostsList posts={nodes} title={ARTICLES_LABEL} />
          <STopicContainer>
            <>
              <STitleOfList>Topics</STitleOfList>
              {group.map((topic) => (
                <STopic key={topic.fieldValue}>
                  <a>
                    {topic.fieldValue}
                    <span>{topic.totalCount}</span>
                  </a>
                </STopic>
              ))}
            </>
          </STopicContainer>
        </SRowContainer>
        <Link to="/levels">All Competency Levels</Link>
      </div>
    </Layout>
  );
};

export default Level;

export const pageQuery = graphql`
  query ($level: String) {
    allMdx(
      filter: { frontmatter: { level: { eq: $level } } }
      sort: { fields: frontmatter___date, order: DESC }
      limit: 1000
    ) {
      totalCount
      group(field: frontmatter___topic) {
        fieldValue
        totalCount
      }
      nodes {
        ...postFields
      }
    }
    site {
      siteMetadata {
        levels {
          id
          title
        }
      }
    }
  }
`;
