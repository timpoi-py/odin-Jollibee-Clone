import React from "react";
import cardDivider from "../../imgs/delivery-card-divider.jpeg";
import "./Delivery.css";

const DeliveryCards = ({ cardImg, cardTitle, cardText, cardBtn }) => {
  return (
    <div className="delivery__card">
      <img className="card-img" src={cardImg} alt="" />
      <h3>{cardTitle}</h3>
      <img className="card-divider" src={cardDivider} alt="" />
      <p>{cardText}</p>
      {cardBtn()}
    </div>
  );
};

export default DeliveryCards;
