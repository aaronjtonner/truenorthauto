module.exports = {
  siteMetadata: {
    title: "Calgary Massage",
    titleTemplate: "%s · Pacha Mamma Massage",
    description: "Calgary massage",
    url: "https://www.bookwithkathryn.com", // No trailing slash allowed!
    siteUrl: "https://www.bookwithkathryn.com",
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
  ],
}
