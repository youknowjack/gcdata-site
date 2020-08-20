import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Data Analytics for GCD comics.org" />
    <h1>Data Analytics for <a href="https://www.comics.org" target="_blank" rel="noopener noreferrer">GCD</a></h1>
    <div><Link to="/redash-samples">Redash Sample Queries (using Presto/Hive/Parquet)</Link></div>
    <div><Link to="/imhotep-samples">Imhotep Sample Queries</Link></div>
  </Layout>
)

export default IndexPage
