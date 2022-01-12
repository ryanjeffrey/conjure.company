import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "../components/main.css"
import "../components/layout.css"
import { StaticImage } from "gatsby-plugin-image"

const About = () => {
  return (
    <div>
      <Layout>
        <Seo title="About" />
        <div className="container cssanimation sequence fadeInBottom">
          <div className="about-wrapper ">
            <h2>
              Our team brings design to life - as if by magic.
            </h2>
          </div>

          <div className="">
            
          </div>

          <div className="half-wrapper">
            <p id="bio">
              We believe a brand’s core values are essential to its design. Our
              strategy-first process ensures seamless collaboration, ample
              communication, actionable feedback, and bespoke development.
              <br />
              
            </p>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default About
