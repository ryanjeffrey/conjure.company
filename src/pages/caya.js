import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/Hero"
import Cards from "../components/cards"
import "../components/main.css"

const caya = () => (
  <Layout>
    <Seo title="CAYA Case Study" />
    <div className="">
      <h6>Designing and launching a telehealth brand</h6>
      <p>CAYA →
          <br/>
          Timeline: 8 weeks
          <br/>
          KPIs: qualified leads, bounce rate, organic traffic
      </p>
    </div>
  </Layout>
)

export default caya
