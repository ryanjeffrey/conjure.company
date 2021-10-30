import React from "react"
import NavBar from "../components/navbar"
import { Link } from "gatsby"
import Seo from "../components/seo"
import "../components/main.css"
import "../components/layout.css"

const Contact = () => {
  return (
    <div>
      <NavBar />
      <Seo title="Contact" />
      <div className="contact-page cssanimation sequence fadeInBottom">
        <h2>Hello. What is your name?</h2>
        <p>Paul Hollywood</p>
        <h2>What is your email?</h2>
        <p>phollywood@bake.org</p>
        <h2>What is your phone number?</h2>
        <p>708-448-0222</p>
        <h2>What is the name of your brand?</h2>
        <p>Hollywood Handshake</p>
        <h2>What is your budget for this project?</h2>
        <p>25k</p>
        <h2>What services are you looking for?</h2>
        <p>A new design for a brand I'm launching</p>
        <Link to="/thanks"><button>Let's get started</button></Link>
      </div>
    </div>
  )
}

export default Contact
