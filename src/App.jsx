import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home/Home'
import Header from './components/Header/Header'
import Projects from './pages/Projects/Projects'
import Skills from './pages/Skills/Skills'
import About from './pages/About/About'

function App() {

  return (
    <>
      <Header/>
      <Home/>
      <Projects/>
      <Skills/>
      <About/>
    </>
  )
    
}

export default App
