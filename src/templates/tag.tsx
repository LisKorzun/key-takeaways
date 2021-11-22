import React, { FC } from 'react';
import { graphql, Link } from 'gatsby';
import { kebabCase } from 'lodash';

import { Layout, Seo, Title, ChipsByLevels, PostsList, SCenterSection, Icon } from '../components';
import { ICONS, IGroupedField, ILevelData, IPost, LABELS, ROUTES } from '../common';
import styled from 'styled-components';

interface Props {
  pageContext: {
    tag: string;
    level: string;
    levelsData: ILevelData[];
    levels: IGroupedField[];
    total: number;
  };
  data: {
    allMdx: {
      nodes: IPost[];
    };
  };
}
const SBackLink = styled((props) => <Link {...props} />)`
  font-size: 25px;
  font-weight: 400;
  color: ${(props) => props.theme.primary};
  padding-left: 3rem;
  position: relative;
  width: 100%;
  display: block;
  svg {
    position: absolute;
    top: 3px;
    left: 0;
    height: 15px;
  }
  &::before {
    background-color: ${(props) => props.theme.primary};
    content: '';
    position: absolute;
    top: -400px;
    left: -50%;
    width: 200%;
    height: 650px;
    z-index: -1;
    opacity: 0.1;
    transform: rotate(-11deg) translateZ(0);
    overflow-x: hidden;
  }
`;

const Tag: FC<Props> = ({
  pageContext: { tag, levelsData, levels, level, total },
  data: {
    allMdx: { nodes },
  },
}) => (
  <Layout>
    <Seo title={`${tag} ${LABELS.TAG}`} />
    <SCenterSection>
      <SBackLink to={`/tags`}>
        <Icon name={ICONS.ARROW_BACK} color="primary" height="20px" />
        Browse Tags
      </SBackLink>
      <Title caption={LABELS.TAG} title={tag} />
      <ChipsByLevels
        levels={levels}
        data={levelsData}
        active={level}
        baseRoute={`${ROUTES.TAGS}/${kebabCase(tag)}`}
        total={total}
      />
      <PostsList posts={nodes} />
    </SCenterSection>
  </Layout>
);

export const pageQuery = graphql`
  query ($filter: MdxFrontmatterFilterInput, $skip: Int!, $limit: Int!) {
    allMdx(
      filter: { frontmatter: $filter }
      sort: { fields: frontmatter___date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      totalCount
      nodes {
        ...postFields
      }
    }
  }
`;

export default Tag;
