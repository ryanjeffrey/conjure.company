import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/Hero"
import Cards from "../components/cards"
import "../components/main.css"
import "../components/layout.css"

const indigo = () => (
  <Layout>
    <Seo title="INDIGO Case Study" />
    <div className="case-study">
      <div className="half-wrapper">
        <h6>Designing an e-comm store for an established beauty brand</h6>
      </div>
      <p>
        INDIGO →
        <br />
        Timeline: 5 weeks
        <br />
        KPIs: conversions, average order value, organic traffic
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Molestie
          at elementum eu facilisis sed odio. Et egestas quis ipsum suspendisse
          ultrices gravida dictum fusce. Tincidunt augue interdum velit euismod.
          Consequat mauris nunc congue nisi. Duis ultricies lacus sed turpis
          tincidunt id.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Molestie
          at elementum eu facilisis sed odio. Et egestas quis ipsum suspendisse
          ultrices gravida dictum fusce. Tincidunt augue interdum velit euismod.
          Consequat mauris nunc congue nisi. Duis ultricies lacus sed turpis
          tincidunt id.
        </p>

        <h3>Outcome</h3>

        <div className="numbers">
          <h4>145</h4>
          <p>qualified leads in the first 3 months</p>
          <h4>94%</h4>
          <p>bounce rate much lower than the industry benchmark</p>
          <h4>12k</h4>
          <p>unique organic users in the first 3 months</p>
        </div>

        <Link to="/caya">
          <p>← Previous</p>
        </Link>
      </div>
    </div>
  </Layout>
)

export default indigo
