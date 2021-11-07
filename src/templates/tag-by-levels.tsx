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
    tag: string;
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

const TagByLevels: FC<Props> = ({
  pageContext: { tag, levelsData, levels, level },
  data: {
    allMdx: { nodes, totalCount },
  },
}) => (
  <Layout>
    <Seo title={`${LABELS.TAG} - ${tag}`} />
    <Title caption={LABELS.TAG} title={tag} />
    <SFlexColumnContainer mb="50px">
      <SFlexRowContainer mb="50px" wrap="wrap">
        <SChipLink to={`${ROUTES.TAGS}/${kebabCase(tag)}`}>{LABELS.ALL_LEVELS}</SChipLink>
        {levels.map(({ fieldValue }) => {
          const levelData = find(levelsData, ['id', fieldValue]);
          return (
            <Fragment key={fieldValue}>
              {levelData && (
                <SChipLink
                  to={`${ROUTES.TAGS}/${kebabCase(tag)}/${kebabCase(levelData.title)}`}
                  selected={fieldValue === level}
                >
                  {levelData.title}
                </SChipLink>
              )}
            </Fragment>
          );
        })}
      </SFlexRowContainer>
      <HeadLine heading={getPostsCount(totalCount)} link={ROUTES.TAGS} label={LABELS.BACK_TO_TAGS} />
      <SFlexColumnContainer mb="50px">
        {nodes.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </SFlexColumnContainer>
    </SFlexColumnContainer>
  </Layout>
);

export const pageQuery = graphql`
  query ($tag: String, $level: String) {
    allMdx(
      filter: { frontmatter: { tags: { in: [$tag] }, level: { eq: $level } } }
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

export default TagByLevels;
