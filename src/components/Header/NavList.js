import React from "react";
import MenuDropDown from "./MenuDropDown";
import PromotionsDropDown from "./PromotionsDropDown";
import { Link } from "react-router-dom";

const arrow = (
  <svg
    className="arrow"
    xmlns="http://www.w3.org/2000/svg"
    height="30"
    width="30"
    viewBox="13 17 22 16.11"
  >
    <path d="m24 30-10-9.95h20Z" />
  </svg>
);

const NavList = () => {
  return (
    <ul className="nav-list">
      <Link className="delivery" to="/Delivery">
        Delivery
      </Link>
      <Link className="menu" to="/Menu">
        Menu
        {arrow}
        <MenuDropDown />
      </Link>
      <Link className="promotions" to="/Promotions">
        Promotions
        {arrow}
        <PromotionsDropDown />
      </Link>
    </ul>
  );
};

export default NavList;
