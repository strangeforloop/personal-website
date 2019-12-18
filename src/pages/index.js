import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import Styles from "../styles/styles.css"
// import "../styles/styles.css"

class Index extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      < Layout location={this.props.location} title={siteTitle} >
        <SEO title="Anna Agoha's website and blog" />
        <div id="home-content">
          <header className="content" id="intro-section">
            <h1 id="intro-text">
              Hello, my name is<br />
              <span id="name">Anna Agoha</span>.
            </h1>
          </header>
          <section id="bottomSection">
            <div id="blurb" className="content">
              <p>
                I am a <span id="occupation">full-stack engineer</span> who believes in the power of technology to make positive changes in the world. My passion for finding creative solutions to problems is what led me into the profession of software engineering.
              </p>
              <p id="connectMessage">
                Feel free to connect with me on{" "}
                <a
                  className="connectLink"
                  href="https://www.linkedin.com/in/anna-agoha"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>{" "}
                and{" "}
                <a
                  className="connectLink"
                  href="https://github.com/strangeforloop"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                .
              </p>
            </div>
          </section>
        </div>
      </Layout >
    )
  }
}

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

// import Bio from "../components/bio"
// import Layout from "../components/layout"
// import SEO from "../components/seo"
// import { rhythm } from "../utils/typography"

// class BlogIndex extends React.Component {
//   render() {
//     const { data } = this.props
//     const siteTitle = data.site.siteMetadata.title
//     const posts = data.allMarkdownRemark.edges

//     return (
//       <Layout location={this.props.location} title={siteTitle}>
//         <SEO title="All posts" />
//         <Bio />
//         {posts.map(({ node }) => {
//           const title = node.frontmatter.title || node.fields.slug
//           return (
//             <article key={node.fields.slug}>
//               <header>
//                 <h3
//                   style={{
//                     marginBottom: rhythm(1 / 4),
//                   }}
//                 >
//                   <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
//                     {title}
//                   </Link>
//                 </h3>
//                 <small>{node.frontmatter.date}</small>
//               </header>
//               <section>
//                 <p
//                   dangerouslySetInnerHTML={{
//                     __html: node.frontmatter.description || node.excerpt,
//                   }}
//                 />
//               </section>
//             </article>
//           )
//         })}
//       </Layout>
//     )
//   }
// }

// export default BlogIndex

// export const pageQuery = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
//       edges {
//         node {
//           excerpt
//           fields {
//             slug
//           }
//           frontmatter {
//             date(formatString: "MMMM DD, YYYY")
//             title
//             description
//           }
//         }
//       }
//     }
//   }
// `