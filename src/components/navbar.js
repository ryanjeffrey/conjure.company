import React from 'react'
import { Link } from "gatsby"

import "./layout.css"
import "./main.css"

const navbar = () => {
    return (
      <div id="nav-outer">
        <nav>
          <div id="nav-inner">
            <Link to ="/"><h1>RSC</h1></Link>
            <ul>
              <li>
                <Link to="/work"><h2>Work</h2></Link>
              </li>
              <li>
                <Link to="/about"><h2>About</h2></Link>
              </li>
              <li>
                <Link to="/contact"><h2>Contact</h2></Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
}

export default navbar
