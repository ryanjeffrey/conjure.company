import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import "../components/main.css"
import "../components/layout.css"

const caya = () => (
  <Layout>
    <Seo title="CAYA Case Study" />
    <div className="case-study cssanimation sequence fadeInBottom">
      <div className="half-wrapper">
        <h6>Designing and launching a telehealth brand</h6>
      </div>
      <p>
        <a href="https://cayawellness.org" target="_blank" rel="noreferrer">
          CAYA →
        </a>
        <br />
        Role: Full Stack Engineering, Creative Direction
      </p>

      <div className="img-wrapper">
        <StaticImage
          src="https://rscbucket.s3.us-east-2.amazonaws.com/caya-laptop.png"
          className="hero-img"
          width={1280}
          quality={100}
          margin={0}
          formats={["auto", "webp"]}
          alt="caya wellness"
          id="caya"
        />
      </div>

      <div className="half-wrapper">
        <h3>Challenge</h3>
        <p>
          We partnered with CAYA’s Founder + CEO, Courtney Cornick, PhD to help
          guide the brand towards a future of virtual private practice by crafting a
          custom design system that spans the web experience, custom client email
          feature, and branding. We wanted to create a welcoming space for Black
          women that brings the brand’s core value of “Come As You Are” to the
          center of their identity. By doing so, the new branding design lays a
          strong strategic and visual foundation for continued expansion of
          clients and business growth. Our work with CAYA was featured on{" "}
       
            <strong>POPSUGAR</strong>
          {" "}
          and{" "} <strong>verywell</strong>.
        </p>
      </div>

      <div className="case-study-grid">
        <div className="grid-item-half">
          <StaticImage
            src="https://rscbucket.s3.us-east-2.amazonaws.com/caya-client-cropped.png"
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
            src="https://rscbucket.s3.us-east-2.amazonaws.com/caya-logo-words.png"
            className="hero-img"
            width={1280}
            quality={100}
            margin={0}
            formats={["auto", "webp"]}
            alt="caya wellness"
            id="caya"
          />
        </div>

        <div className="grid-item-full">
          <StaticImage
            src="https://rscbucket.s3.us-east-2.amazonaws.com/caya-phones2.png"
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
            src="https://rscbucket.s3.us-east-2.amazonaws.com/caya-cropped-tablet.png"
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
            src="https://rscbucket.s3.us-east-2.amazonaws.com/caya-contact-img.png"
            className="hero-img"
            width={1280}
            quality={100}
            margin={0}
            formats={["auto", "webp"]}
            alt="caya wellness"
            id="caya"
          />
        </div>
      </div>

      <div className="button-container next">
        <Link to="/indigo">
          <button className="case-study-btn">Next</button>
        </Link>
      </div>
    </div>
  </Layout>
)

export default caya
