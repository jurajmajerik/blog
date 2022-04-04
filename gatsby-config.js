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
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-7VD7Q42FL9",
        ],
        pluginConfig: {
          head: true,
        },
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              inlineCodeMarker: '÷',
            },
          },
        ],
      },
    }
  ],
};
