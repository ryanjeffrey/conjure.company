import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import "../components/main.css"
import "../components/layout.css"

const aiMessenger = () => (
  <Layout>
    <Seo title="AI MESSENGER Case Study" />
    <div className="case-study cssanimation sequence fadeInBottom">
      <div className="half-wrapper">
        <h6>Engineering a full-stack ChatGPT clone</h6>
      </div>
      <p>
        <a
          href="https://ai-messenger-nine.vercel.app"
          target="_blank"
          rel="noreferrer"
        >
          AI MESSENGER →
        </a>
        <br />
        Role: Full Stack Engineering
      </p>

      <div className="img-wrapper">
        <StaticImage
          src="https://rscbucket.s3.us-east-2.amazonaws.com/conjure/ai-messenger-laptop-tablet.jpg"
          className="hero-img"
          width={1280}
          quality={100}
          margin={0}
          formats={["auto", "webp"]}
          alt="ai messenger"
        />
      </div>

      <div className="half-wrapper">
        <h3>CHALLENGE</h3>
        <p>
          This project was built out of curiosity for the new wave of tech that
          everyone is talking about- Artificial Intelligence. Sounds scary,
          right? In fact, machine learning tools such as ChatGPT are useful in
          many ways. The GPT-3 model that this program employs can be used to
          generate high-quality text for copywriting tasks, including product
          descriptions, marketing materials, and headlines. It can also
          summarize long texts by extracting the most important information,
          presenting it in a clear and concise manner. This model can also be
          used to translate text into other languages and so much more. Think of
          it like Google but way more impressive 🤯.
          <br />
          <br />
          This project was built using the Next.js framework which makes it fast
          and easy to use. I used TypeScript and React for the front end and
          TailwindCSS to optimize the styling. User data is stored securely on a
          Firebase backend which is accessed by Google OAuth - allowing users to
          sign in with their gmail accounts instead of creating a new account.
          Due to the data persistence layer, users can return to previous AI
          chats every time they access the app. Try it out and remember - the more specific the prompt, the better the answer will be.
        </p>
      </div>

      <div className="button-container next">
        <Link to="/sound-palette">
          <button className="case-study-btn">Next</button>
        </Link>
      </div>
    </div>
  </Layout>
)

export default aiMessenger
