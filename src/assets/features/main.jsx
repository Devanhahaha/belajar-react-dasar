import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './helloword.css'
import HelloWord from './HelloWord.jsx'
import Container from './Container.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Container>
    <HelloWord />
    </Container>
  </StrictMode>,
)
