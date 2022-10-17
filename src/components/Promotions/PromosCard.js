import React from "react";
import { Link } from "react-router-dom";
import OrderBtn from "../Header/OrderBtn";
import "./Promotions.css";

const PromosCard = ({ img, description }) => {
  return (
    <div className="promotion__card">
      <img src={img} alt="" />
      <h4 className="promotion__description">{description}</h4>
      <div className="promotions__action__buttons">
        <Link className="link" to="/Promotions">
          Learn More
        </Link>
        <OrderBtn>Order Now</OrderBtn>
      </div>
    </div>
  );
};

export default PromosCard;
