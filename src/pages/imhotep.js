import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="GCD Comics Data Analytics with Imhotep" />
    <h1>Imhotep for Open Comics Data in GCD</h1>
    <h2>Sample Queries</h2>
    <table>
<tr><td>Counts of Series, Issues, Stories by Country</td><td><a href="https://imhotep.gcdata.org/iql/q/CTT3AY">https://imhotep.gcdata.org/iql/q/CTT3AY</a></td></tr>
<tr><td>More coming soon...</td><td></td></tr>
    </table>
  </Layout>
)

export default SecondPage
