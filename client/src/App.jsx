import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Chatroom from './views/chatroom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Chatroom/>
    </>
  )
}

export default App
