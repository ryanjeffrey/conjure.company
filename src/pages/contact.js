import React from "react"
import { Link } from "gatsby"


import "../components/main.css"
import "../components/layout.css"



const contact = () => {
  return (
    <div className="container">
      <h1 style={{ fontWeight: "bold", fontSize: "32px" }}>conjure</h1>
      <h2 style={{ paddingTop: "24px", fontSize: "16px" }}>Inquiries</h2>
      <h3 style={{ paddingBottom: "24px", fontSize: "24px" }}>
        ryan@conjure.company
      </h3>
      <Link to="/">
        <button>Home</button>
      </Link>
    </div>
  )
}

export default contact

