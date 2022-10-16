import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import "../components/main.css"
import "../components/layout.css"

const simone = () => (
  <Layout>
    <Seo title="SIMONE CHAGOYA Case Study" />
    <div className="case-study cssanimation sequence fadeInBottom">
      <div className="half-wrapper">
        <h6>Crafting a custom artist portfolio with 3D gallery</h6>
      </div>
      <p>
        <a href="https://simonechagoya.com" target="_blank" rel="noreferrer">
          SIMONE CHAGOYA →
        </a>
        <br />
        Role: Full Stack Engineering, 3D Design, Creative Direction
      </p>

      <div className="img-wrapper">
        <StaticImage
          src="https://rscbucket.s3.us-east-2.amazonaws.com/conjure/simone-laptop.jpg"
          className="hero-img"
          width={1280}
          quality={100}
          margin={0}
          formats={["auto", "webp"]}
          alt="hollywood nite lighter"
        />
      </div>

      <div className="half-wrapper">
        <h3>CHALLENGE</h3>
        <p>
          Conjure has the distinct privilege of partnering with my favorite
          living painter, Simone Chagoya. Her breathtaking landscapes, altered
          imagery, and incredible taste strike the viewer and leave us wanting
          more. We knew we had to bring our A game to this project, so we did.
          Simone led the design process, carefully measuring white space and UX
          rhythm. Her paintings speak for themselves so we chose to go for a
          minimal aesthetic while cultivating a high-end gallery feel.
          <br />
          <br />
          We used GreenSock Animation Platform (GSAP) for the fading scroll
          interactions as well as the artist statement text fade. When the user
          scrolls to the bottom of the single-page application, they are
          surprised and delighted to find an immersive 3D gallery that was
          designed in Blender and coded with Three.js. This gallery provides the
          user with an experience that places the works in context and also is
          just plain fun to interact with.
        </p>
      </div>

      <div className="button-container next">
        <Link to="/hollywood">
          <button className="case-study-btn">Next</button>
        </Link>
      </div>
    </div>
  </Layout>
)

export default simone
