import React from 'react'
// import { Link } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'

const sixthPage = () => (
  <Layout>
    <h4>Grid template areas</h4>
    <p>Reposition areas with a media query</p>
    <StyledSixthPage>
      <div className="item item1">
        <p>I'm the sidebar</p>
      </div>
      <div className="item item2">
        <p>
          I'm the text content. Ts whose think know are snow watchig fill up
          these woods. More senses of honey badger gold. Candy corn.
        </p>
      </div>
      <div className="item item3">
        <p>I'm sidebar 2</p>
      </div>
      <div className="item footer">
        <p>I'm the footer</p>
      </div>
    </StyledSixthPage>
  </Layout>
)

export default sixthPage

const StyledSixthPage = styled.div`
  border: 5px solid var(--black);
  border-radius: var(--radius);
  display: grid;
  grid-gap: 2vw;
  grid-template-columns: 2fr 10fr 2fr;
  grid-template-rows: 3fr 3fr 1fr;
  /* now when placing items in area, don't worry about line numbers */
  grid-template-areas:
    'sidebar-1 content sidebar-2'
    'sidebar-1 content sidebar-2'
    'footer footer footer';

  .item {
    display: grid;
    justify-content: center;
    background: var(--item);
    align-items: center;
  }
  .item1 {
    grid-area: sidebar-1;
    background: var(--aside);
  }
  .item2 {
    grid-area: content;
  }
  .item3 {
    grid-area: sidebar-2;
    background: var(--aside);
  }
  .footer {
    grid-area: footer;
    background: var(--footer);
  }

  @media (max-width: 700px) {
    grid-template-areas:
      'content content content'
      'sidebar-1 sidebar-1 sidebar-2'
      'footer footer footer';
  }
`
