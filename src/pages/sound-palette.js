import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import "../components/main.css"
import "../components/layout.css"

const soundPalette = () => (
  <Layout>
    <Seo title="SOUND PALETTE Case Study" />
    <div className="case-study cssanimation sequence fadeInBottom">
      <div className="half-wrapper">
        <h6>Building a 3D synesthetic playground</h6>
      </div>
      <p>
        <a href="https://sound-palette.netlify.app" target="_blank" rel="noreferrer">
          SOUND PALETTE →
        </a>
        <br />
        Role: Full Stack Engineering, Product Management, Creative Direction
      </p>

      <div className="img-wrapper">
        <StaticImage
          src="https://rscbucket.s3.us-east-2.amazonaws.com/conjure/sound-palette-hero.jpg"
          className="hero-img"
          width={1280}
          quality={100}
          margin={0}
          formats={["auto", "webp"]}
          alt="sound palette"
        />
      </div>

      <div className="half-wrapper">
        <h3>CHALLENGE</h3>
        <p>
          Sound Palette started as our idea to build a synesthetic playground in 3D. We wanted to connect color to sound and allow the user to create their own palette. The result is a mesmerizing application that is fun and addictive to use. This app was built during a one-week Agile sprint with a team of 5 full-stack engineers.
          <br />
          <br />
          It started with a simple idea - when a user hits a note on the piano keyboard, a background color would be rendered to the screen. When a user hits multiple notes at a time, a gradient would render instead of a solid color. That simple idea was then expounded upon and developed with the help of the team. From a coding perspective, we created an array that holds HEX values for the current color. We used React Piano for the musical keyboard. This allows the user to use their QWERTY keyboard as a little digital piano. We also have a variety of sounds available via a dropdown menu. We used Soundfont Provider for this audio library. Finally, we used React Three Fiber to render the 3D elements that the user can adjust to their heart's content.
        </p>
      </div>

      <div className="button-container next">
        <Link to="/simone">
          <button className="case-study-btn">Next</button>
        </Link>
      </div>
    </div>
  </Layout>
)

export default soundPalette
