require(`dotenv`).config({
  path: `.env`,
});

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE;

module.exports = {
  // You can overwrite values here that are used for the SEO component
  // Of course you can also add new values here to query them like usual
  // See all options: https://github.com/LekoArts/gatsby-themes/blob/master/themes/gatsby-theme-cara/gatsby-config.js
  siteMetadata: {
    siteTitle: `David Ressler`,
    siteTitleAlt: `David Ressler - Portfolio`,
    siteHeadline: `David Ressler - Portfolio`,
    siteUrl: `https://www.davidressler.com`,
    siteDescription: `I'm a Full-Stack Developer and Engineering Manager who is passionate about the intersection of technology and equity.`,
    siteLanguage: `en`,
    siteImage: `/banner.jpg`,
    author: `@davitykale`,
    basePath: "/",
  },

  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-cara`,
      // See the theme's README for all available options
      options: {},
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `David Ressler - Portfolio`,
        short_name: `David Ressler`,
        description: `I'm a Full-Stack Developer and Engineering Manager who is passionate about the intersection of technology and equity.`,
        start_url: `/`,
        background_color: `#141821`,
        theme_color: `#f6ad55`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
};
