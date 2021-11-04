import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import "../components/main.css"
import "../components/layout.css"

const caya = () => (
  <Layout>
    <Seo title="CAYA Case Study" />
    <div className="case-study cssanimation sequence fadeInBottom">
      <div className="half-wrapper">
        <h6>Designing and launching a telehealth brand</h6>
      </div>
      <p>
        <a href="https://cayawellness.org" target="_blank" rel="noreferrer">
          CAYA →
        </a>
        <br />
        KPIs: qualified leads, bounce rate, organic traffic
      </p>

      <div className="img-wrapper">
        <StaticImage
          src="../images/caya-hero.png"
          className="hero-img"
          width={640}
          quality={100}
          margin={0}
          formats={["auto", "webp"]}
          alt="caya wellness"
          id="caya"
        />
      </div>

      <div className="half-wrapper">
        <h3>Challenge</h3>
        <p>
          We partnered with CAYA’s Founder + CEO, Dr. Courtney R. Cornick, to
          help guide them towards a future of virtual private practice by
          crafting a custom design system that spans the Web experience, client
          email feature, and branding. We wanted to create a welcoming space for
          Black women that brings the brand’s core value of “Come As You Are” to
          the center of their identity. By doing so, the new branding design
          lays a strong strategic and visual foundation for continued expansion
          of clients and business growth.
        </p>

        <h3>Outcome</h3>

        <div className="numbers">
          <h4>145</h4>
          <p>qualified leads in the first 3 months</p>
          <h4>28%</h4>
          <p>bounce rate much lower than the industry benchmark of 47%</p>
          <h4>12k</h4>
          <p>unique organic users in the first 3 months</p>
        </div>

        <Link to="/indigo">
          <p>Next →</p>
        </Link>
      </div>
    </div>
  </Layout>
)

export default caya
