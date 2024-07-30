import { useState } from 'react'

import './App.css'
import Thumbnail from './components/Thumbnaill'
import Service from './components/Service'
import About from './pages/About'
import HomeRemedies from './pages/HomeRemedies'
import About2 from './pages/About2'
import Remedies2 from './layouts/AdminDashLayout/Remedeis2'

function App() {


  return (
    <>
    <Thumbnail/>
    <Service/>
    <About2/>
    <Remedies2/>
     
    </>
  )
}

export default App
