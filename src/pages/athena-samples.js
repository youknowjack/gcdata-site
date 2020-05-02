import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

class AthenaSampleQuery extends React.Component {
  render() {
    const samples = this.props.data.allMarkdownRemark.edges
    const sqlurl = "https://athena.gcdata.org/embed/";
    const snapshot = 20200501;

    return (
      <Layout>
        <div className="doc-content">
          <h1>Sample Athena Queries</h1>
          <p>Each sample query below includes the SQL along with a link to run the query on Athena
          via a Redash front-end. In each query, the <code>snapshot=</code> filter in the WHERE clause references the
          date of the GCD data dump.</p>
          <p>If you would like to run your own queries, email <a href="https://mailhide.io/e/T8xal" onclick="mailhidepopup=window.open('https://mailhide.io/e/T8xal','mailhidepopup','width=580,height=635'); return false;">a......@gcdata.org</a> to request
          a Redash account.</p>
          <p>If you notice a problem, please open
          a <a href="https://github.com/youknowjack/gcd-etl/issues/new" target="_blank" rel="noopener noreferrer"
            >Github issue</a> in <code>gcd-etl</code>.</p>

          {samples.map(sample => (
            <div id={sample.node.frontmatter.position}>
              <h3>{sample.node.frontmatter.heading}
              <a href={"#" + sample.node.frontmatter.position}><span class="link-icon" role="img" aria-label="link icon"/></a>
              </h3>
              <p>{sample.node.frontmatter.blurb}</p>
              <div dangerouslySetInnerHTML={{__html: sample.node.html.replace('SNAPSHOT_DATE_HERE',snapshot)}}/>
              <p><a href={sqlurl + sample.node.frontmatter.link + "&p_snapshot=" + snapshot} target="_blank"
                    rel="noopener noreferrer"
                ><span role="img" aria-label="play button">▶️</span> Run Query</a>
                {sample.node.frontmatter.graph &&
                <span
                  style={{marginLeft: 20}}><a href={sqlurl + sample.node.frontmatter.graph + "&p_snapshot=" + snapshot}
                                              target="_blank" rel="noopener noreferrer"
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
