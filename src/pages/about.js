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
  SiSass,
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
              Conjure is the development studio of Ryan Smith. With an eye for
              detail and a passion for design, I develop thoughtful websites for
              business. I work hard to make digital products feel effortless. As if by magic.
            </p>
            <h3>Links:</h3>
            <div className="icons">
              <a href="https://www.linkedin.com/in/ryan-smith-219614230/">
                <SiLinkedin size="40px" color="#0072b1" />
              </a>
            </div>
            <div className="icons">
              <a href="https://github.com/ryanjeffrey/">
                <SiGithub size="40px" color="#6e5494" />
              </a>
            </div>
            <div className="spacer"></div>
            <h3>Skills:</h3>
            <div className="icons">
              <SiJavascript size="40px" color />
            </div>
            <div className="icons">
              <SiReact size="40px" />
            </div>
            <div className="icons">
              <SiCss3 size="40px" />
            </div>
            <div className="icons">
              <SiAdobephotoshop size="40px" />
            </div>
            <div className="icons">
              <SiGatsby size="40px" />
            </div>
            <div className="icons">
              <SiSass size="40px" />
            </div>
            <div className="spacer"></div>
            <Link to="/contact">
              <button>Learn More →</button>
            </Link>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default About
