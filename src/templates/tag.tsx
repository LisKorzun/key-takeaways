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

const Tag: FC<Props> = ({
  pageContext: { tag, levelsData },
  data: {
    allMdx: { nodes, totalCount, group },
  },
}) => (
  <Layout>
    <Seo title={`${LABELS.TAG} - ${tag}`} />
    <Title caption={LABELS.TAG} title={tag} />
    <SFlexColumnContainer mb="50px">
      <SFlexRowContainer mb="50px" wrap="wrap">
        <SChipLink to={`${ROUTES.TAGS}/${kebabCase(tag)}`} selected>
          {LABELS.ALL_LEVELS}
        </SChipLink>
        {group.map(({ fieldValue }) => {
          const level = find(levelsData, ['id', fieldValue]);
          return (
            <Fragment key={fieldValue}>
              {level && (
                <SChipLink to={`${ROUTES.TAGS}/${kebabCase(tag)}/${kebabCase(level.title)}`}>{level.title}</SChipLink>
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
  query ($tag: String) {
    allMdx(
      filter: { frontmatter: { tags: { in: [$tag] } } }
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

export default Tag;
