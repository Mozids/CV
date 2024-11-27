import { useState } from 'react'
import React from 'react'
import Header from './component/Header'
import Profile  from './component/Profile'
import About  from './component/about'
import Skill  from './component/Skill'
import Contact from './component/contact'
import Project  from './component/project'
import Footer from './component/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Profile/>
    <About/>
    <Skill/>
    <Project/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
