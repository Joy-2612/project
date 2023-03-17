import React from 'react'
import "./DoctorProfile.css"
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

            </div>
        </div>
    </div>
  )
}

export default DoctorProfile
