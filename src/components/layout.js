import React from "react"
import NavigationMenu from "./navigation-menu"
import Footer from "../components/footer"
import layoutStyle from "./layout.module.css"
// import "style.scss"

const Layout = ({ wide, children }) => {
  return (
    <div className={layoutStyle.main}>
      <header className={layoutStyle.header}>
        <NavigationMenu />
      </header>
      {/* <div>{wide}</div> */}
      <main className={layoutStyle.body}>{children}</main>
      <Footer className={layoutStyle.footer} />
    </div>
  )
}

export default Layout