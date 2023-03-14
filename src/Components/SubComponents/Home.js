import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Features from './Features'
import Appointments from './Appointments'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Features/>
        <Appointments/>
        <Footer/>
    </div>
  )
}



export default Home