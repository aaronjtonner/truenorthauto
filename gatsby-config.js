module.exports = {
  siteMetadata: {
    title: "True North Auto Loans",
    titleTemplate: "%s ·",
    description: "True North Auto Loans",
    url: "https://www.truenorthautoloans.com", // No trailing slash allowed!
    siteUrl: "https://www.truenorthautoloans.com",
    image: "/logo.jpg", // Path to your image you placed in the 'static' folder
    twitterUsername: "",
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-anchor-links`,
    {
      resolve: "gatsby-plugin-page-progress",
      options: {
        includePaths: ["/get-a-loan"],
        excludePaths: [],
        height: 9,
        prependToBody: false,
        color: `#663399`,
        footerHeight: 500,
        headerHeight: 0,
      },
    },
  ],
}
