import React from 'react'
// import { Link } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'

// vid 13
const fifthPage = () => (
  <Layout>
    <h4>Minmax</h4>
    <StyledFifthPage>
      <div className="item item1">1</div>
      <div className="item item2">2</div>
      <div className="item item3">3</div>
      <div className="item item4">4</div>
    </StyledFifthPage>
  </Layout>
)

export default fifthPage

const StyledFifthPage = styled.div`
  border: 5px solid var(--black);
  border-radius: var(--radius);
  display: grid;
  grid-gap: 20px;
  /* grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); */
  grid-template-columns: auto 150px 150px 150px;

  .item {
    display: grid;
    justify-content: center;
    background: var(--item);
  }
`
