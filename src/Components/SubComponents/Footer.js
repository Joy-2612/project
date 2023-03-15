import React from 'react'
import './Footer.css'
export const Footer = () => {
  return (
    <div>
     <section className="footer">
        <div className ="box-container">
        <div className="box">
            <h3>quick links</h3>
            <a href="#"><i className="fas fa-angle-right"></i> home</a>
            <a href="about.php"><i className="fas fa-angle-right"></i> about</a>
            <a href="package.php"><i className="fas fa-angle-right"></i> package</a>
            <a href="book.php"><i className="fas fa-angle-right"></i> book</a>
        </div>
        <div className="box">
            <h3>extra links</h3>
            <a href="#"><i className="fas fa-angle-right"></i> ask questions</a>
            <a href="#"><i className="fas fa-angle-right"></i> about us</a>
            <a href="#"><i className="fas fa-angle-right"></i> privacy policy</a>
            <a href="#"><i className="fas fa-angle-right"></i> terms of use</a>
        </div>
        <div className="box">
            <h3>contact info</h3>
            <a href="#"><i className="fas fa-phone"></i> +123-456-7980</a>
            <a href="#"><i className="fas fa-phone"></i> +111-222-3333</a>
            <a href="#"><i className="fas fa-envelope"></i> j26122003@gmail.com</a>
            <a href="#"><i className="fas fa-map"></i> Delhi, India</a>
        </div>
        <div className="box">
            <h3>follow us</h3>
            <a href="#"><i className="fab fa-facebook-f"></i> facebook</a>
            <a href="#"><i className="fab fa-twitter"></i> twitter</a>
            <a href="#"><i className="fab fa-instagram"></i> instagram</a>
            <a href="#"><i className="fab fa-linkedin"></i> linkedin</a>
        </div>
    </div>
    <div className="credit"> created by <span>Joy</span> | all rights reserved! </div>
    </section>
    </div>

  )
}



export default Footer