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
          {samples.map(sample => (
            <div id={sample.node.frontmatter.shortlink}>
              <h3>{sample.node.frontmatter.heading}</h3>
              <p>{sample.node.frontmatter.blurb}</p>
              <div dangerouslySetInnerHTML={{__html: sample.node.html}}/>
              <p><a href={iqlurl + sample.node.frontmatter.shortlink} target="_blank"
                ><span role="img" aria-label="play button">▶️</span> Run Query</a>
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
      filter: {fileAbsolutePath: {regex: "/\/imhotep-samples/"}}) {
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
