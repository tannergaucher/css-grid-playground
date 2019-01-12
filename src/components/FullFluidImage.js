import React from 'react'
import Img from 'gatsby-image'

const FullFluidImage = ({ fluid }) => (
  <div
    style={{ gridColumn: '1 / -1', marginTop: '1.2em', marginBottom: '1.2em' }}
  >
    <Img fluid={fluid} />
  </div>
)
export default FullFluidImage
