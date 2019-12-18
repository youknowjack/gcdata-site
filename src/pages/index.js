import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Data Analytics for GCD comics.org" />
    <h1>Data Analytics for <a href="https://www.comics.org">GCD</a></h1>
    <Link to="/athena-samples">Athena Sample Queries</Link>
    <Link to="/imhotep-samples">Imhotep Sample Queries</Link>
  </Layout>
)

export default IndexPage
