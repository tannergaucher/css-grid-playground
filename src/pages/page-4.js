import React from 'react'
// import { Link } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'

// vid 11
const ThirdPage = () => (
  <Layout>
    <h1>Placing items on a page</h1>
    <StyledThirdPage>
      <div className="item item1">1</div>
      <div className="item item2">2</div>
      <div className="item item3">3</div>
      <div className="item item4">4</div>
      <div className="item item5">5</div>
      <div className="item item6">6</div>
      <div className="item item7">7</div>
      <div className="item item8">8</div>
      <div className="item sushi">🍱</div>
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
  border: 5px solid var(--black);
  border-radius: var(--radius);
  display: grid;
  grid-gap: 20px;

  /* Make the grid 10 cols wide, every other taking up twice the free space */
  grid-template-columns: repeat(5, 1fr 2fr);
  /* Make the grid have 10 explicit rows, 50 px high each */
  grid-template-rows: repeat(10, 50px);
  /* with item 1, start at col 3, to until 5 */
  .item1 {
    grid-column: 3/5;
  }
  /* with item 2, start at col 5, go until the end */
  .item2 {
    grid-column: 5/ -1;
  }
  /* make item 5 span double, 2 cols 2 rows */
  .item5 {
    grid-column: span 2;
    grid-row: span 2;
  }
  /* make item 8 2 rows high */
  .item8 {
    grid-row: span 2;
  }
  /* make item 15 span the entire width of the grid */
  .item15 {
    grid-column: 1 / -1;
  }
  /* make item 18 span 4 widths, but end at 9  */
  .item18 {
    grid-column: span 4 / 9;
  }
  /* make item 20 start at row 4 and go for 3 */
  .item20 {
    grid-row: 4 / span 3;
  }

  .item {
    display: grid;
    justify-content: center;
    background: var(--item);
  }
`
