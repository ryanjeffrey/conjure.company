import React from 'react'
import { StaticImage } from "gatsby-plugin-image"


const cards = () => {
    return (
      <div>
          <div className="card-container">
            <h3>What We Do</h3>
            <div className="wrapper">
            <div className="card1">
                <h4>Digital Strategy</h4>
                <p>
                We start by listening to gain understanding. Your pain is our pain, so we collaborate to craft a plan that delivers results.
                </p>
            </div>

            <div className="card2">
                <h4>Design</h4>
                <p>
                What does a brand feel like on a screen? We tailor custom, user-first design solutions to make our websites effortless.
                </p>
            </div>

            <div className="card3">
                <h4>Development</h4>
                <p>
                We build websites using state-of-the-art technology so your website outperforms your competitors.
                </p>
            </div>
            </div>
        </div>
      </div>
    )
}

export default cards
