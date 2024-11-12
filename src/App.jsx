import { useState } from 'react'
import React from 'react'
import Header from './component/Header'
import Profile  from './component/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Profile/>
    </>
  )
}

export default App
