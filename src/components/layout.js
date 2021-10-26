/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

import "./layout.css"
import "../assets/css/main.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div>
        <nav>
          <div id="nav-inner">
            <h1>RSC</h1>
            <ul>
              <li>
                <h2>Work</h2>
              </li>
              <li>
                <h2>About</h2>
              </li>
              <li>
                <h2>Contact</h2>
              </li>
            </ul>
          </div>
        </nav>
        <main>{children}</main>
        <footer
          style={{
            color: "#F7F4F0",
            textAlign: "center",
          }}
        >
          <p>
            © {new Date().getFullYear()} RSC CREATIVE LLC
            <br /> CHICAGO, ILLINOIS
          </p>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
