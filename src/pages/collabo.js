import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import "../components/main.css"
import "../components/layout.css"

const collabo = () => (
  <Layout>
    <Seo title="COLLABO Case Study" />
    <div className="case-study cssanimation sequence fadeInBottom">
      <div className="half-wrapper">
        <h6>Developing a full-stack audio recording collaboration app</h6>
      </div>
      <p>
        <a href="https://collabomusic.co" target="_blank" rel="noreferrer">
          COLLABO →
        </a>
        <br />
        Role: Full Stack Engineering, Product Management, Creative Direction
      </p>

      <div className="img-wrapper">
        <StaticImage
          src="https://rscbucket.s3.us-east-2.amazonaws.com/conjure/collabo-laptop.jpg"
          className="hero-img"
          width={1280}
          quality={100}
          margin={0}
          formats={["auto", "webp"]}
          alt="collabo audio recording sharing app"
        />
      </div>

      <div className="half-wrapper">
        <h3>CHALLENGE</h3>
        <p>
          Musicians looking to collaborate on audio recording projects have a
          major problem. How do we share files? How do we collaborate when
          everyone uses a different DAW? (Digital Audio Workstation) How do we
          find other musicians with whom to collaborate?
          <br />
          <br />
          Collabo aims to solve these issues by creating a platform for
          musicians to collaborate on remote audio recording projects. A user
          can create a new project by uploading an audio track they've recorded
          and telling us some details about their project such as tempo, time
          signature, key signature, etc. Once a project is created, other users
          can then collaborate on that project by downloading the original
          track, recording their own track to it, and then uploading the new
          track onto Collabo. This gives users the opportunity to create audio
          recording projects and collaborate with other musicians around the
          world who play different instruments.
          <br />
          <br />
          This project is built with a 3rd party library called Waveform Playlist built by Naomi Aro. Waveform Playlist leverages the Web Audio API to create a DAW in the browser. This allows users to control the volume, panning, mute/solo, etc of the audio tracks. On the backend, the audio files are stored in the cloud via an AWS storage bucket. The backend data is handled by a PostgreSQL database platform called supabase.
        </p>
      </div>

      <div className="button-container next">
        <Link to="/hollywood">
          <button className="case-study-btn">Next</button>
        </Link>
      </div>
    </div>
  </Layout>
)

export default collabo
