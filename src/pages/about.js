import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "../components/main.css"
import "../components/layout.css"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import {
  SiAdobephotoshop,
  SiCss3,
  SiGatsby,
  SiGithub,
  SiJavascript,
  SiLinkedin,
  SiReact,
  SiFigma,
  SiAmazonaws,
  SiStackoverflow,
  SiVisualstudiocode,
  SiGoogle,
} from "react-icons/si"

const About = () => {

  return (
    <div>
      <Layout>
        <Seo title="About" />
        <div className="container cssanimation sequence fadeInBottom">
          <div className="about-wrapper">
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

          <div className="bio-wrapper">
            <p id="bio">
              <span>conjure</span> is the development studio of Ryan Smith. I'm
              a creative entrepreneur who loves making clean digital things with
              code. With a background in startup management, music, and graphic
              design, I have a natural inclination to make things and build
              systems.
              <br />
              <br />
              Before I wrote my first line of code, I explored a learning
              opportunity in digital marketing. After that marketing course I
              redesigned my team’s e-commerce store and one thing became clear:
              every company is a software company.
              <br />
              <br /> With an upgrade in software and stronger web presence, we
              increased sales by 150% that year. The excitement of growing a
              business coincided with a newfound passion for making websites. I
              designed several websites for various projects, and digging deeper
              into development proved valuable in a very tangible way. <br />
              <br />
              Once the pandemic hit, my newly hybrid role afforded me more time
              to dig even deeper. After a bootcamp and several self-guided
              development courses, I knew that I'd be coding for the rest of my
              career. My goal is to do the heavy lifting to make digital
              products feel effortless. As if by magic.
            </p>

            <div className="skill-icon-wrapper">
              <section className="grid-container skills">
                <div className="grid-item icons">
                  <a href="https://www.linkedin.com/in/ryan-smith-219614230/">
                    <SiLinkedin size="40px" color="#0072b1" />
                  </a>
                </div>
                <div className="grid-item icons">
                  <a href="https://github.com/ryanjeffrey/">
                    <SiGithub size="40px" color="#6e5494" />
                  </a>
                </div>
                <div className="grid-item icons">
                  <SiJavascript size="40px" color />
                </div>
                <div className="grid-item icons">
                  <SiReact size="40px" />
                </div>
                <div className="grid-item icons">
                  <SiCss3 size="40px" />
                </div>
                <div className="grid-item icons">
                  <SiAdobephotoshop size="40px" />
                </div>
                <div className="grid-item icons">
                  <SiGatsby size="40px" />
                </div>
                <div className="grid-item icons">
                  <SiFigma size="40px" />
                </div>
                <div className="grid-item icons">
                  <SiAmazonaws size="40px" />
                </div>
                <div className="grid-item icons">
                  <SiStackoverflow size="40px" />
                </div>
                <div className="grid-item icons">
                  <SiVisualstudiocode size="40px" />
                </div>
                <div className="grid-item icons">
                  <SiGoogle size="40px" />
                </div>
              </section>
            </div>
            <Link to="/contact">
              <button id="about-button">Learn More</button>
            </Link>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default About
