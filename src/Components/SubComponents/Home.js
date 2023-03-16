import React from 'react'
import Stickywrapper from './Stickywrapper'
import Home_banner from './Home_banner'
import Testimonials from './Testimonials'
import Features from './Features'
import ConsultCards from './ConsultCards'

const Home = () => {
  return (
    <div>
       <Home_banner/>
       <Features/>
       <ConsultCards/>
       <Testimonials/>
       </div>
  )
}



export default Home