import React from 'react'
import { Link } from "gatsby"

import "./layout.css"
import "./main.css"

const StyledFooter = () => {
    return (
      <div className="styled-footer">
        <footer>
          <p
            id="footer-footer"
          >
            &copy; {new Date().getFullYear()} RSC CREATIVE LLC
            <br /> CHICAGO, ILLINOIS
          </p>
        </footer>
      </div>
    )
}

export default StyledFooter
