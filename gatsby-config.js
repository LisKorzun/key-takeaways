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
            resolve: "gatsby-remark-embed-video",
            options: {
              width: 800,
              ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
              height: 400, // Optional: Overrides optional.ratio
              related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
              noIframeBorder: true, //Optional: Disable insertion of <style> border: 0
              loadingStrategy: 'lazy', //Optional: Enable support for lazy-load offscreen iframes. Default is disabled.
              urlOverrides: [
                {
                  id: "youtube",
                  embedURL: videoId =>
                    `https://www.youtube-nocookie.com/embed/${videoId}`,
                },
              ],
              containerClass: "embedVideo-container", //Optional: Custom CSS class for iframe container, for multiple classes separate them by space
              iframeId: false, //Optional: if true, iframe's id will be set to what is provided after 'video:' (YouTube IFrame player API requires iframe id)
            },
          },
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
