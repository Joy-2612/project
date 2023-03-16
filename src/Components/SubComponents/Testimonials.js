import React, { useEffect } from 'react'
import './Testimonials.css'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Pagination, Navigation } from "swiper";


import img1 from "../../assets/img1.jpg"
import img2 from "../../assets/img2.jpg"
import img3 from "../../assets/img3.jpg"

const Testimonials = () => {
  return (
    <div>
    <p className="testimonials_heading">What our users have to say</p>
    <section className="container">
      <div className="testimonial mySwiper">
        <div className="testi-content swiper-wrapper">
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><div className="slide swiper-slide">
            <img src={img1} alt="" className="image" />
            <p>
            Very helpful. Far easier than doing same things on computer. Allows quick and easy search with speedy booking. Even maintains history of doctors visited.
            </p>

            <i className="bx bxs-quote-alt-left quote-icon"></i>

            <div className="details">
              <span className="name">Marnie Lotter</span>
            </div>
          </div></SwiperSlide>
        <SwiperSlide><div className="slide swiper-slide">
            <img src={img2} alt="" className="image" />
            <p>
            Very good app. Well thought out about booking/rescheduling/canceling an appointment. Also, Doctor's feedback mechanism is good and describes all the basics in a good way
            </p>

            <i className="bx bxs-quote-alt-left quote-icon"></i>

            <div className="details">
              <span className="name">Marnie Lotter</span>
            </div>
          </div></SwiperSlide>
          <SwiperSlide>
          <div className="slide swiper-slide">
            <img src={img3} alt="" className="image" />
            <p>
            Very helpful. Far easier than doing same things on computer. Allows quick and easy search with speedy booking. Even maintains history of doctors visited.
            </p>

            <i className="bx bxs-quote-alt-left quote-icon"></i>

            <div className="details">
              <span className="name">Marnie Lotter</span>
              
            </div>
          </div>
          </SwiperSlide>
       
      </Swiper>
          
     
    </div>
    </div>
    </section>



    
    </div>
  )
}

export default Testimonials
