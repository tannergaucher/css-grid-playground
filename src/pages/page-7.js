import React from 'react'
// import { Link } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'

// vid 13
const seventhPage = () => (
  <Layout>
    <h4>Grid auto flow: dense</h4>
    <StyledSeventhPage>
      <div className="item item1">1</div>
      <div className="item item2">2</div>
      <div className="item item3">3</div>
      <div className="item item4">4</div>
      <div className="item item5">5</div>
      <div className="item item6">6</div>
      <div className="item item7">7</div>
      <div className="item item8">8</div>
      <div className="item item9">9</div>
      <div className="item item10">10</div>
      <div className="item item11">11</div>
      <div className="item item12">12</div>
      <div className="item item13">13</div>
      <div className="item item14">14</div>
      <div className="item item15">15</div>
      <div className="item item16">16</div>
      <div className="item item17">17</div>
      <div className="item item18">18</div>
      <div className="item item19">19</div>
      <div className="item item20">20</div>
      <div className="item item21">21</div>
      <div className="item item22">22</div>
      <div className="item item23">23</div>
      <div className="item item24">24</div>
      <div className="item item25">25</div>
      <div className="item item26">26</div>
      <div className="item item27">27</div>
      <div className="item item28">28</div>
      <div className="item item29">29</div>
      <div className="item item30">30</div>
    </StyledSeventhPage>
  </Layout>
)

export default seventhPage

const StyledSeventhPage = styled.div`
  border: 5px solid var(--black);
  border-radius: var(--radius);
  display: grid;
  grid-gap: 2vw;
  grid-template-columns: repeat(10, 1fr);
  grid-auto-flow: dense;

  .item {
    display: grid;
    justify-content: center;
    background: var(--item);
    align-items: center;
  }

  .item:nth-child(6n) {
    background: tomato;
    grid-column: span 6;
  }

  .item:nth-child(8n) {
    background: dodgerblue;
    grid-column: span 2;
  }

  .item:nth-child(9n) {
    background: palegreen;
    grid-row: span 2;
  }

  .item18 {
    grid-column-end: -1 !important;
  }

  @media (max-width: 700px) {
    grid-template-areas:
      'content content content'
      'sidebar-1 sidebar-1 sidebar-2'
      'footer footer footer';
  }
`
