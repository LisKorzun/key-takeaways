const path = require('path');
const _ = require('lodash');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const levelTemplate = path.resolve('src/templates/level.tsx');
  const tagTemplate = path.resolve('src/templates/tag.tsx');
  const postTemplate = path.resolve('src/templates/post.tsx');
  const topicTemplate = path.resolve('src/templates/topic.tsx');

  const result = await graphql(`
    {
      site: site {
        siteMetadata {
          levels {
            id
            title
          }
        }
      }
      posts: allMdx(limit: 2000) {
        nodes {
          slug
        }
      }
      tags: allMdx(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
      levels: allMdx(limit: 2000) {
        group(field: frontmatter___difficulty) {
          fieldValue
        }
      }
      topics: allMdx(limit: 2000) {
        group(field: frontmatter___topic) {
          fieldValue
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

  levels.forEach((difficulty) => {
    createPage({
      path: `/levels/${_.kebabCase(_.find(levelsData, ['id', difficulty.fieldValue]).title)}`,
      component: levelTemplate,
      context: {
        difficulty: difficulty.fieldValue,
      },
    });
  });

  tags.forEach((tag) => {
    createPage({
      path: `/tags/${_.kebabCase(tag.fieldValue)}`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    });
  });

  topics.forEach((topic) => {
    createPage({
      path: `/topics/${_.kebabCase(topic.fieldValue)}`,
      component: topicTemplate,
      context: {
        topic: topic.fieldValue,
      },
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
