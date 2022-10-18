import React from "react";
import { Route, Routes } from "react-router-dom";
import MenuSideBar from "./MenuSideBar";
import CategoryBestsellers from "./CategoryBestsellers";
import CategoryNewProducts from "./CategoryNewProducts";
import CategoryFamilyMeals from "./CategoryFamilyMeals";
import PageNotFound from "../PageNotFound";
import "./Menu.css";

const Menu = () => {
  return (
    <>
      <div className="menu">
        <MenuSideBar />
        <Routes>
          <Route path="/" element={<CategoryBestsellers />} />
          <Route path="new-products" element={<CategoryNewProducts />} />
          <Route path="family-meals" element={<CategoryFamilyMeals />} />
          <Route path="breakfast-pageNotFound" element={<PageNotFound />} />
          <Route path="chickenjoy-pageNotFound" element={<PageNotFound />} />
          <Route path="burgers-pageNotFound" element={<PageNotFound />} />
          <Route
            path="jolly-spaghetti-pageNotFound"
            element={<PageNotFound />}
          />
          <Route path="burger-steak-pageNotFound" element={<PageNotFound />} />
          <Route path="super-meals-pageNotFound" element={<PageNotFound />} />
          <Route
            path="chicken-sandwich-pageNotFound"
            element={<PageNotFound />}
          />
          <Route path="hotdog-pies-pageNotFound" element={<PageNotFound />} />
          <Route path="palabok-pageNotFound" element={<PageNotFound />} />
          <Route path="fries-sides-pageNotFound" element={<PageNotFound />} />
          <Route path="desserts-pageNotFound" element={<PageNotFound />} />
          <Route path="beverages-pageNotFound" element={<PageNotFound />} />
          <Route
            path="jolly-kiddie-meal-pageNotFound"
            element={<PageNotFound />}
          />
        </Routes>
      </div>
    </>
  );
};

export default Menu;
