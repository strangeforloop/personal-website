import React from "react"
import footer from "./footer.module.css"
// import { Link } from "gatsby"

const Footer = () => {
  return (
    <footer className={footer.footer}>
      <div className={footer.message}>
            Blog made with love and Gatsby by Anna Agoha.
      </div>
    </footer>
  )
}

export default Footer