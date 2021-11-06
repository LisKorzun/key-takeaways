import React, { FC, Fragment } from 'react';
import { graphql, Link } from 'gatsby';
import { find, kebabCase, take } from 'lodash';

import { IPost } from '../common';
import { Layout, Seo, Banner, HeadLine, PostCard, TopicCard, DarkSection, SFlexColumnContainer } from '../components';

interface Props {
  data: {
    allMdx: {
      group: {
        fieldValue: string;
        totalCount: number;
        nodes: IPost[];
        group: { fieldValue: string; totalCount: number }[];
      }[];
    };
    site: { siteMetadata: { levels: { id: string; title: string }[] } };
  };
}

const LevelsPage: FC<Props> = ({ data }) => {
  const { levels } = data.site.siteMetadata;

  return (
    <Layout>
      <Seo title="Competency Levels" />
      <Banner title="Competency Levels" icon="levels" />
      <div>
        {data.allMdx.group.map((l) => {
          const level = find(levels, ['id', l.fieldValue]);
          return (
            <Fragment key={l.fieldValue}>
              {level && (
                <>
                  <Link to={`/levels/${kebabCase(level.title)}`}>
                    <DarkSection>
                      <h3>{level.title}</h3>
                    </DarkSection>
                  </Link>
                  <SFlexColumnContainer mb="50px">
                    <HeadLine heading="Topics" />
                    <SFlexColumnContainer>
                      {l.group.map((topic) => (
                        <TopicCard key={topic.fieldValue} title={topic.fieldValue} count={topic.totalCount} />
                      ))}
                    </SFlexColumnContainer>
                  </SFlexColumnContainer>
                  <SFlexColumnContainer mb="50px">
                    <HeadLine
                      heading="Posts"
                      link={`/levels/${kebabCase(level.title)}`}
                      label={`See all ${l.totalCount}`}
                    />
                    {take(l.nodes, 5).map((post) => (
                      <PostCard key={post.id} post={post} />
                    ))}
                  </SFlexColumnContainer>
                </>
              )}
            </Fragment>
          );
        })}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(limit: 5, sort: { order: DESC, fields: frontmatter___date }) {
      group(field: frontmatter___level) {
        totalCount
        fieldValue
        nodes {
          ...postFields
        }
        group(field: frontmatter___topic, limit: 5) {
          fieldValue
          totalCount
        }
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

export default LevelsPage;
