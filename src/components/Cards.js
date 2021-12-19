import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import image from "../utils/images/img-9.jpg";
import image2 from "../utils/images/img-2.jpg";
function Cards() {
  return (
    <div className="cards">
      <h1>Check out!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={image}
              text="Explore more and more"
              label="Adventure"
              path="/idc"
            />
            <CardItem
              src={image2}
              text="Explore more and more"
              label="Adventure"
              path="/idc"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={image}
              text="Explore more and more"
              label="Adventure"
              path="/idk"
            />
            <CardItem
              src={image2}
              text="Explore more and more"
              label="Adventure"
              path="/idk"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
