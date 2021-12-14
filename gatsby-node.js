const path = require('path');
const _ = require('lodash');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const LIMIT = '2000';
  const SORT = '{ fields: frontmatter___date, order: DESC }';

  const homeTemplate = path.resolve('src/templates/home.tsx');
  const contentsTemplate = path.resolve('src/templates/contents.tsx');
  const levelTemplate = path.resolve('src/templates/level.tsx');
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
            caption
          }
        }
      }
      posts: allMdx(limit: ${LIMIT}, sort: ${SORT}) {
        nodes {
          slug
        }
      }
      tags: allMdx(limit: ${LIMIT}, sort: ${SORT}) {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
          group(field: frontmatter___level) {
            fieldValue
            totalCount
          }
        }
      }
      levels: allMdx(limit: ${LIMIT}, sort: ${SORT}) {
        group(field: frontmatter___level) {
          fieldValue
          totalCount
          group(field: frontmatter___tags) {
            fieldValue
            totalCount
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
  const posts = result.data.posts.nodes;

  const postsPerPage = 3;

  createPage({
    path: '/',
    component: homeTemplate,
    context: { levels, tags, posts },
  });

  createPage({
    path: '/contents',
    component: contentsTemplate,
    context: { levels, tags, posts },
  });

  posts.forEach(({ slug }) => {
    createPage({
      path: slug,
      component: postTemplate,
      context: { slug: slug },
    });
  });

  levels.forEach((level) => {
    const total = level.totalCount;
    const levelData = _.find(levelsData, ['id', level.fieldValue]);

    const levelURL = `/level/${_.kebabCase(levelData.title)}`;
    const numPages = Math.ceil(total / postsPerPage);

    const common = {
      total,
      levelData,
      level: level.fieldValue,
      tags: level.group,
      limit: postsPerPage,
    };

    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? levelURL : `${levelURL}/${i + 1}`,
        component: levelTemplate,
        context: {
          ...common,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1,
          baseURL: levelURL,
          tag: 'all',
          filter: { level: { eq: level.fieldValue } },
        },
      });
    });

    level.group.forEach((tag) => {
      const levelByTagURL = `${levelURL}/${_.kebabCase(tag.fieldValue)}`;
      const numPages = Math.ceil(tag.totalCount / postsPerPage);

      Array.from({ length: numPages }).forEach((_, i) => {
        createPage({
          path: i === 0 ? levelByTagURL : `${levelByTagURL}/${i + 1}`,
          component: levelTemplate,
          context: {
            ...common,
            skip: i * postsPerPage,
            numPages,
            currentPage: i + 1,
            baseURL: levelByTagURL,
            tag: tag.fieldValue,
            filter: { level: { eq: level.fieldValue }, tags: { in: [tag.fieldValue] } },
          },
        });
      });
    });
  });

  tags.forEach((tag) => {
    const total = tag.totalCount;
    const currentTag = tag.fieldValue;
    const tagURL = `/tag/${_.kebabCase(currentTag)}`;
    const numPages = Math.ceil(total / postsPerPage);

    const common = {
      total,
      levelsData,
      limit: postsPerPage,
      tag: currentTag,
      levels: tag.group,
    };

    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? tagURL : `${tagURL}/${i + 1}`,
        component: tagTemplate,
        context: {
          ...common,
          numPages,
          skip: i * postsPerPage,
          currentPage: i + 1,
          baseURL: tagURL,
          level: 'all',
          filter: { tags: { in: [currentTag] } },
        },
      });
    });
    tag.group.forEach((level) => {
      const levelData = _.find(levelsData, ['id', level.fieldValue]);
      const tagByLevelURL = `${tagURL}/${_.kebabCase(levelData.title)}`;
      const numPages = Math.ceil(level.totalCount / postsPerPage);

      Array.from({ length: numPages }).forEach((_, i) => {
        createPage({
          path: i === 0 ? tagByLevelURL : `${tagByLevelURL}/${i + 1}`,
          component: tagTemplate,
          context: {
            ...common,
            numPages,
            skip: i * postsPerPage,
            currentPage: i + 1,
            baseURL: tagByLevelURL,
            level: level.fieldValue,
            filter: { tags: { in: [currentTag] }, level: { eq: level.fieldValue } },
          },
        });
      });
    });
  });
};
