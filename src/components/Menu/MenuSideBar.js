import React from "react";
import { Link } from "react-router-dom";
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
      <Link>
        <SideBarCategory img={bestSeller} category="Bestsellers" />
      </Link>
      <Link>
        <SideBarCategory img={newProducts} category="New Products" />
      </Link>
      <Link>
        <SideBarCategory img={familyMeals} category="Family Meals" />
      </Link>
      <Link>
        <SideBarCategory img={breakfast} category="Breakfast" />
      </Link>
      <Link>
        <SideBarCategory img={chickenjoy} category="Chickenjoy" />
      </Link>
      <Link>
        <SideBarCategory img={burgers} category="Burgers" />
      </Link>
      <Link>
        <SideBarCategory img={spaghetti} category="Jolly Spaghetti" />
      </Link>
      <Link>
        <SideBarCategory img={burgerSteak} category="Burger Steak" />
      </Link>
      <Link>
        <SideBarCategory img={superMeal} category="Super Meals" />
      </Link>
      <Link>
        <SideBarCategory img={chickenSandwich} category="Chicken Sandwich" />
      </Link>
      <Link>
        <SideBarCategory img={hotdogPies} category="Jolly Hotdog & Pies" />
      </Link>
      <Link>
        <SideBarCategory img={palabok} category="Palabok" />
      </Link>
      <Link>
        <SideBarCategory img={friesSides} category="Fries & Sides" />
      </Link>
      <Link>
        <SideBarCategory img={desserts} category="Desserts" />
      </Link>
      <Link>
        <SideBarCategory img={beverages} category="Beverages" />
      </Link>
      <Link>
        <SideBarCategory img={kiddieMeal} category="Jolly Kiddie Meal" />
      </Link>
    </div>
  );
};

export default MenuSideBar;
