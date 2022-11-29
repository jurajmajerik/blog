module.exports = {
  siteMetadata: {
    title: 'Juraj Majerik',
    author: 'Juraj Majerik',
    description: 'Personal blog of Juraj Majerik. I write about distributed systems',
    siteUrl: 'https://jurajmajerik.com',
    social: {
      twitter: '@JurajMajerik',
    },
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 600,
              wrapperStyle: 'margin: 30px auto;',
            },
          },
          {
            resolve: 'gatsby-remark-embed-video',
            options: {
              width: 800,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: `${__dirname}/blog`,
      },
    },
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: [
          'G-7VD7Q42FL9',
        ],
        pluginConfig: {
          head: true,
        },
      },
    },
  ],
};
