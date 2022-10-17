import React from "react";
import "./Main.css";

const WhoWeAreSection = () => {
  return (
    <div className="who-we-are">
      <div className="who-we-are__container container">
        <div className="what-we-do what-section">
          <div className="what-we-do-img img"></div>
          <h4>What We Do</h4>
          <hr />
          <p>
            Jollibee's Mission is to serve great-tasting food, bringing the joy
            of eating to everyone.
          </p>
        </div>
        <div className="what-we-stand what-section">
          <div className="what-we-stand-img img"></div>
          <h4>What We Stand For</h4>
          <hr />
          <p>
            Jollibee is a family-centric brand that promotes family values and
            togetherness and espouses Filipino pride.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAreSection;
