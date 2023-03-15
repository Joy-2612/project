import React from 'react'
import Stickywrapper from './Stickywrapper'
import Home_banner from './Home_banner'
import Testimonials from './Testimonials'

const Home = () => {
  return (
    <div>
       <Home_banner/>
       <Testimonials/>
       <Stickywrapper/> 
    </div>
  )
}



export default Home