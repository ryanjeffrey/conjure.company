import React from 'react'
import { Link } from "gatsby"

const StyledFooter = () => {
    return (
      <div
        style={{
          display: "flex",
          backgroundColor: "#121212",
        }}
      >
        <footer
          style={{
            backgroundColor: "#121212",
            color: "#F7F4F0",
            padding: "0 0 48px 0",
            margin: "0 auto",
          }}
        >
          <Link to="/contact"><p
            style={{
              textAlign: "center",
              margin: "0",
              padding: "0 0 120px 0",
              fontFamily: "var(--main-font)",
              fontSize: "248px",
              lineHeight: "0.7"
            }}
          >
            start a project →
          </p></Link>
          <p
            style={{
              textAlign: "center",
              margin: "0",
            }}
          >
            &copy; {new Date().getFullYear()} RSC CREATIVE LLC
            <br /> CHICAGO, ILLINOIS
          </p>
        </footer>
      </div>
    )
}

export default StyledFooter
