import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

class SampleQuery extends React.Component {
  render() {
    const samples = this.props.data.allMarkdownRemark.edges
    const iqlurl = "https://imhotep.gcdata.org/iql/q/";

    return (
      <Layout>
        <div className="doc-content">
          <h1>Sample Imhotep Queries</h1>
          <p>Each sample query below includes the IQL along with a link to run the query on the
          Imhotep cluster. In each query, <code>&lt;start-date&gt;</code> and <code>&lt;end-date&gt;</code> reference the
          date of the GCD data dump. Each link uses dates for the most recent data dump uploaded into Imhotep.
          Read more <a href="/about-imhotep">about Imhotep for GCD.</a></p>
          <p>You are encouraged to use the IQL webapp to try variations these sample queries and come up with new ones. 
          Note that the Imhotep cluster is currently running on a single EC2 t2.small spot instance, so performance 
          could be better and occasionally the webapp may become unavailable. If you notice a problem, please open
          a <a href="https://github.com/youknowjack/gcd-etl/issues/new" target="_blank"
               rel="noopener noreferrer">Github issue</a> in <code>gcd-etl</code> or
          email <a href="https://mailhide.io/e/T8xal" onclick="mailhidepopup=window.open('https://mailhide.io/e/T8xal','mailhidepopup','width=580,height=635'); return false;">a......@gcdata.org</a>.</p>
          <p>If you find a great new query that we could add to this page, please open
          a <a href="https://github.com/youknowjack/gcdata-site/issues/new" target="_blank"
               rel="noopener noreferrer">Github issue</a> in <code>gcdata-site</code>.
          Pull requests are also welcome -- adding a query is as easy
            as <a href="https://github.com/youknowjack/gcdata-site/blob/master/src/imhotep-samples/README.md"
               target="_blank" rel="noopener noreferrer">adding a single Markdown file</a> in the project.</p>

          {samples.map(sample => (
            <div id={sample.node.frontmatter.shortlink}>
              <h3>{sample.node.frontmatter.heading}
              <a href={"#" + sample.node.frontmatter.shortlink}><span class="link-icon" role="img" aria-label="link icon"/></a>
              </h3>
              <p>{sample.node.frontmatter.blurb}</p>
              <div dangerouslySetInnerHTML={{__html: sample.node.html}}/>
              <p><a href={iqlurl + sample.node.frontmatter.shortlink} target="_blank" rel="noopener noreferrer"
                ><span role="img" aria-label="play button">▶️</span> Run Query</a>
                {sample.node.frontmatter.graph &&
                <span
                  style={{marginLeft: 20}}><a href={iqlurl + sample.node.frontmatter.graph} target="_blank" rel="noopener noreferrer"
                ><span role="img" aria-label="play button">▶️</span> Show Graph</a></span>
                }
              </p>
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
            heading
            blurb
            position
          }
        }
      }
    }
  }
`
