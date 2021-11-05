import React from 'react'
import { StaticImage } from "gatsby-plugin-image"



const Hero = () => {
    return (
      <div>
        <div className="container cssanimation sequence fadeInBottom">
          <h1 id="hero-text">
            Websites
            <br />
            for
            <br />
            business
          </h1>
          <p className="arrow down">&#8595;</p>
        </div>

        <div className="img-wrapper">
          <StaticImage
            src="https://rscbucket.s3.us-east-2.amazonaws.com/mockup-mobile-multi.png"
            className="hero-img"
            width={1280}
            quality={100}
            margin={0}
            formats={["auto", "webp"]}
            alt="indigo hair care"
            id="indigo"
          />
        </div>

        <div className="container cssanimation sequence fadeInBottom">
          <div id="equality">
            <h2>
              We design + develop custom websites for brands that embrace
              equality, sustainability, and positive social impact
            </h2>

            {/* <button>start a project</button> */}
          </div>
        </div>
      </div>
    )
}

export default Hero