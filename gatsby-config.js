module.exports = {
  siteMetadata: {
    title: `Grand Comics Data Analytics`,
    description: `Tools for better understanding GCD (comics.org), the open database covering all printed comics throughout the world`,
    author: `@youknowjack`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/bx-book-reader.svg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
        options: {
          path: `${__dirname}/src/pages`,
          name: `doc-pages`,
        },
    },
    {
      resolve: `gatsby-source-filesystem`,
        options: {
          path: `${__dirname}/src/athena-samples`,
          name: `athena-samples`,
        },
    },
    {
      resolve: `gatsby-source-filesystem`,
        options: {
          path: `${__dirname}/src/redash-samples`,
          name: `redash-samples`,
        },
    },
    {
      resolve: `gatsby-source-filesystem`,
        options: {
          path: `${__dirname}/src/imhotep-samples`,
          name: `imhotep-samples`,
        },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-embed-snippet`,
            options: {},
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {},
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-HNCWWV866T",
        ],
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: [ ],
        },
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
