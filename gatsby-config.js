/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata:{
    title:'Simply Recipes',
    description:"Nice and clean recipes site",
    author:"@szepmilu",
    person:{
      name:"milan",
      age:23
    },
    simpleData: ["item 1", "item 2"],
    complexData: [
      {
        name:"milan",
        age:23
      },
      {
        name:"tina",
        age:20
      },
    ]
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
