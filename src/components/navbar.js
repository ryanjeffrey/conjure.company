import React from 'react'
import { Link } from "gatsby"
import { FaGripLines, FaTimes } from "react-icons/fa"


import "./layout.css"
import "./main.css"

const navbar = () => {
    return (
      <div id="nav-outer">
        <nav>
          <input type="checkbox" id="res-menu"></input>
          <label for="res-menu">
            <FaGripLines id="sign-one" />
            <FaTimes id="sign-two" />
          </label>

          
            <Link to="/">
              <h1 id="logo">conjure</h1>
            </Link>

            <ul>
              <li>
                <Link to="/work">
                  <a>Work</a>
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <a>About</a>
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  <a>Contact</a>
                </Link>
              </li>
            </ul>
          
        </nav>

        
      </div>
    )
}

export default navbar
