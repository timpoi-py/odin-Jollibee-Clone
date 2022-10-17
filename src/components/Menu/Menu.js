import React from "react";
import { Route, Routes } from "react-router-dom";
import MenuSideBar from "./MenuSideBar";
import Category from "./Category";
import "./Menu.css";

const Menu = () => {
  return (
    <>
      <div className="menu">
        <MenuSideBar />
        <Category />
      </div>
      <Routes>
        <Route></Route>
      </Routes>
    </>
  );
};

export default Menu;
