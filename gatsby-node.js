/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const { createOpenGraphImage } = require("gatsby-plugin-open-graph-images")
const path = require(`path`)

exports.createPages = async ({ actions }) => {
  const { createPage } = actions

  const openGraphImage = createOpenGraphImage(createPage, {
    path: "/og-image/index.png",
    component: path.resolve(`./src/pages/index.js`),
    size: {
      width: 400,
      height: 50,
    },
    context: {
      description: "a image created with gatsby-plugin-open-graph-images",
    },
  })
}
