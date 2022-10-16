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
            <div className="grid-container">
              <div className="item2 flip">
                <div className="img-wrapper">
                  <StaticImage
                    src="https://rscbucket.s3.us-east-2.amazonaws.com/conjure/simone-laptop.jpg"
                    className="hero-img"
                    width={1096}
                    quality={60}
                    margin={0}
                    formats={["auto", "webp", "avif"]}
                    alt="simone chagoya artist website"
                  />
                </div>
              </div>

              <div className="item1 text-on-right">
                <h6>SIMONE CHAGOYA</h6>
                <p id="designing">Crafting a custom artist portfolio with 3D gallery</p>

                <Link to="/simone">
                  <button className="see-case-study">See case study</button>
                </Link>
              </div>
            </div>

            <div className="case-study-spacer"></div>
            <div className="case-study-spacer-2"></div>

            <div className="grid-container">
              <div className="item2 flip">
                <div className="img-wrapper">
                  <StaticImage
                    src="https://rscbucket.s3.us-east-2.amazonaws.com/conjure/hollywood-laptop.jpg"
                    className="hero-img"
                    width={1096}
                    quality={60}
                    margin={0}
                    formats={["auto", "webp", "avif"]}
                    alt="hollywood nite lighter"
                  />
                </div>
              </div>

              <div className="item1 text-on-right">
                <h6>HOLLYWOOD</h6>
                <p id="designing">Crafting a custom 3D experience</p>

                <Link to="/hollywood">
                  <button className="see-case-study">See case study</button>
                </Link>
              </div>
            </div>

            <div className="case-study-spacer"></div>
            <div className="case-study-spacer-2"></div>

            <div className="grid-container">
              <div className="item2 flip">
                <div className="img-wrapper">
                  <StaticImage
                    src="https://rscbucket.s3.us-east-2.amazonaws.com/caya-laptop.png"
                    className="hero-img"
                    width={1096}
                    quality={60}
                    margin={0}
                    formats={["auto", "webp", "avif"]}
                    alt="caya wellness"
                  />
                </div>
              </div>

              <div className="item1 text-on-right">
                <h6>CAYA</h6>
                <p id="designing">Designing and launching a telehealth brand</p>

                <Link to="/caya">
                  <button className="see-case-study">See case study</button>
                </Link>
              </div>
            </div>

            <div className="case-study-spacer"></div>
            <div className="case-study-spacer-2"></div>

            <div className="grid-container">
              <div className="item2">
                <div className="img-wrapper">
                  <StaticImage
                    src="https://rscbucket.s3.us-east-2.amazonaws.com/indigo-main.jpg"
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
                    Designing an ecomm store for an established beauty brand
                  </p>

                  <Link to="/indigo">
                    <button className="see-case-study">See case study</button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="case-study-spacer"></div>

            <div className="workflow-section">
              <h3 id="workflow">WORKFLOW</h3>
              <div className="workflow-grid">
                <div className="workflow-grid-item">
                  <h5 className="workflow-numbers">01</h5>
                  <h4>Design</h4>
                  <p>
                    Motion Design
                    <br />
                    Prototyping
                    <br />
                    Usability Testing
                    <br />
                    User Experience (UX)
                  </p>
                </div>
                <div className="workflow-grid-item">
                  <h5 className="workflow-numbers">02</h5>
                  <h4>Develop</h4>
                  <p>
                    API + SDK
                    <br />
                    AWS Hosting
                    <br />
                    CMS Integration
                    <br />
                    Mobile Development
                    <br />
                    Web Development
                  </p>
                </div>
                <div className="workflow-grid-item">
                  <h5 className="workflow-numbers">03</h5>
                  <h4>Deliver</h4>
                  <p>
                    Analytics + Reporting
                    <br />
                    Product Testing
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
