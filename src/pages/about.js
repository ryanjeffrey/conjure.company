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
  SiBlender,
  SiVisualstudiocode,
  SiGoogle,
} from "react-icons/si"

const About = () => {

  return (
    <div>
      <Layout>
        <Seo title="About" />
        <div className="container about-page cssanimation sequence fadeInBottom">
          <div className="about-wrapper">
            <div className="headshot-with-greeting">
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
              <h3 className="greeting">Hi! I'm Ryan (he/him)</h3>
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
                <br />
                With an upgrade in software and stronger web presence, we
                increased sales by 150% that year. The excitement of growing a
                business coincided with a newfound passion for making websites. I
                designed several websites for various projects, and digging deeper
                into development proved valuable in a very tangible way.
                <br />
                <br />
                After engineering several projects for clients on a freelance
                basis, I knew that I'd be coding for the rest of my career. My
                experience led me to create my own company, <span>conjure</span>.
                Our goal is to do the heavy lifting to make digital products feel
                effortless. As if by magic.
              </p>
            </div>
          </div>

          <div className="skill-icon-wrapper">
            <section className="grid-container skills">
              <div className="grid-item icons tooltip">
                <a href="https://www.linkedin.com/in/ryan-jeffrey-smith/">
                  <SiLinkedin size="40px" color="#0072b1" />
                </a>
                <span className="tooltiptext">LinkedIn</span>
              </div>

              <div className="grid-item icons tooltip">
                <a href="https://github.com/ryanjeffrey/">
                  <SiGithub size="40px" color="#6e5494" />
                </a>
                <span className="tooltiptext">GitHub</span>
              </div>
              <div className="grid-item icons tooltip">
                <SiReact size="40px" />
                  <span className="tooltiptext">React</span>
              </div>
              <div className="grid-item icons tooltip">
                <SiJavascript size="40px" />
                <span className="tooltiptext">Javascript</span>
              </div>
              <div className="grid-item icons tooltip">
                <SiCss3 size="40px" />
                <span className="tooltiptext">CSS</span>
              </div>
              <div className="grid-item icons tooltip">
                <SiAdobephotoshop size="40px" />
                <span className="tooltiptext">Photoshop</span>
              </div>
              <div className="grid-item icons tooltip">
                <SiGatsby size="40px" />
                <span className="tooltiptext">Gatsby</span>
              </div>
              <div className="grid-item icons tooltip">
                <SiFigma size="40px" />
                <span className="tooltiptext">Figma</span>
              </div>
              <div className="grid-item icons tooltip">
                <SiAmazonaws size="40px" />
                <span className="tooltiptext">aws</span>
              </div>
              <div className="grid-item icons tooltip">
                <SiBlender size="40px" />
                <span className="tooltiptext">Blender</span>
              </div>
              <div className="grid-item icons tooltip">
                <SiVisualstudiocode size="40px" />
                <span className="tooltiptext">VSCode</span>
              </div>
              <div className="grid-item icons tooltip">
                <SiGoogle size="40px" />
                <span className="tooltiptext">Google</span>
              </div>
            </section>
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
