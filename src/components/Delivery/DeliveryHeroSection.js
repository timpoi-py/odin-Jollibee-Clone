import React from "react";
import OrderBtn from "../Header/OrderBtn";
import img from "../../imgs/delivery-hero-img.jpeg";
import "./Delivery.css";

const DeliveryHeroSection = () => {
  return (
    <div className="delivery__hero">
      <div className="delivery__hero__container container">
        <div className="delivery__hero__img">
          <img src={img} alt="" />
        </div>
        <div className="delivery__hero__content">
          <h3>Delivery</h3>
          <p>
            Ordering from Jollibee has never been easier! Call #87000, Click
            Order Online to go to JollibeeDelivery.com or tap the Jollibee app.
            Satisfy your cravings and have your Jollibee favorites delivered
            right to your doorstep!
          </p>
          <OrderBtn>Order Online</OrderBtn>
        </div>
      </div>
    </div>
  );
};

export default DeliveryHeroSection;
