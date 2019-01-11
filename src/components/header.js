import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <code>{siteTitle}</code>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

const StyledHeader = styled.div`
  box-shadow: var(--boxShadow);
  padding: var(--space);
`
