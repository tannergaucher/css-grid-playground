import React from 'react'
// import { Link } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'

const ThirdPage = () => (
  <Layout>
    <h1>Spanning items</h1>
    <StyledThirdPage>
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
    </StyledThirdPage>
  </Layout>
)

export default ThirdPage

const StyledThirdPage = styled.div`
  display: grid;
  grid-gap: 2vw;
  grid-template-columns: repeat(5, 1fr);
  border: 5px solid var(--black);
  border-radius: var(--radius);

  .item {
    display: grid;
    justify-content: center;
    background: var(--item);
  }

  .item9 {
    grid-column: span 2;
    grid-row: span 5;
  }
`
