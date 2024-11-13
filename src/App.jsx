import { useState } from 'react'
import React from 'react'
import Header from './component/Header'
import Profile  from './component/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <center><h5 className="font-semibold bg-gray-200 text-2xl pt-5 pb-5">PORTOFOLIO</h5></center>
    <Header/>
    <Profile/>
    </>
  )
}

export default App
