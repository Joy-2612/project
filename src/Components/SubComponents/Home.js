import React from 'react'
import Stickywrapper from './Stickywrapper'
import Home_banner from './Home_banner'
import Testimonials from './Testimonials'
import Features from './Features'

const Home = () => {
  return (
    <div>
       <Home_banner/>
       <Features/>
       <Testimonials/>
       <Stickywrapper/> 
    </div>
  )
}



export default Home