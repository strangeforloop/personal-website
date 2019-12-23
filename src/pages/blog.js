import React from "react"
import { Link, graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import blogStyle from "../styles/blogPage.module.css"

class BlogPlaceHolder extends React.Component {
  // const BlogPlaceHolder = () => {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} >
        <SEO title={siteTitle} />
        <div className={blogStyle.placeHolderWrapper}>
          <div className={blogStyle.content}>
            <p className={blogStyle.pageTitle}>Writings</p>
            <section className={blogStyle.allPosts}>
              {posts.map(({ node }) => {
                const title = node.frontmatter.title || node.fields.slug
                return (
                  <div key={node.fields.slug} className={blogStyle.post}>
                    <p className="">{node.fields.date}</p>
                    <h2 className="">
                      <Link className={blogStyle.postTitle} to={`/blog${node.fields.slug}`}>
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
          </div>
          <div className={blogStyle.placeHolderSpace}>
          </div>
        </div>
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