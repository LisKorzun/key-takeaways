import React, { FC } from 'react';
import { graphql } from 'gatsby';
import { kebabCase } from 'lodash';

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
import { getPostsCount, IGroupedField, ILevelData, IPost, LABELS, ROUTES } from '../common';

interface Props {
  pageContext: {
    topic: string;
    topics: IGroupedField[];
    levelData: ILevelData;
  };
  data: {
    allMdx: {
      totalCount: number;
      nodes: IPost[];
    };
  };
}

const LevelByTopic: FC<Props> = ({
  pageContext: {
    topic,
    topics,
    levelData: { title },
  },
  data: {
    allMdx: { totalCount, nodes },
  },
}) => {
  return (
    <Layout>
      <Seo title={`${LABELS.TOPIC} - ${topic} | ${LABELS.LEVEL} - ${title}`} />
      <Title caption={LABELS.LEVEL} title={title} />
      <SFlexColumnContainer mb="50px">
        <SFlexRowContainer mb="50px" wrap="wrap">
          <SChipLink to={`${ROUTES.LEVELS}/${kebabCase(title)}`}>{LABELS.ALL_TOPICS}</SChipLink>
          {topics.map(({ fieldValue }) => (
            <SChipLink
              key={fieldValue}
              to={`${ROUTES.LEVELS}/${kebabCase(title)}/${kebabCase(fieldValue)}`}
              selected={fieldValue === topic}
            >
              {fieldValue}
            </SChipLink>
          ))}
        </SFlexRowContainer>
        <HeadLine heading={getPostsCount(totalCount)} link={ROUTES.LEVELS} label={LABELS.BACK_TO_LEVELS} />
        <SFlexColumnContainer mb="50px">
          {nodes.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </SFlexColumnContainer>
      </SFlexColumnContainer>
    </Layout>
  );
};

export const pageQuery = graphql`
  query ($level: String, $topic: String) {
    allMdx(
      filter: { frontmatter: { level: { eq: $level }, topic: { eq: $topic } } }
      sort: { fields: frontmatter___date, order: DESC }
      limit: 2000
    ) {
      totalCount
      nodes {
        ...postFields
      }
    }
  }
`;

export default LevelByTopic;
