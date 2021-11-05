import React from "react"
import NavBar from "../components/navbar"
import { Link } from "gatsby"

import Seo from "../components/seo"
import "../components/main.css"
import "../components/layout.css"

const Thanks = () => {
  return (
    <div>
      <NavBar />
      <Seo title="Thanks" />
      <div className="contact-page cssanimation sequence fadeInBottom">
        <h2>
          Thank you for reaching out! <br />
          We will reply as soon as possible.
        </h2>

        <Link to="/">
          <p>
            <button className="case-study-btn">Home →</button>
          </p>
        </Link>
      </div>
    </div>
  )
}

export default Thanks
