import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Herosection from './components/Herosection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Herosection/>
    </>
  )
}

export default App
