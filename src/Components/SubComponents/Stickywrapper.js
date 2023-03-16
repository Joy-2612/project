import React from 'react'
import './Stickywrapper.css'
import phone from "../../assets/ic_phone_white_filled.webp"
import circle_doctor from "../../assets/doctor_circle_sticky.webp"
import doctor from "../../assets/doctor_home.webp"
import practo_care from "../../assets/pcs_logo_sm_white_250122.webp"
const Stickywrapper = () => {
  return (
    <div>
      <div id="bottom-sticky-root-aze12fk">
         <div class="get-free-pcs-dweb-wrapper">
        <div id="get-free-pcs-dweb-root" class="get-free-pcs-dweb">
          <div class="left-wrapper">
            <div class="pcs-wrapper">
              <img width="80px" src={practo_care}/>
            </div>
            <div class="header-wrapper">
              <span class="header-1">Book appointment with an expert surgeon </span>
            </div>

            <div class="sub-header">
              Piles, Hernia &amp; 50+ surgeries
            </div>

            <div class="cta">
              KNOW MORE
            </div>
          </div>

          <div class="right-wrapper">
            <img src={doctor}/>
          </div>
        </div>
      </div>
    
      
      <div id="get-free-pcs-mweb-root" class="get-free-pcs-mweb get-free-pcs-show-banner">
        <div class="left-wrapper">
          <div class="image-wrapper">
            <img width="36px" height="36px" class="doctor-image" src={circle_doctor}/>
            
          </div>
          <span>Get end to end surgical care<span>
        </span></span>
        </div>
        <a href="#" class="call-cta">
          <img src={phone} height="16px" width="16px" class="call-icon"/>
          <span>Book Appointment</span>
        </a>
      </div>
    
    </div>
    </div>
  )
};
export default Stickywrapper








