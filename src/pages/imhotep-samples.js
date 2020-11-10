import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

class SampleQuery extends React.Component {
  render() {
    const samples = this.props.data.allMarkdownRemark.edges

    return (
      <Layout>
        <div className="doc-content">
          <h1>Sample Imhotep Queries</h1>
          <p>The GCD Imhotep cluster is not currently available. The queries below
          illustrate the IQL versions of the <a href="/redash-samples" rel="noopener noreferrer">Presto
          SQL queries</a> served via Redash. In each query, <code>&lt;start-date&gt;</code> and 
          <code>&lt;end-date&gt;</code> reference the date of the GCD data dump. Each link uses dates for the most
          recent data dump that would be uploaded to and available via Imhotep.</p>

          {samples.map(sample => (
            <div id={sample.node.frontmatter.shortlink}>
              <h3>{sample.node.frontmatter.heading}
              <a href={"#" + sample.node.frontmatter.shortlink}><span class="link-icon" role="img" aria-label="link icon"/></a>
              </h3>
              <p>{sample.node.frontmatter.blurb}</p>
              <div dangerouslySetInnerHTML={{__html: sample.node.html}}/>
              <p></p>
            </div>
          ))}
        </div>
      </Layout>
    )
  }
}

export default SampleQuery

export const sampleQueryQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___position], order: ASC }
      filter: {fileAbsolutePath: {regex: "/\/imhotep-samples\/[0-9]/"}}) {
      edges {
        node {
          html
          frontmatter {
            shortlink
            graph
            heading
            blurb
            position
          }
        }
      }
    }
  }
`
