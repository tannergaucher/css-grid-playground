import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'

const headerProps = { text: "I'm styled!" }
const scope = { styled, headerProps }
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

const StyledLive = styled.div`
  .react-live {
  }
  .react-live-preview {
  }
  .prism-code {
    margin-top: 2em;
    background: #141414;
    border-radius: 5px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.35);
    font-family: Inconsolata, 'SF Mono', 'Roboto Mono', Menlo, monospace;
    font-size: 16px;
  }
`

const reactLive = () => (
  <Layout>
    <StyledLive>
      <h4>React Live Test</h4>
      <LiveProvider code={code} scope={scope} noInline={true}>
        <LivePreview />
        <LiveEditor />
        <LiveError />
      </LiveProvider>
    </StyledLive>
  </Layout>
)

export default reactLive
