import React from "react";
import Logo from "./Logo";
import NavList from "./NavList";
import OrderBtn from "./OrderBtn";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header__container container">
          <Logo color="white" />
          <NavList />
          <OrderBtn>Order Now</OrderBtn>
        </div>
      </div>
    </>
  );
};

export default Header;
