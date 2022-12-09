import React from "react"
import { Link } from "gatsby"
import { SiLinkedin } from "react-icons/si"


import "../components/main.css"
import "../components/layout.css"

import Seo from "../components/seo"
import Layout from "../components/layout"



const contact = () => {
  return (
    <Layout>
      <div className="container contact-page cssanimation sequence fadeInBottom">
        <Seo title="Contact" />
        <h2 id="inquiries">INQUIRIES:</h2>
        <h2 id="email">RYAN@CONJURE.COMPANY</h2>
        <Link to="/">
          <button>Home</button>
        </Link>
      </div>
    </Layout>
  )
}

export default contact

