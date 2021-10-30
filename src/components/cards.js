import React from 'react'
import { StaticImage } from "gatsby-plugin-image"


const cards = () => {
    return (
      <div>
          <div className="card-container">
            <h3>What we do</h3>
            <div className="wrapper">
            <div className="card1">
                <StaticImage
                src="../images/head.jpg"
                className="hero-img"
                width={1096}
                quality={100}
                formats={["auto", "webp"]}
                alt="indigo hair care"
                />
                <h4>Digital Strategy</h4>
                <p>
                Growth is only a concept unless you have something to measure. We
                take a strategic approach that delivers results.
                </p>
            </div>

            <div className="card2">
                <StaticImage
                src="../images/eye.jpg"
                className="hero-img"
                width={1096}
                quality={100}
                formats={["auto", "webp"]}
                alt="indigo hair care"
                />
                <h4>Design</h4>
                <p>
                What does a brand feel like on a screen? That’s User Experience,
                or UX for short. We tailor a custom solution to maximize
                conversion.
                </p>
            </div>

            <div className="card3">
                <StaticImage
                src="../images/shapes.jpg"
                className="hero-img"
                width={1096}
                quality={100}
                formats={["auto", "webp"]}
                alt="indigo hair care"
                />
                <h4>Development</h4>
                <p>
                We build websites using React so they load quickly and perform
                excellently. Our team takes care of the technical stuff so you can
                do what you do best.
                </p>
            </div>
            </div>
        </div>
      </div>
    )
}

export default cards
