import React from "react"
import NavBar from "../components/navbar"
import { Link } from "gatsby"
import Seo from "../components/seo"
import "../components/main.css"
import "../components/layout.css"
import { navigate } from "gatsby-link"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

export default function Contact() {
  const [state, setState] = React.useState({})

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error))
  }



  return (
    <div>
      <NavBar />
      <Seo title="Contact" />
      <div className="contact-page cssanimation sequence fadeInBottom">
        <form
          name="contact"
          method="post"
          action="/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Don’t fill this out:{" "}
              <input name="bot-field" onChange={handleChange} />
            </label>
          </p>
          <p>
            <label>
              <input
                type="text"
                name="name"
                placeholder="Hello. What is your name?"
                onChange={handleChange}
              />
            </label>
          </p>
          <p>
            <label>
              <input
                type="email"
                name="email"
                placeholder="Email address"
                onChange={handleChange}
              />
            </label>
          </p>
          <p>
            <label>
              <input
                type="tel"
                name="number"
                placeholder="Phone number"
                onChange={handleChange}
              />
            </label>
          </p>
          <p>
            <label>
              <textarea
                name="text"
                placeholder="What is the name of your brand?"
                rows="1"
                onChange={handleChange}
              />
            </label>
          </p>
          <p>
            <label>
              <textarea
                name="message"
                placeholder="What would you like us to know? Please include budget, timeline, and any other relevant details."
                cols="20"
                rows="4"
                onChange={handleChange}
              />
            </label>
          </p>
          <p>
          
            <button type="submit">Let's get started →</button>
            
          </p>
        </form>
      </div>
    </div>
  )
}

