import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import "../components/main.css"
import "../components/layout.css"

const indigo = () => (
  <Layout>
    <Seo title="INDIGO Case Study" />
    <div className="case-study cssanimation sequence fadeInBottom">
      <div className="half-wrapper">
        <h6>Designing an e-comm store for an established beauty brand</h6>
      </div>
      <p>
        <a href="https://indigohaircare.com" target="_blank" rel="noreferrer">
          INDIGO →
        </a>
        <br />
        Timeline: 5 weeks
        <br />
        KPIs: revenue, average order value, conversion rate
      </p>

      <div className="img-wrapper">
        <StaticImage
          src="../images/indigo-hero.png"
          className="hero-img"
          width={640}
          quality={100}
          margin={0}
          formats={["auto", "webp"]}
          alt="indigo hair care"
          id="indigo"
        />
      </div>

      <div className="half-wrapper">
        <h3>Challenge</h3>
        <p>
          We partnered with INDIGO to reposition and evolve the brand to better
          serve the next generation of beauty professionals. We did a deep dive
          into the history of the brand, the competitive landscape, and how we
          could best serve their current clients as well as future clients.
          Through our brand strategy, visual identity, and art direction, we
          arrived at a youthful, vibrant and contemporary identity appropriate
          for this legendary brand.
        </p>

        <h3>Outcome</h3>

        <div className="numbers">
          <h4>110%</h4>
          <p>increase in revenue (Q1 post-launch)</p>
          <h4>$77.86</h4>
          <p>average order value</p>
          <h4>8.82%</h4>
          <p>conversion rate more than double the industry benchmark of 3.8%</p>
        </div>

        <Link to="/caya">
          <p>← Previous</p>
        </Link>
      </div>
    </div>
  </Layout>
)

export default indigo
