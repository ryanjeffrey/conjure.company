import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import SimpleImageSlider from "react-simple-image-slider"

const images = [
  { url: "https://picsum.photos/1280/800" },
  { url: "https://picsum.photos/1280/850" },
  { url: "https://picsum.photos/1280/840" },
  { url: "https://picsum.photos/1280/830" },
  { url: "https://picsum.photos/1280/820" },
]

const ImageSliderStyle = { width: '100%', height: '100%'}

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

        <div className="carousel-wrapper">
          <SimpleImageSlider
            style={{ position: "absolute", top: "0", right: "0" }}
            width={ImageSliderStyle.width}
            height={ImageSliderStyle.height}
            images={images}
            showBullets={false}
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