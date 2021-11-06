const path = require('path');

const gatsbyRequiredRules = path.join(process.cwd(), 'node_modules', 'gatsby', 'dist', 'utils', 'eslint-rules');

module.exports = {
  siteMetadata: {
    siteUrl: 'https://keytakeaways.gatsbyjs.io',
    title: 'Key Takeaways | JS, TS, React',
    author: {
      name: 'Alesia Korzun',
    },
    description: 'Key Takeaways: all you need!',
    levels: [
      { id: '0', title: 'Easier Than Easy' },
      { id: '1', title: 'Beginner' },
      { id: '2', title: 'Semi-Pro' },
      { id: '3', title: 'Professional' },
      { id: '4', title: 'Expert' },
      { id: '5', title: 'Master' },
    ],
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        rulePaths: [gatsbyRequiredRules],
        stages: ['develop'],
        extensions: ['js', 'jsx', 'ts', 'tsx'],
        exclude: ['node_modules', 'bower_components', '.cache', 'public'],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `posts`,
        path: `${__dirname}/content/posts`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /svg/,
        },
      },
    },
    'gatsby-plugin-mdx',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
  ],
};
