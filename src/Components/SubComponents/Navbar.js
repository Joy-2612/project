import React from 'react'
import './Navbar.css'
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Home from './Home'

const Navbar = () => {
  return (
    <div>
        <div className='logo'>
            <h2>Practo</h2>
        </div>
            <Router>
                <Routes>
                    <Route path='/' element={<div>Home</div>}/>
                    <Route path='/about' element={<div>about</div>}/>
                    <Route path='/package' element={<div>package</div>}/>
                    <Route path='/book' element={<div>book</div>}/>
                    <Route path='/map' element={<div>map</div>}/>
                </Routes>
            </Router>
            {/* <Link to="/">Home</Link>
            <Link to="/about">About</Link> */}
        
        <div id="menu-btn" class="fas fa-bars"></div>
        
    </div>
  )
}

export default Navbar;
