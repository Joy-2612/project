import React from 'react'
import "./App.css"
import Navbar from './Components/SubComponents/Navbar'
import HomeSearch from './Components/SubComponents/HomeSearch'
import Home from './Components/SubComponents/Home'
import Footer from './Components/SubComponents/Footer'
import StickyWrapper from './Components/SubComponents/Stickywrapper'

import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
// import Features from './Components/SubComponents/Features'


const App = () => {
  return (
    <div>
        <Navbar/>
        <Home/>
        {/* <StickyWrapper/> */}
        <Footer/>
    </div>
  )
}


export default App;