import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'

const fakeBlogPosts = [
  {
    title: 'Interesting post about javascript',
    intro: 'im an intro sentence cool',
  },
  {
    title: 'Actually, CSS is cool, just need to learn it better',
    intro: 'im another intro',
  },
  {
    title: 'Wow things about gatsby.js sites',
    intro: 'cool wawo awesome stuff yas',
  },
  {
    title: 'Look mom, its so fast',
    intro: 'cool wawo awesome stuff yas plzz hi',
  },
  {
    title: 'Another interesting post by the tanman',
    intro: 'cool wawo awesome stuff yas',
  },
]

const IndexPage = () => (
  <Layout>
    <StyledIndex>
      <h1>Example #1</h1>
      <code>repeat(auto-fit), minmax(200px, 1fr)</code>
      <div className="container">
        {fakeBlogPosts.map(post => (
          <div className="item" />
        ))}
      </div>
      {/* <Link to="/page-2/">Go to page 2</Link> */}
    </StyledIndex>
  </Layout>
)

export default IndexPage

const StyledIndex = styled.div`
  .container {
    margin-top: 2em;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-template-rows: 200px 200px;
    justify-items: stretch;
    grid-gap: 10px;
  }

  .item {
    background: var(--item);
    border-radius: var(--radius);
  }
`
