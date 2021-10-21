const path = require('path');
const _ = require('lodash');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const categoryTemplate = path.resolve('src/templates/category.tsx');
  const categoryThemeTemplate = path.resolve('src/templates/CategoryTheme.tsx');
  const tagTemplate = path.resolve('src/templates/tag.tsx');
  const postTemplate = path.resolve('src/templates/post.tsx');

  const result = await graphql(`
    {
      categories: allMdx(limit: 2000) {
        group(field: frontmatter___category) {
          fieldValue
        }
      }
      categoryThemes: allMdx(limit: 2000) {
        group(field: frontmatter___category) {
          group(field: frontmatter___theme) {
            fieldValue
          }
          fieldValue
        }
        totalCount
      }
      tags: allMdx(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
      posts: allMdx {
        nodes {
          slug
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const categories = result.data.categories.group;
  const categoryThemes = result.data.categoryThemes.group;
  const tags = result.data.tags.group;
  const posts = result.data.posts.nodes;

  categories.forEach((category) => {
    createPage({
      path: `/${_.kebabCase(category.fieldValue)}/`,
      component: categoryTemplate,
      context: {
        category: category.fieldValue,
      },
    });
  });

  categoryThemes.forEach((category) => {
    category.group.forEach((theme) => {
      createPage({
        path: `/${_.kebabCase(category.fieldValue)}/${_.kebabCase(theme.fieldValue)}`,
        component: categoryThemeTemplate,
        context: {
          category: category.fieldValue,
          theme: theme.fieldValue,
        },
      });
    });
  });

  tags.forEach((tag) => {
    createPage({
      path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
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
