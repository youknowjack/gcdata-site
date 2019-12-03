const path = require(`path`)

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const docPageTemplate = path.resolve(`src/templates/docTemplate.js`)

  return graphql(`
    {
      allMarkdownRemark(
        filter: {fileAbsolutePath: {regex: "/.*docs.*/"}}
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    return result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: docPageTemplate,
        context: {}, // additional data can be passed via context
      })
    })
  })
}
