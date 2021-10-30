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
          <p>&#8595;</p>
        </div>

        <div className="img-wrapper">
          <StaticImage
            src="../images/caya-home-page.png"
            className="hero-img"
            width={1280}
            quality={100}
            margin={0}
            formats={["auto", "webp"]}
            alt="caya wellness"
          />
        </div>

        <div className="container cssanimation sequence fadeInBottom">
          <div id="equality">
            <h2>
              We design bespoke web experiences for brands that embrace
              Equality, sustainability, and positive social impact.
            </h2>

            {/* <button>start a project</button> */}
          </div>
        </div>
      </div>
    )
}

export default Hero