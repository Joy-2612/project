import React from 'react'

const Home_Speciality_cards = (props) => {
  return (
    <div>
    <div className="speciality_card">
      <img className="product--image" src={props.url} alt="product image" />
      <div className="product-desc">
      <a href="#"><h2>{props.name}</h2></a>
      <p className="product-para">{props.description}</p>
      </div>
      <p>
        <button>Book Appointment</button>
      </p>
    </div>
    </div>
  )
}

export default Home_Speciality_cards
