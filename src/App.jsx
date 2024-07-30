import { useState } from 'react'

import './App.css'
import Thumbnail from './components/Thumbnaill'
import Service from './components/Service'
import About from './pages/About'
import HomeRemedies from './pages/HomeRemedies'

function App() {


  return (
    <>
    <Thumbnail/>
    <Service/>
    <About/>
    <HomeRemedies/>
     
    </>
  )
}

export default App
