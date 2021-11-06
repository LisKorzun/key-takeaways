import React, { FC } from 'react';
import { graphql } from 'gatsby';
import { find, take } from 'lodash';

import { Layout, Seo, Title, HeadLine, PostCard, SFlexColumnContainer } from '../components';
import { getPostsCount, IPost } from '../common';

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
  const { totalCount, nodes } = data.allMdx;
  const { levels } = data.site.siteMetadata;
  const levelData = find(levels, ['id', level]) || { title: '' };

  return (
    <Layout>
      <Seo title={levelData.title} />
      <div>
        <Title caption="Competency Level" title={levelData.title || ''} />
        <SFlexColumnContainer mb="50px">
          <HeadLine heading={getPostsCount(totalCount)} link="/levels" label="Back to all levels" />
          <div>
            {take(nodes, 5).map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </SFlexColumnContainer>
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
