import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'

import FullFluidImage from '../components/FullFluidImage'
import LiveCode from '../components/LiveCode'
import Tip from '../components/styles/Tip'

const StyledBlog = styled.div`
  font-size: 21px;
  font-family: Cambria, Cochin, Georgia, 'Times New Roman', Times, serif;

  .post {
    display: grid;
    max-width: 1000px;
    margin: 200px auto;
    grid-gap: 10px 50px;
    grid-template-columns: 2fr 12fr 2fr;
  }

  .post > * {
    grid-column: 2 / -2;
  }

  p {
    line-height: 1.9;
  }
`

const code = `
const ExampleCode = styled.div\`
 display: grid;
 grid-gap: 2vw;
 grid-template-columns: 1fr 1fr 1fr;
 .item {
   background: var(--item);
   box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.35);
   padding: 2em;
   display: flex;
   justify-content: center;
   align-items: center;
 }
\`
render(
  <ExampleCode>
   <div className="item">1</div>
   <div className="item">2</div>
   <div className="item">3</div>
   <div className="item">4</div>
   <div className="item">5</div>
   <div className="item">6</div>
   <div className="item">7</div>
   <div className="item">8</div>
   <div className="item">9</div>
  </ExampleCode>
  )
`

const scope = { styled }

const fullBleedBlog = ({ data }) =>
  console.log(data) || (
    <Layout>
      <StyledBlog>
        <article className="post">
          <Tip>
            <h2>Add React Live Editor and Preview</h2>
          </Tip>
          <p>
            Grandfather's creaky as his front porch, loads his shotgun beneath
            the awning, spittoon restless for rain, carpenter's chair against
            the whistling air. Rocking, back and forth, rocking snap shot
            picture - worth it, just like the movies
          </p>
          <p>
            She said that he loved baseball, and James Earl Jones; said that
            he's got god talking inside of his thoughts while he's rounding
            those bases on his way back home
          </p>
          <p>
            If you build it, they will come (and baby listens to what the Lord
            say). But I've been getting pretty worn, building for nearly a
            decade
          </p>
          <FullFluidImage fluid={data.file.childImageSharp.fluid} />
          <p>
            In a perfect world we shouldn’t have been allowed to lose sight of
            what it means to love wholly. I’ve got a Polaroid hanging on my wall
            that a friend took of me and my angel. I remember the day like it’s
            something I can touch, but it’s stuck in the square between the
            borders of the film, and I can run my fingers over our faces, but I
            can’t get back to the places we were
          </p>
          <blockquote>
            <p>I'm a block quote, look at me</p>
          </blockquote>
          <p>
            "You’ve got a pain deep in your bones, son. It compels you forward
            like you’re tied to a slave master’s cruel hand, and it's the same
            pain that drives that oppressor’s heart of stone, so you’ve grown to
            love the man. You keep pouring yourself out, again and again, into
            legible lines through a crooked pen." Yeah, it’s painful, but it’s
            familiar – so habit breeds comfort, and I don’t know what I’d do
            without him
          </p>
          <p>
            I work hard, scarred, toil through that soil for the youth I see in
            my friends, but these journals are moments in time, snapshots of our
            lives, and in retrospect, age is an overexposed photo that the
            memories can't mend
          </p>

          <LiveCode code={code} scope={scope} />
          <p>
            In a perfect world, we’ll have albums labeled Seasons, with chapter
            headings, and we’ll staple them to the cork-board that hangs at the
            foot of the bed. There’s longevity in a memory spilt out in pen, and
            if a picture is worth a thousand words then I’ve written down every
            one of them
          </p>
          <p>
            "You’ve got a pain deep in your bones, son. It compels you forward
            like you’re tied to a slave master’s cruel hand, and it's the same
            pain that drives that oppressor’s heart of stone, so you’ve grown to
            love the man. You keep pouring yourself out, again and again, into
            legible lines through a crooked pen." Yeah, it’s painful, but it’s
            familiar – so habit breeds comfort, and I don’t know what I’d do
            without him
          </p>
          <p>
            In a perfect world, we’ll have albums labeled Seasons, with chapter
            headings, and we’ll staple them to the cork-board that hangs at the
            foot of the bed. There’s longevity in a memory spilt out in pen, and
            if a picture is worth a thousand words then I’ve written down every
            one of them
          </p>
        </article>
      </StyledBlog>
    </Layout>
  )

export default fullBleedBlog

export const query = graphql`
  query {
    file(relativePath: { eq: "img2.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
