import React from "react"
import { Link } from "gatsby"
// import Styles from "../styles/styles.css"
import "../styles/style.css"

const NavigationMenu = () => {
  return (
    <div className="content" id="navBar">
      <div id="inner-header">
        {/* <div id="logo">
          <Link to={`/`}>
          </Link>
        </div> */}
        <div id="navigationLinksContainer">
          <Link
            to={`/`}
            className="navLink"
          >
            Home
          </Link>
          {/* <Link
            to={`/blog/`}
            className="navLink"
          >
            Blog
          </Link> */}
          <Link
            to={`/blogPlaceHolder/`}
            className="navLink"
          >
            Blog
          </Link>
        </div>
      </div>
    </div >
  )
}

export default NavigationMenu
