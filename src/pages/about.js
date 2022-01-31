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
            <h2>Our team brings design to life - as if by magic.</h2>
          </div>

          <div className="">
            <StaticImage
              src="https://rscbucket.s3.us-east-2.amazonaws.com/conjure/headshot-2022-web.jpg"
              className=""
              width={480}
              quality={100}
              margin={0}
              formats={["auto", "webp"]}
              alt="headshot"
              id=""
            />
          </div>

          <div className="half-wrapper">
            <p id="bio">
              Conjure is the web development studio of Ryan Smith. With a detail-oriented mind for design, we love creating thoughtful, effective websites. 
              <br />
            </p>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default About
