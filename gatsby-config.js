const path = require('path');

const gatsbyRequiredRules = path.join(process.cwd(), 'node_modules', 'gatsby', 'dist', 'utils', 'eslint-rules');

module.exports = {
  siteMetadata: {
    siteUrl: 'https://keytakeaways.gatsbyjs.io',
    title: 'JS, TS, React Cheat Sheets Series',
    author: {
      name: 'Alesia Korzun',
    },
    description: 'JS, TS, React Cheat Sheets: all you need!',
    levels: [
      { id: '0', title: 'Super Easy', icon: 'Level-0' },
      { id: '1', title: 'Easy', icon: 'Level-1' },
      { id: '2', title: 'Medium', icon: 'Level-2' },
      { id: '3', title: 'Hard', icon: 'Level-3' },
      { id: '4', title: 'Insanely Hard', icon: 'Level-4' },
      { id: '5', title: 'Master', icon: 'Level-5' },
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
    {
      resolve: `gatsby-plugin-readingtime`,
      options: {
        config: {},
        types: {},
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              aliases: {
                console: `bash`,
                env: `bash`,
                es6: `js`,
                flowchart: `none`,
                gitignore: `none`,
                gql: `graphql`,
                mdx: `markdown`,
                ml: `fsharp`,
                sh: `bash`,
                styl: `stylus`,
                terminal: `bash`,
              },
            },
          },
        ],
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
  ],
};
