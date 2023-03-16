import React from 'react'

const Home_Speciality_cards = (props) => {
  return (
    <div>
    <div className="speciality_card">
      <img className="product--image" src={props.url} alt="product image" />
      <h2>{props.name}</h2>
      <p className="product-para">{props.description}</p>
      <p>
        <button>Book Appointment</button>
      </p>
    </div>
    </div>
  )
}

export default Home_Speciality_cards
