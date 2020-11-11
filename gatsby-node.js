const path = require("path")


exports.createPages = async ({graphql, actions}) => {
    const {createPage} = actions;
    const {data} = await graphql(` 
    query{
        projets: allContentfulProjet{
        edges{
          node{
            slug
          }
        }
      }
    }
    `)

    data.projets.edges.forEach(({node}) => {
        createPage({
            path: `projets/${node.slug}`,
            component: path.resolve('./src/templates/Projet.js'),
            context: {
                slug: node.slug
            }
        })
    })
}

