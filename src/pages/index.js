import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Data Analytics for GCD</h1>
    <p>Details coming soon!</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/doc/imhotep-sample-queries/">Imhotep Sample Queries</Link>
  </Layout>
)

export default IndexPage
