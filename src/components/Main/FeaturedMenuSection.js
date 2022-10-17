import React from "react";
import "./Main.css";

const FeaturedMenuSection = () => {
  return (
    <div className="featured">
      <div className="featured__container container">
        <h2>Featured Menu Items</h2>
        <div className="featured__cards">
          <div className="chicken-card card">
            <h4>Chickenjoy Bucket</h4>
            <p>Philippine's best-tasting, crispylicious, juicylicious.</p>
            <img src={require("../../imgs/featured-chicken.png")} alt="" />
          </div>
          <div className="spag-card card">
            <h4>Spaghetti Pan</h4>
            <p>The meatiest, cheesiest, and sweet-sarap Jolly Spaghetti!</p>
            <img src={require("../../imgs/featured-spag.png")} alt="" />
          </div>
          <div className="burger-card card">
            <h4>Yumburger</h4>
            <p>Your favorite 100% Beefy Langhap-Sarap Burgers</p>
            <img src={require("../../imgs/featured-burger.png")} alt="" />
          </div>
        </div>
        <button>View Menu</button>
      </div>
    </div>
  );
};
export default FeaturedMenuSection;
