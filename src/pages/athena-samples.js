import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

class AthenaSampleQuery extends React.Component {
  render() {
    const samples = this.props.data.allMarkdownRemark.edges
    const sqlurl = "https://athena.gcdata.org/embed/";
    const snapshot = 20200815;

    return (
      <Layout>
        <div className="doc-content">
          <h1>Sample Athena Queries</h1>
          <div class="notice">
          <h3>Deprecation Notice</h3>
          <p>Previously, we used Athena in AWS as the query engine for the denormalized table with snapshot partitions stored in S3.
          The queries on this page used to point to an AWS-hosted Redash instance that was the query front-end in front of Athena.
          We have now migrated to a self-hosted stack with open-source Presto as the query engine in front of Hive/HDFS. The queries
          below are still basically correct, but the links now redirect to the equivalent queries on the new Redash instance.</p>
          <p>The <a href="/redash-samples">Sample Redash Queries</a> page now supercedes this page.</p>
          </div>

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
