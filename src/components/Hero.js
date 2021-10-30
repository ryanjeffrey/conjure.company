import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import SimpleImageSlider from "react-simple-image-slider"

const images = [
  { url: "(https://picsum.photos/1280/800)" },
  { url: "../images/indigo-desktop.png" },
  { url: "../images/shapes.png" },
  { url: "../images/head.png" },
  { url: "../images/hand.png" },
]

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
          <SimpleImageSlider
          width={1280}
          height={800}
          images={images}
          showBullets={true}
          showNavs={true}
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