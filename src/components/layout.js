import React from "react"
import NavigationMenu from "./navigation-menu"
import Footer from "../components/footer"

const Layout = ({ wide, children }) => {
  return (
    <div className="text-gray-900">
      <header id="header">
        <NavigationMenu />
      </header>
      {/* <div>{wide}</div> */}
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
// import React from "react"
// import { Link } from "gatsby"

// import { rhythm, scale } from "../utils/typography"

// class Layout extends React.Component {
//   render() {
//     const { location, title, children } = this.props
//     const rootPath = `${__PATH_PREFIX__}/`
//     let header

//     if (location.pathname === rootPath) {
//       header = (
//         <h1
//           style={{
//             ...scale(1.5),
//             marginBottom: rhythm(1.5),
//             marginTop: 0,
//           }}
//         >
//           <Link
//             style={{
//               boxShadow: `none`,
//               textDecoration: `none`,
//               color: `inherit`,
//             }}
//             to={`/`}
//           >
//             {title}
//           </Link>
//         </h1>
//       )
//     } else {
//       header = (
//         <h3
//           style={{
//             fontFamily: `Montserrat, sans-serif`,
//             marginTop: 0,
//           }}
//         >
//           <Link
//             style={{
//               boxShadow: `none`,
//               textDecoration: `none`,
//               color: `inherit`,
//             }}
//             to={`/`}
//           >
//             {title}
//           </Link>
//         </h3>
//       )
//     }
//     return (
//       <div
//         style={{
//           marginLeft: `auto`,
//           marginRight: `auto`,
//           maxWidth: rhythm(24),
//           padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
//         }}
//       >
//         <header>{header}</header>
//         <main>{children}</main>
//         <footer>
//           © {new Date().getFullYear()}, Built with
//           {` `}
//           <a href="https://www.gatsbyjs.org">Gatsby</a>
//         </footer>
//       </div>
//     )
//   }
// }

// export default Layout








// import React from "react"
// import NavigationMenu from "./navigation-menu"
// import Footer from "../components/footer"

// const Layout = ({ wide, children }) => {
//   return (
//     <div className="text-gray-900">
//       <header id="header">
//         <NavigationMenu />
//       </header>
//       {/* <div>{wide}</div> */}
//       <main>{children}</main>
//       <Footer />
//     </div>
//   )
// }

// export default Layout
