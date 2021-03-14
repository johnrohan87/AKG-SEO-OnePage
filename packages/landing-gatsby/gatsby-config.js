module.exports = {
  siteMetadata: {
    title: `AKG Roofing and Specialty Services, INC`,
    description: `Roofing Installation, Repair, and Proactive Maintenance Services for all Commercial and Residential Properties in Florida`,
    author: `@JohnRRohan`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        minify: false, // Breaks styles if not set to false
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          process.env.GA_TRACKING_ID, // Google Analytics / GA
          process.env.AW_CONVERSION_ID, // Google Ads / Adwords / AW
          'DC-FLOODIGHT_ID', // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-google-marketing-platform',
      options: {
        dataLayer: {
          gaPropertyId: process.env.GA_PROPERTY_ID,
        },
        tagmanager: {
          id: process.env.GA_TAG_MANAGER_ID,
        },
        analytics: {
          id: process.env.GA_TRACKING_ID,
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap',
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `common`,
        path: `${__dirname}/src/common/assets/`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/common/data/`,
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
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        fonts: [
          {
            family: `Roboto`,
            variants: [
              `100`,
              `100i`,
              `300`,
              `300i`,
              `400`,
              `400i`,
              `500`,
              `500i`,
              `700`,
              `700i`,
              `900`,
              `900i`,
            ],
          },
          {
            family: `Poppins`,
            variants: [`300`, `400`, `500`, `600`, `700`],
          },
          {
            family: `Lato`,
            variants: [`300`, `400`, `700`],
          },
          {
            family: `Open Sans`,
            variants: [`300`, `400`, `600`, `700`, `800`],
          },
          {
            family: `Raleway`,
            variants: [`500`, `600`],
          },
          {
            family: `Heebo`,
            variants: [`300`, `400`, `500`, `600`, `700`, `800`],
          },
          {
            family: `B612`,
            variants: [`400`, `400i`, `700`, `700i`],
          },
          {
            family: `DM Sans`,
            variants: [`400`, `400i`, `500`, `500i`, `700`, `700i`],
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    'gatsby-plugin-offline',
  ],
};
