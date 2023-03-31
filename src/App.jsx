import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header'
import Display from './Components/Display/Display';
import Cart from './Components/Cart/Cart'
import Blog from './Components/Blog/Blog'
import ReadTime from './Components/ReadTime/ReadTime'
import FAQ from './Components/FAQ/FAQ'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header></Header>
      <Display>

      </Display>
      <FAQ></FAQ>
    </div>
  )
}

export default App
