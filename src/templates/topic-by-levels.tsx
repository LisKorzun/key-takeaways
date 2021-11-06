import React, { FC, Fragment } from 'react';
import { graphql } from 'gatsby';

import {
  Layout,
  PostCard,
  Seo,
  Title,
  HeadLine,
  SFlexColumnContainer,
  SFlexRowContainer,
  SChipLink,
} from '../components';
import { getPostsCount, IGroupedField, ILevelData, IPost, LABELS, ROUTES } from '../common';
import { find, kebabCase } from 'lodash';

interface Props {
  pageContext: {
    topic: string;
    level: string;
    levelsData: ILevelData[];
    levels: IGroupedField[];
  };
  data: {
    allMdx: {
      nodes: IPost[];
      totalCount: number;
    };
  };
}

const TopicByLevels: FC<Props> = ({
  pageContext: { topic, levelsData, levels, level },
  data: {
    allMdx: { nodes, totalCount },
  },
}) => (
  <Layout>
    <Seo title={`${LABELS.TOPIC} - ${topic}`} />
    <Title caption={LABELS.TOPIC} title={topic} />
    <SFlexColumnContainer mb="50px">
      <SFlexRowContainer mb="50px" wrap="wrap">
        <SChipLink to={`${ROUTES.TOPICS}/${kebabCase(topic)}`}>{LABELS.ALL_LEVELS}</SChipLink>
        {levels.map(({ fieldValue }) => {
          const levelData = find(levelsData, ['id', fieldValue]);
          return (
            <Fragment key={fieldValue}>
              {levelData && (
                <SChipLink
                  to={`${ROUTES.TOPICS}/${kebabCase(topic)}/${kebabCase(levelData.title)}`}
                  selected={fieldValue === level}
                >
                  {levelData.title}
                </SChipLink>
              )}
            </Fragment>
          );
        })}
      </SFlexRowContainer>
      <HeadLine heading={getPostsCount(totalCount)} link={ROUTES.TOPICS} label={LABELS.BACK_TO_TOPICS} />
      <div>
        {nodes.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </SFlexColumnContainer>
  </Layout>
);

export const pageQuery = graphql`
  query ($topic: String, $level: String) {
    allMdx(
      filter: { frontmatter: { topic: { eq: $topic }, level: { eq: $level } } }
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

export default TopicByLevels;
