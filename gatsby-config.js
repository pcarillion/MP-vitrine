/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

 
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
})


module.exports = {
  /* Your site config here */


  siteMetadata:{
    title: "< MP > Web Agency",
    description: "MP, Marine et Paul, designeuse et développeur de sites web",
    author: "MP",
    image: './static/fav-icon1.jpg', 
    siteUrl: "https://mp-site-vitrine.netlify.app/",
  },

  plugins: [
    // `gatsby-plugin-sitemap`,
    // `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-transition-link`,
    // `gatsby-plugin-playground`,
    // `gatsby-plugin-react-helmet`,
    // `gatsby-plugin-anchor-links`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://gracious-hoover-5a6a6e.netlify.app/',
        sitemap: 'https://gracious-hoover-5a6a6e.netlify.app/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/images/fav-icon1.jpg`
      },
    },
  ],
}
