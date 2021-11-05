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
              Our team brings brands to life across digital experiences.
            </h2>
          </div>

          <div className="">
            <StaticImage
              src="../images/rsc-web-2.jpg"
              className="hero-img"
              width={560}
              quality={100}
              margin={0}
              formats={["auto", "webp", "avif"]}
              alt=""
              id=""
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
              
              <span>Process</span> <br />
              We believe a brand’s core values are essential to its design. Our
              strategy-first process ensures seamless collaboration, ample
              communication, actionable feedback, and bespoke design work.{" "}
              <br />
              <br />
              <span>Results</span> <br />
              We partner with businesses to craft the visual language that will
              define their social impact. Our approach to design is strategic,
              goals-oriented, and in full service to the success of our clients.{" "}
              <br />
              <br />
              <span>Let’s create a better future together.</span>
            </p>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default About
