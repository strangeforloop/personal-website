import React from "react"
import NavigationMenu from "./navigation-menu"
import Footer from "../components/footer"
import layoutStyle from "./layout.module.css"

const Layout = ({ wide, children }) => {
  return (
    <div className={layoutStyle.wrapper}>
      <header className={layoutStyle.header}>
        <NavigationMenu />
      </header>
      {/* <div>{wide}</div> */}
      <main className={layoutStyle.body}>{children}</main>
      <Footer className={layoutStyle.dooter}/>
    </div>
  )
}

export default Layout