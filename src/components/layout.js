/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <footer>
          <p style={{lineHeight: `1.3em`}}>
            <a rel="license noopener noreferrer" href="http://creativecommons.org/licenses/by-sa/4.0/" target="_blank"
            ><img alt="Creative Commons License"
                  style={{borderWidth: 0, marginRight: `4px`, float: `left`}}
                  src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a>
            {` `}
            <span>Grand Comics Data Analytics</span>
            {` `}
            by <a href="https://www.gcdata.org" rel="cc:attributionURL">gcdata.org</a> is licensed under
            {` `}
            a <a rel="license noopener noreferrer" href="http://creativecommons.org/licenses/by-sa/4.0/"
            >Creative Commons Attribution-ShareAlike 4.0 International License</a>.
            {` `}
            Based on the CC-BY-SA work of <a href="https://www.comics.org" target="_blank" rel="noopener noreferrer"
            >the Grand Comics Database</a>™.
          </p>
          <p>
            This site is built with <a href="https://www.gatsbyjs.org" target="_blank" rel="noopener noreferrer">Gatsby</a>.
          </p>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
