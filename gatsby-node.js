const path = require('path');
const _ = require('lodash');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const difficultyTemplate = path.resolve('src/templates/difficulty.tsx');
  const tagTemplate = path.resolve('src/templates/tag.tsx');
  const postTemplate = path.resolve('src/templates/post.tsx');

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
      difficulties: allMdx(limit: 2000) {
        group(field: frontmatter___difficulty) {
          fieldValue
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const difficulties = result.data.difficulties.group;
  const levels = result.data.site.siteMetadata.levels;
  const tags = result.data.tags.group;
  const posts = result.data.posts.nodes;

  difficulties.forEach((difficulty) => {
    createPage({
      path: `/${_.kebabCase(_.find(levels, ['id', difficulty.fieldValue]).title)}`,
      component: difficultyTemplate,
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

  posts.forEach(({ slug }) => {
    createPage({
      path: slug,
      component: postTemplate,
      context: { slug: slug },
    });
  });
};
