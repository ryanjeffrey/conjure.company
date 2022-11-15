import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/Hero"
import "../components/main.css"
import Work from "../components/Work"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <Work />
  </Layout>
)

export default IndexPage
