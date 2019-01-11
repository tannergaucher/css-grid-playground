import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'

const SecondPage = () => (
  <Layout>
    <StyledSecondPage>
      <div className="item">1</div>
      <div className="item">2</div>
      <div className="item">3</div>
      <div className="item">4</div>
      <div className="item">5</div>
      <div className="item">6</div>
      <div className="item">7</div>
      <div className="item">8</div>
      <div className="item">9</div>
      <div className="item">10</div>
    </StyledSecondPage>
  </Layout>
)

export default SecondPage

const StyledSecondPage = styled.div`
  display: grid;
  grid-gap: 2vw;
  grid-template-columns: 1fr 1fr 1fr;
  border: 10px solid black;

  .item {
    background: var(--item);
    padding: var(--space);
  }
`
