import React from 'react'

import "./layout.css"
import "./main.css"

const navbar = () => {
    return (
      <div>
        <nav>
          <div id="nav-inner">
            <h1>RSC</h1>
            <ul>
              <li>
                <h2>Work</h2>
              </li>
              <li>
                <h2>About</h2>
              </li>
              <li>
                <h2>Contact</h2>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
}

export default navbar
