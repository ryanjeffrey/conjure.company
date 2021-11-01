import React from 'react'
import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import "../components/main.css"
import "../components/layout.css"

const work = () => {
    return (
      <div>
        <Layout>
          <Seo title="Work" />
          <div className="case-studies-text cssanimation sequence fadeInBottom">
            <h3>Case Studies</h3>
            <h5>Selected digital experiences</h5>

            <div className="grid-container">
              <div className="item1">
                <h6>CAYA</h6>
                <p id="designing">Designing and launching a telehealth brand</p>
                <Link to="/caya">
                  <p id="see-more">see more →</p>
                </Link>
              </div>

              <div className="item2">
                <div className="img-wrapper">
                  <StaticImage
                    src="../images/caya-home-page.png"
                    className="hero-img"
                    width={1096}
                    quality={60}
                    margin={0}
                    formats={["auto", "webp", "avif"]}
                    alt="caya wellness"
                  />
                </div>
              </div>
            </div>

            <div className="case-study-spacer"></div>
            <div className="case-study-spacer-2"></div>

            <div className="grid-container">
              <div className="item2">
                <div className="img-wrapper">
                  <StaticImage
                    src="../images/indigo-home.png"
                    className="hero-img"
                    width={1096}
                    quality={100}
                    margin={0}
                    formats={["auto", "webp", "avif"]}
                    alt="indigo hair care"
                  />
                </div>
              </div>

              <div className="text-on-right">
                <div className="item1">
                  <h6>INDIGO</h6>
                  <p id="designing">
                    Designing an e-comm store for an established beauty brand
                  </p>
                  <Link to="/indigo">
                    <p id="see-more">see more →</p>
                  </Link>
                </div>
              </div>
            </div>

            <div className="case-study-spacer"></div>

            <div className="workflow-section">
              <h3 id="workflow">Workflow</h3>
                <div className="workflow-grid">
                  <div className="workflow-grid-item">
                    <span>01</span>
                    <h4>Discover</h4>
                    <p>
                      Analytics Research
                      <br />
                      Digital Strategy
                      <br />
                      Persona Development
                      <br />
                      User Research
                    </p>
                  </div>

                  <div className="workflow-grid-item">
                    <span>02</span>
                    <h4>Design</h4>
                    <p>
                      Content Creation
                      <br />
                      Interface Design (UI)
                      <br />
                      Motion Design
                      <br />
                      Prototyping
                      <br />
                      Usability Testing
                      <br />
                      User Experience (UX)
                      <br />
                      Wireframing
                    </p>
                  </div>
                  <div className="workflow-grid-item">
                    <span>03</span>
                    <h4>Develop</h4>
                    <p>
                      API + SDK
                      <br />
                      AWS Hosting
                      <br />
                      CMS Integration
                      <br />
                      CRM Integration
                      <br />
                      Mobile Development
                      <br />
                      Web Development
                    </p>
                  </div>
                  <div className="workflow-grid-item">
                    <span>04</span>
                    <h4>Deliver</h4>
                    <p>
                      Analytics + Reporting
                      <br />
                      Handoff + Training
                      <br />
                      Product Testing
                      <br />
                      Project Management
                    </p>
                  </div>
              </div>
            </div>
          </div>
        </Layout>
      </div>
    )
}

export default work
