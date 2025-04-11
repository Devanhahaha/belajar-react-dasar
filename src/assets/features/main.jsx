import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './helloword.css'
import HelloWord from './HelloWord.jsx'
import Container from './Container.jsx'
import Table from '../table/Table.jsx'
import AlertButton from '../button/AlertButton.jsx'
import MyButton from '../button/MyButton.jsx'
import Toolbar from '../button/Toolbar.jsx'
import SearchForm from '../form/SearchForm.jsx'
import SayHelloForm from '../form/SayHelloForm.jsx'
import Counter from '../form/Counter.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Container>
    <HelloWord />
    <Table />
    <AlertButton text="Click Me!" message="You Click Me!"/>
    <MyButton text="Smash Me!" onSmash={() => alert("You Smash Me!")}/>
    <Toolbar onClick={(e) => {
      e.stopPropagation();
      alert("You Click Me!");
    }}/>
    <SearchForm/>
    <SayHelloForm/>
    <Counter/>
    <Counter />
    </Container>
  </StrictMode>,
)
