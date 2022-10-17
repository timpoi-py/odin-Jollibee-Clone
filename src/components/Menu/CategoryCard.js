import React from "react";
import "./CategoryCard.css";

const CategoryCard = ({ img, menu, description }) => {
  return (
    <div className="category__card">
      <img src={img} alt="" />
      <h4>{menu}</h4>
      <p>{description}</p>
    </div>
  );
};

export default CategoryCard;
