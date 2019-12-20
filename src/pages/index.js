import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import homeStyle from "../styles/home.module.css"
// import "../styles/styles.css"

class Index extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle} >
        <SEO title="Anna Agoha's website and blog" />
        <div className={homeStyle.homeContent}>
          <section className={`${homeStyle.content} ${homeStyle.introSection}`}>
            <h1 id="intro-text">
              Hello, my name is<br />
              <span id="name">Anna Agoha</span>.
            </h1>
          </section>
          <main className={homeStyle.bottomSection}>
            <div className={`${homeStyle.content} ${homeStyle.blurb}`}>
                <p>
                  I am a <span className={homeStyle.occupation}>full-stack engineer</span> who believes in the power of technology to make positive changes in the world. My passion for finding creative solutions to problems is what led me into the profession of software engineering.
                </p>
                <p className={homeStyle.connectMessage}>
                  Feel free to connect with me on{" "}
                  <a
                    className={homeStyle.connectLink}
                    href="https://www.linkedin.com/in/anna-agoha"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>{" "}
                  and{" "}
                  <a
                    className={homeStyle.connectLink}
                    href="https://github.com/strangeforloop"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                  .
                </p>
              </div>
          </main>
        </div>
      </Layout >
    )
  }
}

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`