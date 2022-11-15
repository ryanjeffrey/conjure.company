import React from 'react'
import Layout from "../components/layout"
import Seo from "../components/seo"
import Work from '../components/Work'

const work = () => {
    return (
      <div>
        <Layout>
          <Seo title="Work" />
          <Work />
        </Layout>
      </div>
    )
}

export default work
