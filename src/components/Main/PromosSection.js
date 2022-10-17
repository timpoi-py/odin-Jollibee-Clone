import React from "react";
import "./Main.css";

const PromosSection = () => {
  return (
    <div className="promos">
      <div className="promos__container container">
        <h2>Exclusive Promos</h2>
        <div className="promos__cards">
          <div className="funko-card card"></div>
          <div className="freebie-card card"></div>
          <div className="tenten-card card"></div>
        </div>
        <button>See All Promos</button>
      </div>
    </div>
  );
};

export default PromosSection;
