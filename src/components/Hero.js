import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import { Link } from 'gatsby'



const Hero = () => {
    return (
      <div>
        <div className="container cssanimation sequence fadeInBottom">
          <h2 id="hero-text" className="">
            <span>conjure</span> is a development studio.
            <br />
            We partner with businesses to create custom digital products.
            <br /> As if by magic.
          </h2>
          {/* <p className="arrow down">&#8595;</p> */}
        </div>

        <div className="img-wrapper">
          <StaticImage
            src="https://rscbucket.s3.us-east-2.amazonaws.com/conjure/multi-hero22.jpg"
            className="hero-img"
            width={1280}
            quality={100}
            margin={0}
            formats={["auto", "webp"]}
            alt="hero"
            id="hero"
          />
        </div>

      </div>
    )
}

export default Hero