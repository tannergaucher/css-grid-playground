import React from 'react'
// import { Link } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'

// vid 13
const eightPage = () => (
  <Layout>
    <h4>Grid alignment + centering</h4>
    <StyledEightPage>
      <div className="itm itm1">1</div>
      <div className="itm itm2">2</div>
      <div className="itm itm3">3</div>
      <div className="itm itm4">4</div>
      <div className="itm itm5">5</div>
      <div className="itm itm6">6</div>
      <div className="itm itm7">7</div>
      <div className="itm itm8">8</div>
      <div className="itm itm9">9</div>
      <div className="itm itm10">10</div>
      <div className="itm itm11">11</div>
      <div className="itm itm12">12</div>
      <div className="itm itm13">13</div>
      <div className="itm itm14">14</div>
      <div className="itm itm15">15</div>
      <div className="itm itm16">16</div>
      <div className="itm itm17">17</div>
      <div className="itm itm18">18</div>
      <div className="itm itm19">19</div>
      <div className="itm itm20">20</div>
      <div className="itm itm21">21</div>
      <div className="itm itm22">22</div>
      <div className="itm itm23">23</div>
      <div className="itm itm24">24</div>
      <div className="itm itm25">25</div>
      <div className="itm itm26">26</div>
      <div className="itm itm27">27</div>
      <div className="itm itm28">28</div>
      <div className="itm itm29">29</div>
      <div className="itm itm30">30</div>
    </StyledEightPage>
  </Layout>
)

export default eightPage

const StyledEightPage = styled.div`
  border: 5px solid var(--black);
  border-radius: var(--radius);
  display: grid;
  grid-gap: 2vw;
  /* grid-template-columns: repeat(10, 1fr); */
  grid-template-columns: repeat(5, 80px);
  grid-template-rows: repeat(5, 15vh);
  /* JUSTIFY IS ALONG THE ROW (X) AXIS */
  /* ALIGN IS ALING THE COL (Y) AXIS */

  /* justify-items  defaults to stretch */
  /* justify-items: start; */
  /* justify-items: end; */
  /* shorthand that does justify and align */
  place-items: center center;
  /* JUSTIFY + ALIGN CONTENT: WHAT DO WE DO WITH THE EXTRA SPACE? */
  /* justify-content: start; */
  justify-content: space-between;

  .itm {
    background: white;
  }
`
