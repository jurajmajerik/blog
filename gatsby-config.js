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
      resolve: "gatsby-plugin-posthog",
      options: {
        // Specify the API key for your PostHog Project (required)
        apiKey: "phc_2jx6DBE8kQcju3XM9NACr0QrNvEdgxWQfQbe9lI3H3I",
        // Specify the app host if self-hosting (optional, default: https://app.posthog.com)
        apiHost: "https://app.posthog.com",
        // Puts tracking script in the head instead of the body (optional, default: true)
        head: true,
        // Enable posthog analytics tracking during development (optional, default: false)
        isEnabledDevMode: true,
      },
    },
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
        background_color: "#ffffff",
        theme_color: "#ffffff",
        display: "standalone",
        icon: "assets/images/bio-rounded.png",
      },
    },
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-netlify",
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
