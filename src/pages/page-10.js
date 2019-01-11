import React from 'react'
// import { Link } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'

const tenthPage = () => (
  <Layout>
    <h4>CSS Grid Image Gallery</h4>
    <StyledtenthPage>
      <div className="item logo">LOGO</div>
      <div className="item nav">NAV</div>
      <div className="item content">I am the one who content</div>
    </StyledtenthPage>
  </Layout>
)

export default tenthPage

const StyledtenthPage = styled.div`
  border: 5px solid var(--black);
  border-radius: var(--radius);
  display: grid;

  .item {
    background: var(--item);
  }
`
