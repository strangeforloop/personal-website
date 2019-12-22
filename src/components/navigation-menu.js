import React from "react"
import { Link } from "gatsby"
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
            home
          </Link>
          <Link
            to={`/blog/`}
            className="navLink"
          >
            blog
          </Link>
        </div>
      </div>
    </div >
  )
}

export default NavigationMenu
