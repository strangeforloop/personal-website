// import React from "react"
// import { Link, graphql } from "gatsby"

// import Layout from "../components/layout"
// import SEO from "../components/seo"

// class BlogIndex extends React.Component {
//   render() {
//     const { data } = this.props
//     const siteTitle = data.site.siteMetadata.title
//     const posts = data.allMarkdownRemark.edges

//     return (
//       <Layout location={this.props.location} title={siteTitle}>
//         <SEO title="All posts" />
//         <section className="container max-w-5xl mx-auto mt-5 px-4 lg:px-0 lg:py-4" id="blogPage">
//           <h1 className="text-3xl mb-5 font-thin">Blog posts</h1>
//           {posts.map(({ node }) => {
//             const title = node.frontmatter.title || node.fields.slug
//             return (
//               <div key={node.fields.slug} className="mb-6">
//                 <p className="text-sm text-gray-600">{node.fields.date}8p
//                 |</p>
//                 <h2 className="text-xl text-blue-500 font-normal hover:underline">
//                   <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
//                     {title}
//                   </Link>
//                 </h2>
//                 <p
//                   className="mt-1 text-gray-700"
//                   dangerouslySetInnerHTML={{
//                     __html: node.frontmatter.description || node.excerpt,
//                   }}
//                 />
//               </div>
//             )
//           })}
//         </section>
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
