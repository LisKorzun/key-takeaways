import React, { FC } from 'react';
import { graphql } from 'gatsby';
import { find, kebabCase, take } from 'lodash';

import {
  Layout,
  Seo,
  Title,
  HeadLine,
  PostCard,
  SChipLink,
  SFlexColumnContainer,
  SFlexRowContainer,
} from '../components';
import { getPostsCount, IGroupedField, IPost, LEVEL_TITLE } from '../common';

interface Props {
  pageContext: {
    level: string;
    topic: string;
    topics: IGroupedField[];
  };
  data: {
    allMdx: {
      totalCount: number;
      nodes: IPost[];
    };
    site: { siteMetadata: { levels: { id: string; title: string }[] } };
  };
}

const Level: FC<Props> = ({ pageContext, data }) => {
  const { level, topic, topics } = pageContext;
  const { totalCount, nodes } = data.allMdx;
  const { levels } = data.site.siteMetadata;
  const levelData = find(levels, ['id', level]) || { title: '' };
  console.log(topic, topics);

  return (
    <Layout>
      <Seo title={levelData.title} />
      <div>
        <Title caption={LEVEL_TITLE} title={levelData.title || ''} />
        <SFlexColumnContainer mb="50px">
          <SFlexRowContainer mb="50px" wrap="wrap">
            <SChipLink to={`/levels/${kebabCase(levelData.title)}`}>All topics</SChipLink>
            {topics.map(({ fieldValue }) => (
              <SChipLink
                key={fieldValue}
                to={`/levels/${kebabCase(levelData.title)}/${kebabCase(fieldValue)}`}
                selected={fieldValue === topic}
              >
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
  query ($level: String, $topic: String) {
    allMdx(
      filter: { frontmatter: { level: { eq: $level }, topic: { eq: $topic } } }
      sort: { fields: frontmatter___date, order: DESC }
      limit: 1000
    ) {
      totalCount
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
