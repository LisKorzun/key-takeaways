const path = require('path');
const _ = require('lodash');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const levelTemplate = path.resolve('src/templates/level.tsx');
  const tagTemplate = path.resolve('src/templates/tag.tsx');
  const postTemplate = path.resolve('src/templates/post.tsx');
  const topicTemplate = path.resolve('src/templates/topic.tsx');
  const homeTemplate = path.resolve('src/templates/home.tsx');

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
      posts: allMdx(limit: 2000, sort: { fields: frontmatter___date, order: DESC }) {
        nodes {
          slug
          id
          frontmatter {
            title
            tags
            topic
            date(formatString: "MMMM DD, YYYY")
            hero_image {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
      tags: allMdx(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
      levels: allMdx(limit: 2000) {
        group(field: frontmatter___level) {
          fieldValue
          totalCount
        }
      }
      topics: allMdx(limit: 2000) {
        group(field: frontmatter___topic) {
          fieldValue
          totalCount
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

  createPage({
    path: '/',
    component: homeTemplate,
    context: { levels, levelsData, tags, topics, posts },
  });

  levels.forEach((level) => {
    createPage({
      path: `/levels/${_.kebabCase(_.find(levelsData, ['id', level.fieldValue]).title)}`,
      component: levelTemplate,
      context: {
        level: level.fieldValue,
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
