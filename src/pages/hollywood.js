import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import "../components/main.css"
import "../components/layout.css"

const hollywood = () => (
  <Layout>
    <Seo title="HOLLYWOOD Case Study" />
    <div className="case-study cssanimation sequence fadeInBottom">
      <div className="half-wrapper">
        <h6>Crafting a custom 3D experience</h6>
      </div>
      <p>
        <a
          href="https://hollywoodnitelighter.com"
          target="_blank"
          rel="noreferrer"
        >
          HOLLYWOOD →
        </a>
        <br />
        Role: Front End Engineering, 3D Design, Creative Direction
      </p>

      <div className="img-wrapper">
        <StaticImage
          src="https://rscbucket.s3.us-east-2.amazonaws.com/conjure/hollywood-laptop.jpg"
          className="hero-img"
          width={1280}
          quality={100}
          margin={0}
          formats={["auto", "webp"]}
          alt="hollywood nite lighter"
        />
      </div>

      <div className="half-wrapper">
        <h3>CHALLENGE</h3>
        <p>
          How do you refresh a brand that has done the same thing since 1948?
          <br /> Our strategy involved two main goals:
          <br />
          1. Highlight the impressive client base to build prospective client
          trust.
          <br />
          2. Use tools that are cutting edge in 2022.
          <br />
          We used several fun tools for this project, including Blender for 3D
          art, and THREE.JS for 3D development. We collaborated with the
          Hollywood Nite Lighter team to achieve a fun and luminous 3D
          searchlight spinning animation. The user can interact with the lights
          by clicking and dragging to control the spin. At the bottom of the
          experience, we highlight the client list using a rolling marquee. Fun,
          clean, and effective. <br />
          <br />
          <a
            href="https://hollywoodnitelighter.com"
            target="_blank"
            rel="noreferrer"
          >
            See for yourself →
          </a>
        </p>
      </div>

      <div className="button-container next">
        <Link to="/indigo">
          <button className="case-study-btn">Next</button>
        </Link>
      </div>
    </div>
  </Layout>
)

export default hollywood
