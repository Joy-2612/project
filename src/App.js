import React from 'react'
import "./App.css"
import Navbar from './Components/SubComponents/Navbar'
import Home from './Components/SubComponents/Home'
import Footer from './Components/SubComponents/Footer'

import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";


const App = () => {
  return (
    <div>
        <Navbar/>
        <Home/>
        <Footer/>
    </div>
  )
}


export default App;