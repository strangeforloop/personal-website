import React from "react"
// import { Link, graphql } from "gatsby"
import SEO from "../components/seo"

import Layout from "../components/layout"
// import SEO from "../components/seo"
// import Styles from "../styles/styles.css"

const BlogPlaceHolder = () => {
  // const { data } = this.props
  // const siteTitle = data.site.siteMetadata.title
  // const posts = data.allMarkdownRemark.edges

  return (
    // <Layout location={this.props.location} >
    <Layout>
      <SEO title="Anna Agoha's Blog" />
      <div id="placeHolderContent">
        <div id="placeHolderMessage">
          Coming very soon!
        </div>
        <div id="placeHolderImage">
          <img src="http://placekitten.com/g/300/300" alt="a little"></img>
        </div>
      </div>
    </Layout>
  )
}

export default BlogPlaceHolder


export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: {fields: id, order: DESC}) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            description
          }
        }
      }
    }
  }
`

// export const pageQuery = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     allMarkdownRemark(
//       sort: { fields: [fields___date], order: DESC }
//       filter: { fields: { slug: { regex: "^/blog/" } } }
//     ) {
//       edges {
//         node {
//           excerpt
//           fields {
//             slug
//             date(formatString: "D MMMM YYYY")
//           }
//           frontmatter {
//             title
//             description
//           }
//         }
//       }
//     }
//   }
// `