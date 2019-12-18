import React from "react"
import { Link, graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
// import Styles from "../styles/styles.css"

class BlogPlaceHolder extends React.Component {
  // const BlogPlaceHolder = () => {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges
    // console.log(this);
    return (
      <Layout location={this.props.location} >
        <SEO title="Anna Agoha's Blog Posts" />
        <section>
          <h1>Blog Posts</h1>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <div key={node.fields.slug} className="mb-6">
                <p className="">{node.fields.date}</p>
                <h2 className="">
                  <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                    {title}
                  </Link>
                </h2>
                <p
                  className=""
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </div>
            )
          })}
        </section>
      </Layout>
    )
  }
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


// class BlogPlaceHolder extends React.Component {
//   // const BlogPlaceHolder = () => {
//   render() {
//     const { data } = this.props
//     const siteTitle = data.site.siteMetadata.title
//     const posts = data.allMarkdownRemark.edges
//     console.log(this);
//     return (
//       <Layout location={this.props.location} >
//         <SEO title="Anna Agoha's Blog Posts" />
//         <div id="placeHolderContent">
//           <div id="placeHolderMessage">
//             Coming very soon!
//         </div>
//           <div id="placeHolderImage">
//             <img src="http://placekitten.com/g/300/300" alt="a little"></img>
//           </div>
//         </div>
//       </Layout>
//     )
//   }
// }

// export default BlogPlaceHolder


// export const pageQuery = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     allMarkdownRemark(sort: {fields: id, order: DESC}) {
//       edges {
//         node {
//           excerpt
//           fields {
//             slug
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

