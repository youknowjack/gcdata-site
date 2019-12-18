import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

class AthenaSampleQuery extends React.Component {
  render() {
    const samples = this.props.data.allMarkdownRemark.edges
    const sqlurl = "https://athena.gcdata.org/embed/";

    return (
      <Layout>
        <div className="doc-content">
          <h1>Sample Athena Queries</h1>
          <p>Each sample query below includes the SQL along with a link to run the query on Athena
          via a Redash front-end. In each query, the <code>&lt;snapshot&gt;</code> filter in the WHERE clause references the
          date of the GCD data dump.</p>
          <p>If you would like to run your own queries, email <a href="https://mailhide.io/e/T8xal" onclick="mailhidepopup=window.open('https://mailhide.io/e/T8xal','mailhidepopup','width=580,height=635'); return false;">a......@gcdata.org</a> to request
          a Redash account.</p>
          <p>If you notice a problem, please open
          a <a href="https://github.com/youknowjack/gcd-imhotep/issues/new" target="_blank">Github issue</a> in <code>gcd-imhotep</code> (project name to be changed soon) or
          email <a href="https://mailhide.io/e/T8xal" onclick="mailhidepopup=window.open('https://mailhide.io/e/T8xal','mailhidepopup','width=580,height=635'); return false;">a......@gcdata.org</a>.</p>

          {samples.map(sample => (
            <div id={sample.node.frontmatter.position}>
              <h3>{sample.node.frontmatter.heading}
              <a href={"#" + sample.node.frontmatter.position}><span class="link-icon" role="img" aria-label="link icon"/></a>
              </h3>
              <p>{sample.node.frontmatter.blurb}</p>
              <div dangerouslySetInnerHTML={{__html: sample.node.html}}/>
              <p><a href={sqlurl + sample.node.frontmatter.link} target="_blank"
                ><span role="img" aria-label="play button">▶️</span> Run Query</a>
              </p>
            </div>
          ))}
        </div>
      </Layout>
    )
  }
}

export default AthenaSampleQuery

export const sampleQueryQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___position], order: ASC }
      filter: {fileAbsolutePath: {regex: "/\/athena-samples\/[0-9]/"}}) {
      edges {
        node {
          html
          frontmatter {
            link
            heading
            blurb
            position
          }
        }
      }
    }
  }
`
