import React, { FC } from 'react';
import { graphql } from 'gatsby';
import { find, kebabCase, take } from 'lodash';

import {
  Layout,
  Seo,
  Title,
  HeadLine,
  PostCard,
  SFlexColumnContainer,
  SFlexRowContainer,
  SChipLink
} from '../components';
import { getPostsCount, IGroupedField, ILevelData, IPost, LEVEL_TITLE } from '../common';

interface Props {
  pageContext: {
    level: string;
  };
  data: {
    allMdx: {
      totalCount: number;
      nodes: IPost[];
      group: IGroupedField[];
    };
    site: { siteMetadata: { levels: ILevelData[] } };
  };
}

const Level: FC<Props> = ({ pageContext, data }) => {
  const { level } = pageContext;
  const { totalCount, nodes, group } = data.allMdx;
  const { levels } = data.site.siteMetadata;
  const levelData = find(levels, ['id', level]) || { title: '' };

  return (
    <Layout>
      <Seo title={`${LEVEL_TITLE} | ${levelData.title}`} />
      <div>
        <Title caption={LEVEL_TITLE} title={levelData.title || ''} />
        <SFlexColumnContainer mb="50px">
          <SFlexRowContainer mb="50px" wrap="wrap">
            <SChipLink to={`/levels/${kebabCase(levelData.title)}`} selected>
              All topics
            </SChipLink>
            {group.map(({ fieldValue }) => (
              <SChipLink key={fieldValue} to={`/levels/${kebabCase(levelData.title)}/${kebabCase(fieldValue)}`}>
                {fieldValue}
              </SChipLink>
            ))}
          </SFlexRowContainer>
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
