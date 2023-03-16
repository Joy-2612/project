import React,{useEffect} from 'react'
import './Navbar.css'
import logo from "../../assets/logo.svg"
import Home from './Home'

const Navbar = () => {
    useEffect(() => {
        let menu = document.querySelector('#menu-btn');
        let navbar = document.querySelector('.navbar');
        menu.onclick = () =>{
            menu.classList.toggle('fa-times');
            navbar.classList.toggle('active');
         };
         window.onscroll = () =>{
            menu.classList.remove('fa-times');
            navbar.classList.remove('active');
         };
      });
  return (
    <div>
       <section className="header">
        <a href="#" className="logo"><img src={logo}/></a>
        <nav className="navbar">
            <a href="#">Find Doctors</a>
            <a href="#">Video Consult</a>
            <a href="#">Medicines</a>
            <a href="#">About Us</a>
            <a href="#">Contact Us</a>
            {/* <a href="#" className="nav-login-signup">Login/SignUp</a> */}
        </nav>
        
        <div id="menu-btn" className="fas fa-bars"></div>
       
    </section>
        
    </div>
  )
}

export default Navbar;
