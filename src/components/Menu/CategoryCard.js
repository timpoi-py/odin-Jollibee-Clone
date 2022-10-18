import React from "react";
import "./CategoryCard.css";
import OrderBtn from "../Header/OrderBtn";

const CategoryCard = ({ img, menu, description }) => {
  return (
    <div className="category__card">
      <img src={img} alt="" />
      <h4>{menu}</h4>
      <p>{description}</p>
      <OrderBtn>Order Now</OrderBtn>
    </div>
  );
};

export default CategoryCard;
