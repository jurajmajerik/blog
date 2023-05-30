module.exports = {
  siteMetadata: {
    title: "Juraj Majerik",
    description:
      "Personal blog of Juraj Majerik. I write about distributed systems",
    twitterUsername: "@jurajmajerik",
    image: "assets/images/favicon.ico",
    siteUrl: "https://jurajmajerik.com",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 600,
              wrapperStyle: "margin: 30px auto;",
            },
          },
          {
            resolve: "gatsby-remark-embed-video",
            options: {
              width: 800,
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        path: `${__dirname}/blog`,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Juraj Majerik | Blog",
        short_name: "Juraj Majerik",
        start_url: "/",
        background_color: "#f7f0eb",
        theme_color: "#1e293b",
        display: "standalone",
        icon: "assets/images/bio-rounded.png",
      },
    },
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: ["G-7VD7Q42FL9"],
        pluginConfig: {
          head: true,
        },
      },
    },
  ],
};
