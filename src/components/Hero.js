import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

const Hero = () => {
    return (
      <div>
        <div className="container">
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
            src="../images/caya-hero.png"
            className="hero-img"
            width={1280}
            quality={100}
            margin={0}
            formats={["auto", "webp", "avif"]}
            alt="caya wellness"
          />
        </div>

        <div className="img-wrapper">
          <StaticImage
            src="../images/indigo-hero.png"
            className="hero-img"
            width={1280}
            quality={100}
            margin={0}
            formats={["auto", "webp", "avif"]}
            alt="indigo hair care"
          />
        </div>

        <div className="container">
          <div id="bespoke">
            <h2>We design bespoke web experiences</h2>
          </div>
        </div>
        <div id="sunbursts">
          <div className="sun-wrapper">
            <svg
              width="160"
              height="160"
              viewBox="0 0 160 160"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line y1="79.501" x2="160" y2="79.501" stroke="#F7F4F0" />
              <line
                x1="3.11278"
                y1="101.195"
                x2="157.661"
                y2="59.7837"
                stroke="#F7F4F0"
              />
              <line
                x1="11.3535"
                y1="120.857"
                x2="149.918"
                y2="40.857"
                stroke="#F7F4F0"
              />
              <line
                x1="24.4824"
                y1="137.453"
                x2="137.619"
                y2="24.316"
                stroke="#F7F4F0"
              />
              <line
                x1="41.4264"
                y1="150.461"
                x2="121.426"
                y2="11.8969"
                stroke="#F7F4F0"
              />
              <line
                x1="61.6498"
                y1="157.806"
                x2="103.061"
                y2="3.25799"
                stroke="#F7F4F0"
              />
              <line
                x1="82.6562"
                y1="160"
                x2="82.6562"
                y2="2.18557e-08"
                stroke="#F7F4F0"
              />
            </svg>
          </div>

          <div className="sun-wrapper">
            <svg
              width="160"
              height="160"
              viewBox="0 0 160 160"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line y1="79.501" x2="160" y2="79.501" stroke="#F7F4F0" />
              <line
                x1="3.11278"
                y1="101.195"
                x2="157.661"
                y2="59.7837"
                stroke="#F7F4F0"
              />
              <line
                x1="11.3535"
                y1="120.857"
                x2="149.918"
                y2="40.857"
                stroke="#F7F4F0"
              />
              <line
                x1="24.4824"
                y1="137.453"
                x2="137.619"
                y2="24.316"
                stroke="#F7F4F0"
              />
              <line
                x1="41.4264"
                y1="150.461"
                x2="121.426"
                y2="11.8969"
                stroke="#F7F4F0"
              />
              <line
                x1="61.6498"
                y1="157.806"
                x2="103.061"
                y2="3.25799"
                stroke="#F7F4F0"
              />
              <line
                x1="82.6562"
                y1="160"
                x2="82.6562"
                y2="2.18557e-08"
                stroke="#F7F4F0"
              />
            </svg>
          </div>

          <div className="sun-wrapper">
            <svg
              width="160"
              height="160"
              viewBox="0 0 160 160"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line y1="79.501" x2="160" y2="79.501" stroke="#F7F4F0" />
              <line
                x1="3.11278"
                y1="101.195"
                x2="157.661"
                y2="59.7837"
                stroke="#F7F4F0"
              />
              <line
                x1="11.3535"
                y1="120.857"
                x2="149.918"
                y2="40.857"
                stroke="#F7F4F0"
              />
              <line
                x1="24.4824"
                y1="137.453"
                x2="137.619"
                y2="24.316"
                stroke="#F7F4F0"
              />
              <line
                x1="41.4264"
                y1="150.461"
                x2="121.426"
                y2="11.8969"
                stroke="#F7F4F0"
              />
              <line
                x1="61.6498"
                y1="157.806"
                x2="103.061"
                y2="3.25799"
                stroke="#F7F4F0"
              />
              <line
                x1="82.6562"
                y1="160"
                x2="82.6562"
                y2="2.18557e-08"
                stroke="#F7F4F0"
              />
            </svg>
          </div>
        </div>
        <div className="container">
          <div id="equality">
            <h2>
              Our partners embrace equality, sustainability, and positive social
              impact.
            </h2>
            {/* <button>start a project</button> */}
          </div>
        </div>
      </div>
    )
}

export default Hero