import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import "../components/main.css"
import "../components/layout.css"

const indigo = () => (
  <Layout>
    <Seo title="INDIGO Case Study" />
    <div className="case-study cssanimation sequence fadeInBottom">
      <div className="half-wrapper">
        <h6>Designing an ecomm store for an established beauty brand</h6>
      </div>
      <p>
        <a href="https://indigohaircare.com" target="_blank" rel="noreferrer">
          INDIGO →
        </a>
        <br />
        Role: Squarespace Development, Web Design, Art Direction
      </p>

      <div className="img-wrapper">
        <StaticImage
          src="https://rscbucket.s3.us-east-2.amazonaws.com/indigo-main.jpg"
          className="hero-img"
          width={1280}
          quality={100}
          margin={0}
          formats={["auto", "webp"]}
          alt="indigo hair care"
          id="caya"
        />
      </div>

      <div className="half-wrapper">
        <h3>CHALLENGE</h3>
        <p>
          We partnered with INDIGO to reposition and evolve the brand to better
          serve the next generation of beauty professionals. We did a deep dive
          into the history of the brand, the competitive landscape, and how we
          could best serve their current and future clients. Through our brand
          strategy, visual identity, and art direction, we arrived at a
          youthful, vibrant and contemporary identity appropriate for this
          legendary brand. After launch, e-commerce sales grew 150% in the first
          year.
        </p>
      </div>

      <div className="case-study-grid">
        <div className="grid-item-half">
          <StaticImage
            src="https://rscbucket.s3.us-east-2.amazonaws.com/indigo-model1.png"
            className="hero-img"
            width={1280}
            quality={100}
            margin={0}
            formats={["auto", "webp"]}
            alt="indigo"
            id="caya"
          />
        </div>

        <div className="grid-item-half">
          <StaticImage
            src="https://rscbucket.s3.us-east-2.amazonaws.com/indigo-shampoo.png"
            className="hero-img"
            width={1280}
            quality={100}
            margin={0}
            formats={["auto", "webp"]}
            alt="indigo"
            id="caya"
          />
        </div>

        <div className="grid-item-full">
          <StaticImage
            src="https://rscbucket.s3.us-east-2.amazonaws.com/indigo-phones.png"
            className="hero-img"
            width={1280}
            quality={100}
            margin={0}
            formats={["auto", "webp"]}
            alt="caya wellness"
            id="caya"
          />
        </div>

        <div className="grid-item-half">
          <StaticImage
            src="https://rscbucket.s3.us-east-2.amazonaws.com/indigo-wrapture.png"
            className="hero-img"
            width={1280}
            quality={100}
            margin={0}
            formats={["auto", "webp"]}
            alt="indigo"
            id="caya"
          />
        </div>

        <div className="grid-item-half">
          <StaticImage
            src="https://rscbucket.s3.us-east-2.amazonaws.com/indigo-model2.png"
            className="hero-img"
            width={1280}
            quality={100}
            margin={0}
            formats={["auto", "webp"]}
            alt="indigo"
            id="caya"
          />
        </div>

        <div className="grid-item-full">
          <StaticImage
            src="https://rscbucket.s3.us-east-2.amazonaws.com/indigo-desktop2.png"
            className="hero-img"
            width={1280}
            quality={100}
            margin={0}
            formats={["auto", "webp"]}
            alt="indigo"
            id="caya"
          />
        </div>

        <div className="grid-item-half">
          <StaticImage
            src="https://rscbucket.s3.us-east-2.amazonaws.com/indigo-model3.png"
            className="hero-img"
            width={1280}
            quality={100}
            margin={0}
            formats={["auto", "webp"]}
            alt="indigo"
            id="caya"
          />
        </div>

        <div className="grid-item-half">
          <StaticImage
            src="https://rscbucket.s3.us-east-2.amazonaws.com/indigo-glo.png"
            className="hero-img"
            width={1280}
            quality={100}
            margin={0}
            formats={["auto", "webp"]}
            alt="indigo"
            id="caya"
          />
        </div>
      </div>

      <div className="button-container next">
        <Link to="/caya">
          <button className="case-study-btn">Next</button>
        </Link>
      </div>
    </div>
  </Layout>
)

export default indigo
