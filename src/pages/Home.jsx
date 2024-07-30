import React from 'react'
import Navbar from '../components/NavBar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

function Home() {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Home