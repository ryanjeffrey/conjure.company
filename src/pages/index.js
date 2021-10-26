import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import "../assets/css/main.css"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className="container">
      <h1 id="hero-text">
        Websites
        <br />
        for
        <br />
        business
      </h1>
      <div id="bespoke">
        <h2>We design bespoke web experiences</h2>
      </div>
    </div>
  </Layout>
)

export default IndexPage
