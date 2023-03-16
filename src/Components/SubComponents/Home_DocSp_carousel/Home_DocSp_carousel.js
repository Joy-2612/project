import "./Home_Doctor_Speciality.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Home_Speciality_cards from "./Home_Speciality_cards";
import { productData, responsive } from "./Home_Speciality_cards_data";

export default function Home_DocSp_carousel() {
  const product = productData.map((item) => (
    <Home_Speciality_cards
      name={item.name}
      url={item.imageurl}
      price={item.price}
      description={item.description}
    />
  ));

  return (
    <div>
      <div className="special_cards_container">
        <h1>Book an appointment for an in-clinic consultation</h1>
       <p>Find experienced doctors across all specialties</p>
      <Carousel showDots={true} responsive={responsive}>
        {product}
      </Carousel>
      </div>
    </div>
  );
}