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
    levelsData: ILevelData[];
  };
  data: {
    allMdx: {
      nodes: IPost[];
      totalCount: number;
      group: IGroupedField[];
    };
  };
}

const Topic: FC<Props> = ({
  pageContext: { topic, levelsData },
  data: {
    allMdx: { nodes, totalCount, group },
  },
}) => (
  <Layout>
    <Seo title={`${LABELS.TOPIC} - ${topic}`} />
    <Title caption={LABELS.TOPIC} title={topic} />
    <SFlexColumnContainer mb="50px">
      <SFlexRowContainer mb="50px" wrap="wrap">
        <SChipLink to={`${ROUTES.TOPICS}/${kebabCase(topic)}`} selected>
          {LABELS.ALL_LEVELS}
        </SChipLink>
        {group.map(({ fieldValue }) => {
          const level = find(levelsData, ['id', fieldValue]);
          return (
            <Fragment key={fieldValue}>
              {level && (
                <SChipLink to={`${ROUTES.TOPICS}/${kebabCase(topic)}/${kebabCase(level.title)}`}>
                  {level.title}
                </SChipLink>
              )}
            </Fragment>
          );
        })}
      </SFlexRowContainer>
      <HeadLine heading={getPostsCount(totalCount)} link={ROUTES.TOPICS} label={LABELS.BACK_TO_TOPICS} />
      <SFlexColumnContainer mb="50px">
        {nodes.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </SFlexColumnContainer>
    </SFlexColumnContainer>
  </Layout>
);

export const pageQuery = graphql`
  query ($topic: String) {
    allMdx(
      filter: { frontmatter: { topic: { eq: $topic } } }
      sort: { fields: frontmatter___date, order: DESC }
      limit: 2000
    ) {
      totalCount
      nodes {
        ...postFields
      }
      group(field: frontmatter___level) {
        fieldValue
        totalCount
      }
    }
  }
`;

export default Topic;
