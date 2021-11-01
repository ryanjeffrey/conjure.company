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
            <h2>
              Our team brings brands to life across digital experiences. We craft optimized user experiences, stunning designs, and solid
              development solutions for business websites.
            </h2>
          </div>

          <div className="">
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

          <div className="half-wrapper">
            <p id="bio">
              <span>Our Difference</span> <br />
              We are a diverse husband and wife team of creative thinkers. Our
              collective experience includes more than 20 years spent designing
              and collaborating on projects in music, art, ecommerce and digital
              experiences. <br />
              <br />
              <span>Results</span> <br />
              We partner with businesses to craft the visual language that will
              define their social impact. Our approach to design is strategic,
              goals-oriented, and in full service to the success of our clients.{" "}
              <br />
              <br />
              <span>Process</span> <br />
              We believe a brand’s core values are essential to its design. Our
              strategy-first process ensures seamless collaboration, ample
              communication, actionable feedback, and bespoke design work.{" "}
              <br />
              <br />
              <span>Commitment</span>
              <br />
              We know that great ideas are just one part of the creative
              challenge; bringing it all to life is the other. Our respect for
              the craft means we are consistently meticulous, and consider every
              detail–no matter how small.
              <br />
              <br />
              Let’s create a better future together.
            </p>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default About
