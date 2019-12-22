import React from "react"
import NavigationMenu from "../navigation-menu/navigation-menu"
import Footer from "../components/footer/footer"
import layoutStyle from "./layout.module.css"

const Layout = ({ wide, children }) => {
  return (
    <div className={layoutStyle.html}>
      <header id="header">
        <NavigationMenu />
      </header>
      <div>{wide}</div>
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout