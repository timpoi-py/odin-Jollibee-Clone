import React from "react";
import CategoryCard from "./CategoryCard";

import "./Menu.css";

import burgerBundle from "../../imgs/cat-card-famMeals-BURGERBUNDLE.png";
import burgerSteak from "../../imgs/cat-card-famMeals-BURGERSTEAK.png";
import champKnockoutDeal from "../../imgs/cat-card-famMeals-CHAMP-KNOCKOUT-DEAL.png";
import champAllStarMeal from "../../imgs/cat-card-famMeals-CHAMPALLSTARMEAL.png";
import cheesyYumBurgerFamily from "../../imgs/cat-card-famMeals-CHEESY-YUMBURG-FAMILY.png";
import bdaySet from "../../imgs/cat-card-famMeals-JOYATHOME-BDAY-SET.png";
import sweet6PiesToGo from "../../imgs/cat-card-famMeals-SWEET6PIES-TOGO.png";
import chickenFamilyBox from "../../imgs/cat-card-newProd-4pc-Chicken-FamBox.png";
import chicken from "../../imgs/cat-card-chickenBucket.png";
import chickenBucketRiceSpag from "../../imgs/cat-card-chickBucket-wRice-wSpag.png";
import spagPalabok from "../../imgs/cat-card-spag-palabok-pan.png";
import spagPan from "../../imgs/cat-card-famMeals-SPAGPAN.png";
import palabokPan from "../../imgs/cat-card-famMeals-PALABOK.png";
import yumBurgFamilySavers from "../../imgs/cat-card-yumBurg-famSavers.png";

const CategoryFamilyMeals = () => {
  return (
    <div className="category__section">
      <CategoryCard
        img={chickenFamilyBox}
        menu="4- pc. Chickenjoy Family Box Solo"
        description="Four-piece Family Box of the Philippines’ best-tasting crispylicious, juicylicious Chickenjoy."
      />
      <CategoryCard
        img={burgerSteak}
        menu="Burger Steak Family Pan"
        description="A platter of 100% pure beef patty with a hearty serving of flavorful mushroom gravy, good for 6."
      />
      <CategoryCard
        img={burgerBundle}
        menu="Burger Bundle"
        description="3 Burgers, 3 Regular Fries, and 3 Regular Drinks."
      />
      <CategoryCard
        img={champAllStarMeal}
        menu="Champ All-Star Meal"
        description="An all-in-one bundle with the 1/3 pound 100% beefy langhap-sarap goodness of the Classic Champ, Bacon Champ and Amazing Aloha Champ with 3 Regular Fries."
      />
      <CategoryCard
        img={champKnockoutDeal}
        menu="Champ Knock-Out Deal"
        description="2 Champ, 2 Regular Fries, and 2 Regular Drinks."
      />
      <CategoryCard
        img={cheesyYumBurgerFamily}
        menu="Cheesy Yumburger Family Savers"
        description="Jollibee Cheesy Yumburger Family Savers has all your favorite snacks in one! This includes your favorite beefy langhap-sarap Cheesy Yumburger and Jolly Crispy Fries. Good for three."
      />
      <CategoryCard
        img={chicken}
        menu="6-pc. Chickenjoy"
        description="A bucket of your favorite crispylicious, juicylicious Chickenjoy!"
      />
      <CategoryCard
        img={chickenBucketRiceSpag}
        menu="Chickenjoy Bucket w/ Rice, Jolly Spaghetti, & Drinks"
        description="A bucket of the Philippines’ best-tasting crispylicious, juicylicious Chickenjoy with Jolly Spaghetti, rice and drinks."
      />
      <CategoryCard
        img={spagPalabok}
        menu="Family Pan Duo"
        description="Your meatiest, cheesiest and sweet-sarap Jolly Spaghetti Family Pan paired with the classic favorite Palabok Family Pan"
      />
      <CategoryCard
        img={spagPan}
        menu="Jolly Spaghetti Family Pan"
        description="Your favorite meatiest,cheesiest sweet-sarap Jolly Spaghetti good for sharing with the whole family! Good for 4-5 pax."
      />
      <CategoryCard
        img={palabokPan}
        menu="Palabok Family Pan"
        description="Your classic favorite saucy-sarap Palabok with tasty toppings for sharing with the whole family! Good for 4-5 pax."
      />
      <CategoryCard
        img={bdaySet}
        menu="Joy At Home Birthday Set"
        description=""
      />
      <CategoryCard
        img={yumBurgFamilySavers}
        menu="Yumburger Family Savers"
        description="Jollibee Yumburger Family Savers has all your favorite snacks in one! This includes your favorite beefy langhap-sarap Yumburger and Jolly Crispy Fries. Good for three."
      />
      <CategoryCard
        img={sweet6PiesToGo}
        menu="Sweet 6 Pies To-Go"
        description="Available in Peach Mango Pie, Buko Pie, and Assorted"
      />
    </div>
  );
};

export default CategoryFamilyMeals;
