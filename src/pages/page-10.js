import React from 'react'
// import { Link } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'
import Img from 'gatsby-image'

// Make a file and query all files in the folder: use regex?
// render all images

const StyledImageGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 100px);
  grid-auto-rows: 100px;
  grid-auto-flow: dense;

  .item img {
    grid-column: 1 / -1;
    grid-row: 1 / -1;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  .item.h2 {
    grid-row: span 2;
  }
  .item.h3 {
    grid-row: span 3;
  }
  .item.h4 {
    grid-row: span 4;
  }
  .item.w2 {
    grid-column: span 2;
  }
  .item.w3 {
    grid-column: span 3;
  }
  .item.w4 {
    grid-column: span 4;
  }
`

const ImageGallery = ({ data }) => {
  const { edges } = data.allImageSharp
  return (
    <Layout>
      <StyledImageGallery>
        {edges.map(edge => (
          <div
            className={`item h${randomNumBtwOneAndFour()} w${randomNumBtwOneAndFour()}`}
          >
            <Img fluid={edge.node.fluid} />
          </div>
        ))}
      </StyledImageGallery>
    </Layout>
  )
}

export default ImageGallery
export const query = graphql`
  query {
    allImageSharp {
      edges {
        node {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

function randomNumBtwOneAndFour() {
  return Math.floor(Math.random() * 4) + 1
}
