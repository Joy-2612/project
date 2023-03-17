import React from 'react'
import './ConsultCards.css'
import Img1 from '../../assets/periods.webp'
import Img2 from '../../assets/Acne.webp'
import Img3 from '../../assets/top-speciality-sexology.svg'
import Img4 from '../../assets/coughing.webp'
import Img5 from '../../assets/top-speciality-pediatric.svg'
import Img6 from '../../assets/12-mental-wellness.webp'


const ConsultCards = () => {
  return (
    <div className='consult-cards'>

            <div className='consult-cards-about'>
                <div>
                    <h1>Consult top doctors online for any health concern</h1>
                    <p>Private online consultations with verified doctors in all specialists</p>
                </div>
                    <button className='button-all-speciality' type='button'>View All specialities</button>
            </div>


            <div className='consult-cards-container'>
                <div className='consult-card-container'>
                    <div className='consult-card-image'>
                        <img src= {Img1}></img>
                    </div>
                    <div className='consult-card-symptoms'> 
                        <p>Period doubts or Pregnancy</p>
                    </div>
                    <div className='consult-now'> 
                        <a href='#'>CONSULT NOW</a>
                    </div>
                </div>
                <div className='consult-card-container'>
                    <div className='consult-card-image'>
                        <img src= {Img2}></img> 
                    </div>
                    <div className='consult-card-symptoms'> 
                        <p>Acne, pimple or skin issues</p>
                    </div>
                    <div className='consult-now'> 
                        <a href='#'>CONSULT NOW</a>
                    </div>
                </div>
                <div className='consult-card-container'>
                    <div className='consult-card-image'>
                        <img src= {Img3}></img>
                    </div>
                    <div className='consult-card-symptoms'> 
                        <p>Performace issues in Bed</p>
                    </div>
                    <div className='consult-now'> 
                        <a href='#'>CONSULT NOW</a>
                    </div>
                </div>
                <div className='consult-card-container'>
                    <div className='consult-card-image'>
                        <img src= {Img4}></img>
                    </div>
                    <div className='consult-card-symptoms'> 
                        <p>Cold, cough or fever</p>
                    </div>
                    <div className='consult-now'> 
                        <a href='#'>CONSULT NOW</a>
                    </div>
                </div>
                <div className='consult-card-container'>
                    <div className='consult-card-image'>
                        <img src= {Img5}></img>
                    </div>
                    <div className='consult-card-symptoms'> 
                        <p>Child not feeling well</p>
                    </div>
                    <div className='consult-now'> 
                        <a href='#'>CONSULT NOW</a>
                    </div>
                </div>
                <div className='consult-card-container'>
                    <div className='consult-card-image'>
                        <img src= {Img6}></img>
                    </div>
                    <div className='consult-card-symptoms'> 
                        <p>Depression or anxiety</p>
                    </div>
                    <div className='consult-now'> 
                        <a href='#'>CONSULT NOW</a>
                    </div>
                </div>
            </div>
    </div>

  )
}


export default ConsultCards
