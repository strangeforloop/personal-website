import React from "react"
import footerStyle from "./footer.module.css"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <footer id="footer" className={footerStyle.message}>
      Website made with love and            
      <Link
        to={`/`}
        className={footerStyle.footerLink}
      > {" "}
        Gatsby
      </Link>
      {" "} by Anna Agoha.
    </footer>
  )
}

export default Footer