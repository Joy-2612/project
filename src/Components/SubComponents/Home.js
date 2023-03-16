import React from 'react'
import Stickywrapper from './Stickywrapper'
import Home_banner from './Home_banner'
import Testimonials from './Testimonials'
import Features from './Features'
import Home_DocSp_carousel from './Home_DocSp_carousel/Home_DocSp_carousel'

const Home = () => {
  return (
    <div>
       <Home_banner/>
       <Features/>
       <Home_DocSp_carousel/>
       <Testimonials/>
       <Stickywrapper/> 
    </div>
  )
}



export default Home