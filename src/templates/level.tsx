import React, { FC } from 'react';
import { graphql } from 'gatsby';
import { kebabCase } from 'lodash';

import {
  Layout,
  Seo,
  Title,
  HeadLine,
  PostCard,
  SFlexColumnContainer,
  SFlexRowContainer,
  SChipLink,
} from '../components';
import { getPostsCount, IGroupedField, ILevelData, IPost, LABELS, ROUTES } from '../common';

interface Props {
  pageContext: {
    levelData: ILevelData;
  };
  data: {
    allMdx: {
      totalCount: number;
      nodes: IPost[];
      group: IGroupedField[];
    };
  };
}

const Level: FC<Props> = ({
  pageContext: {
    levelData: { title },
  },
  data: {
    allMdx: { totalCount, nodes, group },
  },
}) => (
  <Layout>
    <Seo title={`${LABELS.LEVEL} - ${title}`} />
    <Title caption={LABELS.LEVEL} title={title} />
    <SFlexColumnContainer mb="50px">
      <SFlexRowContainer mb="50px" wrap="wrap">
        <SChipLink to={`${ROUTES.LEVELS}/${kebabCase(title)}`} selected>
          {LABELS.ALL_TOPICS}
        </SChipLink>
        {group.map(({ fieldValue }) => (
          <SChipLink key={fieldValue} to={`${ROUTES.LEVELS}/${kebabCase(title)}/${kebabCase(fieldValue)}`}>
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

export const pageQuery = graphql`
  query ($level: String) {
    allMdx(
      filter: { frontmatter: { level: { eq: $level } } }
      sort: { fields: frontmatter___date, order: DESC }
      limit: 2000
    ) {
      totalCount
      nodes {
        ...postFields
      }
      group(field: frontmatter___topic) {
        fieldValue
        totalCount
      }
    }
  }
`;

export default Level;
