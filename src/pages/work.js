import React from 'react'
import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const work = () => {
    return (
      <div>
        <Layout>
          <Seo title="Work" />
          <div className="case-studies-text">
            <h3>Case Studies</h3>
            <h5>Selected digital experiences</h5>

            <div className="grid-container">
              <div className="item1">
                <h6>CAYA</h6>
                <p id="designing">Designing and launching a telehealth brand</p>
                <Link to="/caya"><p id="see-more">see more →</p></Link>
              </div>

              <div className="item2">
                <div className="img-wrapper">
                  <StaticImage
                    src="../images/caya-home.png"
                    className="hero-img"
                    width={1096}
                    quality={100}
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
                  <p id="see-more">see more →</p>
                </div>
              </div>
            </div>
          </div>
        </Layout>
      </div>
    )
}

export default work
