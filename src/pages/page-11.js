import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'

const codepen = () => (
  <Layout>
    <h4>CSS Grid Codepen clone</h4>
    <StyledCodepen />
  </Layout>
)

export default codepen

const StyledCodepen = styled.div`
  border: 5px solid var(--black);
  border-radius: var(--radius);
  display: grid;

  .item {
    background: var(--item);
  }
`
