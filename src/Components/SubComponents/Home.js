import React from 'react'
import Home_banner from './Home_banner'
import Testimonials from './Testimonials'
import Features from './Features'
import Home_DocSp_carousel from './Home_DocSp_carousel/Home_DocSp_carousel'
import ConsultCards from './ConsultCards'
import HomeSearch from './HomeSearch'


const Home = () => {
  return (
    <div>
       <HomeSearch/>
       <Home_banner/>
       <Features/>
       <Home_DocSp_carousel/>
       <ConsultCards/>
       <Testimonials/>
       </div>
  )
}



export default Home