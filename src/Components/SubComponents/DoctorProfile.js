import React from 'react'
import "./DoctorProfile.css"
import {FaClinicMedical} from 'react-icons/fa'
import {AiFillStar} from 'react-icons/ai'
import Tabs from './Tabs';



import docpic from "../../assets/docpic.jpg"
import {BsFillHandThumbsUpFill} from "react-icons/bs"
const DoctorProfile = () => {
  return (
    <div>
        <div className="main_container">
            <div className="profile_container">



            <div className="img-section">
                <img src={docpic} alt="" />
            </div>
            <div className="desc-section">
                <div className="doc_name"><h1>Dr. Ganesh Shetty</h1></div>
                <div className="doc_degree"><h2>BDS, MICOI (USA)</h2></div>
                <div className="doc_speciality"><h2>Dentist, Implantologist</h2></div>
                <div className="doc_experience"><h2>25 Years Experience Overall</h2></div>
                <div className="doc_rating"> <span><BsFillHandThumbsUpFill size={20}/><span>&nbsp;98%&nbsp;(3240 votes)</span></span></div>
                < div className="doc_desc">

                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad cumque ipsum inventore architecto autem in adipisci iste enim illum, saepe totam harum optio, recusandae eveniet neque laudantium quidem animi nostrum dicta, iure excepturi fugiat. Delectus inventore atque sed beatae corrupti molestias totam 
                    </p>
                </div> 
             
            

               
                
                

                

            </div>




            </div>



            <div className="appointment_container">
                {/* <h2>Choose the type of Appointment</h2>
                <div className='appoinment-type'>
                  <div className='clinic'>
                    <input type="radio"/>
                    <h4>Clinic Visit</h4>
                  </div>
                  <div className='online'>
                    <input type="radio"/>
                    <h4>Video Consult</h4>
                  </div>
                </div> */}
                
                <div className='appointment-fee'>
                  <div className='clinic-appointment-fee'>
                    <div className='clinic-logo'>
                      <FaClinicMedical/>
                    </div>
                    <h2>Clinic Appointment</h2>
                  </div>

                  <div className='fee'>
                    <div>
                      <h2><s>₹300</s></h2>
                    </div>
                    <div>
                      <h2><h4 className='free'>&nbsp;FREE</h4></h2>
                    </div>
                  </div>
                  
                </div>

                <div className='clinic-description'>
                  <h3>Dental Health Care Center</h3>
                  <div className='clinic-rating'>
                      <h4>4.5&nbsp;<AiFillStar/>&nbsp;&nbsp;&nbsp;₹300&nbsp;<h4 className='free'>&nbsp;FREE</h4></h4>
                  </div> 
                  <h4>HSR Layout</h4>
                </div>

                <div className='main-tab-container'>
                  <Tabs />
                </div>



            </div>

            



        </div>
    </div>
  )
}

export default DoctorProfile
