import React from "react";
import "./Main.css";

const CTASection = () => {
  return (
    <div className="CTA">
      <div className="CTA__container container">
        <div className="order">
          <div className="order-img img"></div>
          <h3>Order & Pick Up</h3>
        </div>
        <div className="download">
          <div className="download-img img"></div>
          <h3>Download the App</h3>
        </div>
        <div className="call">
          <div className="call-img img"></div>
          <h3>#87000</h3>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default CTASection;
