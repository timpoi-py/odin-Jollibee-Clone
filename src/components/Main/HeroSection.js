import React from "react";
import "./Main.css";
import OrderBtn from "../Header/OrderBtn";

const HeroSection = () => {
  return (
    <div className="heroSection">
      <div className="heroSection__container container">
        <div className="slogan">
          <h1>Bringing joy to you</h1>
          <h3>
            Have your jollibee favorites delivered right to your doorstep!
          </h3>
          <OrderBtn>Order Now</OrderBtn>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
