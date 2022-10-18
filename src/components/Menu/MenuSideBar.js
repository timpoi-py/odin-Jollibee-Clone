import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import SideBarCategory from "./SideBarCategory";
import bestSeller from "../../imgs/menu-best-seller.png";
import beverages from "../../imgs/menu-beverages.png";
import breakfast from "../../imgs/menu-breakfast.png";
import burgers from "../../imgs/menu-burgers.png";
import burgerSteak from "../../imgs/menu-burgersteak.png";
import chickenSandwich from "../../imgs/menu-chicken-sandwich.png";
import chickenjoy from "../../imgs/menu-chickenjoy.png";
import desserts from "../../imgs/menu-desserts.png";
import familyMeals from "../../imgs/menu-family-meals.png";
import friesSides from "../../imgs/menu-fries-sides.png";
import hotdogPies from "../../imgs/menu-hotdog-pies.png";
import kiddieMeal from "../../imgs/menu-kiddiemeal.png";
import newProducts from "../../imgs/menu-newproducts.png";
import palabok from "../../imgs/menu-palabok.png";
import spaghetti from "../../imgs/menu-spaghetti.png";
import superMeal from "../../imgs/menu-supermeals.png";

const MenuSideBar = () => {
  return (
    <div className="menu__sidebar">
      <NavLink to="/Menu" end>
        <SideBarCategory img={bestSeller} category="Bestsellers" />
      </NavLink>
      <NavLink to="/Menu/new-products">
        <SideBarCategory img={newProducts} category="New Products" />
      </NavLink>
      <NavLink to="/Menu/family-meals">
        <SideBarCategory img={familyMeals} category="Family Meals" />
      </NavLink>
      <NavLink to="/Menu/breakfast-pageNotFound">
        <SideBarCategory img={breakfast} category="Breakfast" />
      </NavLink>
      <NavLink to="/Menu/chickenjoy-pageNotFound">
        <SideBarCategory img={chickenjoy} category="Chickenjoy" />
      </NavLink>
      <NavLink to="/Menu/burgers-pageNotFound">
        <SideBarCategory img={burgers} category="Burgers" />
      </NavLink>
      <NavLink to="/Menu/jolly-spaghetti-pageNotFound">
        <SideBarCategory img={spaghetti} category="Jolly Spaghetti" />
      </NavLink>
      <NavLink to="/Menu/burger-steak-pageNotFound">
        <SideBarCategory img={burgerSteak} category="Burger Steak" />
      </NavLink>
      <NavLink to="/Menu/super-meals-pageNotFound">
        <SideBarCategory img={superMeal} category="Super Meals" />
      </NavLink>
      <NavLink to="/Menu/chicken-sandwich-pageNotFound">
        <SideBarCategory img={chickenSandwich} category="Chicken Sandwich" />
      </NavLink>
      <NavLink to="/Menu/hotdog-pies-pageNotFound">
        <SideBarCategory img={hotdogPies} category="Jolly Hotdog & Pies" />
      </NavLink>
      <NavLink to="/Menu/palabok-pageNotFound">
        <SideBarCategory img={palabok} category="Palabok" />
      </NavLink>
      <NavLink to="/Menu/fries-sides-pageNotFound">
        <SideBarCategory img={friesSides} category="Fries & Sides" />
      </NavLink>
      <NavLink to="/Menu/desserts-pageNotFound">
        <SideBarCategory img={desserts} category="Desserts" />
      </NavLink>
      <NavLink to="/Menu/beverages-pageNotFound">
        <SideBarCategory img={beverages} category="Beverages" />
      </NavLink>
      <NavLink to="/Menu/jolly-kiddie-meal-pageNotFound">
        <SideBarCategory img={kiddieMeal} category="Jolly Kiddie Meal" />
      </NavLink>
      <Outlet />
    </div>
  );
};

export default MenuSideBar;
