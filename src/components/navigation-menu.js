import React from "react"
import { Link } from "gatsby"
// import "../styles/style.scss"
import navStyle from "./navigation-menu.module.scss"

const NavigationMenu = () => {
  return (
    <div className={navStyle.navBar}>
      <div className={navStyle.innerHeader}>
        <div id="logo">
          <Link to={`/`}>
          </Link>
        </div>
        <div>
          <Link
            to={`/`}
            className={navStyle.navLink}
          >
            home
          </Link>
          <Link
            to={`/blog/`}
            className={navStyle.navLink}
          >
            blog
          </Link>
        </div>
      </div>
    </div >
  )
}

export default NavigationMenu
