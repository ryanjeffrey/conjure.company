import React from "react"
import { Link } from "gatsby"
import { SiLinkedin } from "react-icons/si"


import "../components/main.css"
import "../components/layout.css"



const contact = () => {
  return (
    <div className="container contact-page cssanimation sequence fadeInBottom">
      <h1 style={{ fontWeight: "bold", fontSize: "32px" }}>conjure</h1>
      <h2 style={{ paddingTop: "24px", fontSize: "16px" }}>INQUIRIES</h2>
  
      <div className="icons contact-link">
        <a href="https://www.linkedin.com/in/ryan-smith-219614230/">
          <SiLinkedin size="32px" color="#0072b1" />
        </a>
      </div>
      <Link to="/">
        <button>Home</button>
      </Link>
    </div>
  )
}

export default contact

