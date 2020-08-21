import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Data Analytics for GCD comics.org" />
    <h1>Data Analytics for <a href="https://www.comics.org" target="_blank" rel="noopener noreferrer">GCD</a></h1>
    <h2>Using SQL to analyze GCD snapshots</h2>
    <div>The <a href="https://github.com/youknowjack/gcd-etl" target="_blank" rel="noopener noreferrer">gcd-etl project</a> builds a partition in a denormalized <a href="https://hive.apache.org/" target="_blank" rel="noopener noreferrer">Hive</a> table
    (Parquet format) for each GCD data dump. For performance, a <a href="https://prestodb.io/" target="_blank" rel="noopener noreferrer">Presto SQL query engine</a>] is deployed in front of Hive, and
    then a self-hosted <a href="https://github.com/getredash/redash/blob/master/README.md" target="_blank" rel="noopener noreferrer">Redash</a> instance provides a front-end for authoring queries and dashboards.</div>
    <div>To get a sense of the types of analysis possible with this dataset, check out <Link to="/redash-samples">these
    sample queries</Link>.</div>
    <div>You can learn more about the dataset and see the schema on the (<Link to="/about-redash/">about page</Link>.</div>
    <h2>Using Imhotep and IQL to analyze GCD snapshots</h2>
    <div>The gcd-etl project also produces a similar dataset in the Flamdex format used by Imhotep, an archived OSS project
    from Indeed. The Flamdex format is more efficient than Parquet, but there are more limitations on the types of queries
    possible with Imhotep.</div>
    <div>You can peruse the equivalent <Link to="/imhotep-samples">sample queries for Imhotep</Link>, in the SQL-like
    Imhotep Query Language (IQL).</div>
  </Layout>
)

export default IndexPage
