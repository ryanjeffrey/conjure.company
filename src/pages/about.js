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
        <div className="container">
          <div className="about-wrapper cssanimation sequence fadeInBottom">
            <h2>We are a couple of designers and dreamers</h2>

            <div className="img-wrapper">
              <StaticImage
                src="../images/rsc-wedding-web.jpg"
                className="hero-img"
                width={640}
                quality={100}
                margin={0}
                formats={["auto", "webp", "avif"]}
                alt="caya wellness"
                id="caya"
              />
            </div>
          
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default About
