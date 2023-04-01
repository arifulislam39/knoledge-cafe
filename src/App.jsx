import { useState } from 'react'
import Logo from './assets/icon.png'
import './App.css'
import Header from './Components/Header/Header'
import Display from './Components/Display/Display';
// import Cart from './Components/Cart/Cart'
// import Blog from './Components/Blog/Blog'
// import ReadTime from './Components/ReadTime/ReadTime'
import FAQ from './Components/FAQ/FAQ'
// import { ToastContainer, toast } from 'react-toastify';
//   import 'react-toastify/dist/ReactToastify.css';

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
