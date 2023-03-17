import React from 'react'
import "./App.css"
import Stickywrapper from "./Components/SubComponents/Stickywrapper"
import Navbar from './Components/SubComponents/Navbar'
import HomeSearch from './Components/SubComponents/HomeSearch'
import Home from './Components/SubComponents/Home'
import DoctorProfile from './Components/SubComponents/DoctorProfile'
import Footer from './Components/SubComponents/Footer'
import StickyWrapper from './Components/SubComponents/Stickywrapper'

import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";



const App = () => {
  return (
    <div>
        <Navbar/>
        <Home/>
        {/* <StickyWrapper/> */}
        <DoctorProfile/>
        <Footer/>
    </div>
  )
}


export default App;