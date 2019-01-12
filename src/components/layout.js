import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Header from './header'
import '../styles/layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <StyledLayout>
        {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
        <div className="inner">{children}</div>
      </StyledLayout>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

const StyledLayout = styled.div`
  .inner {
    /* margin: 0 auto;
    max-width: 960px;
    padding: var(--space); */
  }
`
