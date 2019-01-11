import React from 'react'
// import { Link } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'

const ninthPage = () => (
  <Layout>
    <h4>Re-order grid items @media query</h4>
    <StyledNinthPage>
      <div className="item logo">LOGO</div>
      <div className="item nav">NAV</div>
      <div className="item content">I am the one who content</div>
    </StyledNinthPage>
  </Layout>
)

export default ninthPage

const StyledNinthPage = styled.div`
  border: 5px solid var(--black);
  border-radius: var(--radius);
  display: grid;
  grid-gap: 2vw;
  grid-template-columns: repeat(10, 1fr);

  .logo {
    order: 2;
    grid-column: span 2;
  }
  .nav {
    order: 1;
    grid-column: span 8;
  }
  .content {
    order: 3;
    grid-column: 1 / -1;
  }

  .item {
    background: var(--item);
  }

  @media (max-width: 700px) {
    /* re-order */
    background: lime;

    .nav {
      grid-column: 1 / -1;
    }

    .content {
      order: 2;
    }

    .logo {
      order: 3;
    }
  }
`
