const path = require('path');
const _ = require('lodash');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const homeTemplate = path.resolve('src/templates/home.tsx');
  const levelTemplate = path.resolve('src/templates/level.tsx');
  const topicTemplate = path.resolve('src/templates/topic.tsx');
  const tagTemplate = path.resolve('src/templates/tag.tsx');
  const postTemplate = path.resolve('src/templates/post.tsx');

  const result = await graphql(`
    {
      site: site {
        siteMetadata {
          levels {
            id
            title
            icon
          }
        }
      }
      posts: allMdx(limit: 2000, sort: { fields: frontmatter___date, order: DESC }) {
        nodes {
          slug
          id
          frontmatter {
            title
            tags
            level
            topic
            date(formatString: "MMM DD, YYYY")
            hero_image {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
      tags: allMdx(limit: 2000, sort: { fields: frontmatter___date, order: DESC }) {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
          nodes {
            slug
            frontmatter {
              title
            }
          }
          group(field: frontmatter___level) {
            fieldValue
            totalCount
            nodes {
              slug
              frontmatter {
                title
              }
            }
          }
        }
      }
      levels: allMdx(limit: 2000, sort: { fields: frontmatter___date, order: DESC }) {
        group(field: frontmatter___level) {
          fieldValue
          totalCount
          nodes {
            slug
            frontmatter {
              title
            }
          }
          group(field: frontmatter___topic) {
            fieldValue
            totalCount
            nodes {
              slug
              frontmatter {
                title
              }
            }
          }
        }
      }
      topics: allMdx(limit: 2000, sort: { fields: frontmatter___date, order: DESC }) {
        group(field: frontmatter___topic) {
          fieldValue
          totalCount
          nodes {
            slug
            frontmatter {
              title
            }
          }
          group(field: frontmatter___level) {
            fieldValue
            totalCount
            nodes {
              slug
              frontmatter {
                title
              }
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const levels = result.data.levels.group;
  const levelsData = result.data.site.siteMetadata.levels;
  const tags = result.data.tags.group;
  const topics = result.data.topics.group;
  const posts = result.data.posts.nodes;

  const postsPerPage = 2;

  createPage({
    path: '/',
    component: homeTemplate,
    context: { levels, tags, topics, posts },
  });

  levels.forEach((level) => {
    const levelData = _.find(levelsData, ['id', level.fieldValue]);
    const levelURL = `/levels/${_.kebabCase(levelData.title)}`;
    const numPages = Math.ceil(level.nodes.length / postsPerPage);

    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? levelURL : `${levelURL}/${i + 1}`,
        component: levelTemplate,
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1,
          levelData,
          level: level.fieldValue,
          topic: 'all',
          topics: level.group,
          filter: { level: { eq: level.fieldValue } },
        },
      });
    });

    level.group.forEach((topic) => {
      const topicURL = `${levelURL}/${_.kebabCase(topic.fieldValue)}`;
      const numPages = Math.ceil(topic.nodes.length / postsPerPage);

      Array.from({ length: numPages }).forEach((_, i) => {
        createPage({
          path: i === 0 ? topicURL : `${topicURL}/${i + 1}`,
          component: levelTemplate,
          context: {
            limit: postsPerPage,
            skip: i * postsPerPage,
            numPages,
            currentPage: i + 1,
            levelData,
            level: level.fieldValue,
            topic: topic.fieldValue,
            topics: level.group,
            filter: { level: { eq: level.fieldValue }, topic: { eq: topic.fieldValue } },
          },
        });
      });
    });
  });

  topics.forEach((topic) => {
    const topicURL = `/topics/${_.kebabCase(topic.fieldValue)}`;
    const numPages = Math.ceil(topic.nodes.length / postsPerPage);
    const total = topic.totalCount;

    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? topicURL : `${topicURL}/${i + 1}`,
        component: topicTemplate,
        context: {
          total,
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1,
          levelsData,
          topic: topic.fieldValue,
          level: 'all',
          levels: topic.group,
          filter: { topic: { eq: topic.fieldValue } },
        },
      });
    });

    topic.group.forEach((level) => {
      const levelData = _.find(levelsData, ['id', level.fieldValue]);
      const levelURL = `${topicURL}/${_.kebabCase(levelData.title)}`;
      const numPages = Math.ceil(level.nodes.length / postsPerPage);

      Array.from({ length: numPages }).forEach((_, i) => {
        createPage({
          path: i === 0 ? levelURL : `${levelURL}/${i + 1}`,
          component: topicTemplate,
          context: {
            total,
            limit: postsPerPage,
            skip: i * postsPerPage,
            numPages,
            currentPage: i + 1,
            levelsData,
            level: level.fieldValue,
            topic: topic.fieldValue,
            levels: topic.group,
            filter: { topic: { eq: topic.fieldValue }, level: { eq: level.fieldValue } },
          },
        });
      });
    });
  });

  tags.forEach((tag) => {
    const tagURL = `/tags/${_.kebabCase(tag.fieldValue)}`;
    const numPages = Math.ceil(tag.nodes.length / postsPerPage);
    const total = tag.totalCount;

    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? tagURL : `${tagURL}/${i + 1}`,
        component: tagTemplate,
        context: {
          total,
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1,
          levelsData,
          tag: tag.fieldValue,
          level: 'all',
          levels: tag.group,
          filter: { tags: { in: [tag.fieldValue] } },
        },
      });
    });
    tag.group.forEach((level) => {
      const levelData = _.find(levelsData, ['id', level.fieldValue]);
      const levelURL = `${tagURL}/${_.kebabCase(levelData.title)}`;
      const numPages = Math.ceil(level.nodes.length / postsPerPage);

      Array.from({ length: numPages }).forEach((_, i) => {
        createPage({
          path: i === 0 ? levelURL : `${levelURL}/${i + 1}`,
          component: tagTemplate,
          context: {
            total,
            limit: postsPerPage,
            skip: i * postsPerPage,
            numPages,
            currentPage: i + 1,
            levelsData,
            tag: tag.fieldValue,
            level: level.fieldValue,
            levels: tag.group,
            filter: { tags: { in: [tag.fieldValue] }, level: { eq: level.fieldValue } },
          },
        });
      });
    });
  });

  posts.forEach(({ slug }) => {
    createPage({
      path: slug,
      component: postTemplate,
      context: { slug: slug },
    });
  });
};
