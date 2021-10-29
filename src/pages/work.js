import React from 'react'
import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

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
                <p>Designing and launching a telehealth brand</p>
                <p>see more →</p>
              </div>

              <div className="item2">
                <div className="img-wrapper">
                  <StaticImage
                    src="../images/caya-desktop.png"
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
          </div>
        </Layout>
      </div>
    )
}

export default work
