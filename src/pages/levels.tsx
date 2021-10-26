import React, { FC, Fragment } from 'react';
import { graphql, Link } from 'gatsby';
import { kebabCase, find } from 'lodash';

import Layout from '../components/layout';
import Seo from '../components/seo';
import { Title } from '../components/title';
import { SRowContainer, STopicContainer, STitleOfList, STopic } from '../components/common';
import { IPost } from '../common';
import { PostsList } from '../components';

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

const DifficultiesPage: FC<Props> = ({ data }) => {
  const { levels } = data.site.siteMetadata;

  return (
    <Layout>
      <Seo title="Competency Levels" />
      <div>
        {data.allMdx.group.map((difficulty) => {
          const level = find(levels, ['id', difficulty.fieldValue]);
          return (
            <Fragment key={difficulty.fieldValue}>
              {level && (
                <>
                  <Title
                    caption="Competency level"
                    title={level.title}
                    link={`/levels/${kebabCase(level.title)}`}
                    count={difficulty.totalCount}
                  />
                  <SRowContainer>
                    <PostsList posts={difficulty.nodes} />
                    <STopicContainer>
                      <>
                        <STitleOfList>Topics</STitleOfList>
                        {difficulty.group.map((topic) => (
                          <STopic key={topic.fieldValue}>
                            <Link to={`/topics/${kebabCase(topic.fieldValue)}`}>
                              {topic.fieldValue}
                              <span>{topic.totalCount}</span>
                            </Link>
                          </STopic>
                        ))}
                      </>
                    </STopicContainer>
                  </SRowContainer>
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

export default DifficultiesPage;
