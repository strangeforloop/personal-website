import React from "react"
import footerStyle from "./footer.module.css"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <footer className={footerStyle.footer}>
      <div className={footerStyle.message}>
        Website made with love and            
        <Link
          to={`/`}
          className={footerStyle.footerLink}
        > {" "}
          Gatsby
        </Link>
        {" "} by Anna Agoha.
      </div>
    </footer>
  )
}

export default Footer