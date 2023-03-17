import React from 'react'
import "./DoctorProfile.css"
import {FaClinicMedical} from 'react-icons/fa'
import {AiFillStar} from 'react-icons/ai'


const DoctorProfile = () => {
  return (
    <div>
        <div className="main_container">
            <div className="profile_container">



            </div>



            <div className="appointment_container">
                <h2>Choose the type of Appointment</h2>
                <div className='appoinment-type'>
                  <div className='clinic'>
                    <input type="radio"/>
                    <h4>Clinic Visit</h4>
                  </div>
                  <div className='online'>
                    <input type="radio"/>
                    <h4>Video Consult</h4>
                  </div>
                </div>

                <div className='appointment-fee'>
                  <div className='clinic-appointment-fee'>
                    <div className='clinic-logo'>
                      <FaClinicMedical/>
                    </div>
                    <h2>Clinic Appointment</h2>
                  </div>

                  <div className='fee'>
                    <h2>₹300 <h4 className='free'>&nbsp;FREE</h4></h2>
                  </div>
                  
                </div>

                <div className='clinic-description'>
                  <h3>Dental Health Care Center</h3>
                  <div className='clinic-rating'>
                      <h4>4.5&nbsp;<AiFillStar/>&nbsp;&nbsp;&nbsp;₹300&nbsp;<h4 className='free'>&nbsp;FREE</h4></h4>
                  </div> 
                  <h4>HSR Layout</h4>
                </div>


            </div>

            



        </div>
    </div>
  )
}

export default DoctorProfile
