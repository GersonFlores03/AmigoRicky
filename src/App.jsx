import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import header from "./assets/img/Rectangle 1.png"
import RickAndMorthy from './components/RickAndMorthy'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     
        <img className='img' src={header} alt="" />
     
      <RickAndMorthy />
    </div>
  )
}

export default App
