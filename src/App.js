import React from 'react'
import "./App.css"
import Navbar from './Components/SubComponents/Navbar'
import Footer from './Components/SubComponents/Footer'
import Stickywrapper from './Components/Stickywrapper'
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";


const App = () => {
  return (
    <div>
        <Navbar/>
        <Stickywrapper/>
        <Footer/>
    </div>
  )
}


export default App;