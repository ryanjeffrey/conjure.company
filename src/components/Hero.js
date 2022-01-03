import React from 'react'
import { StaticImage } from "gatsby-plugin-image"



const Hero = () => {
    return (
      <div>
        <div className="container cssanimation sequence fadeInBottom">
          <h2 id="hero-text" className="">
            <span>conjure</span> is a development studio.
            <br />
            we partner with design agencies to develop extraordinary digital products. 
          </h2>
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
            

            {/* <button>start a project</button> */}
          </div>
        </div>
      </div>
    )
}

export default Hero