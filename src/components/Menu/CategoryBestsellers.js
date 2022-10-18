import React from "react";
import CategoryCard from "./CategoryCard";

import "./Menu.css";

import chickenSpagPan from "../../imgs/cat-card-chicken-w-spag-pan.png";
import oneChickburgSteakhalfSpag from "../../imgs/cat-card-1chicken-burgSteak-halfSpag.png";
import oneChick from "../../imgs/cat-card-1pc-chick.png";
import twoChick from "../../imgs/cat-card-2pc-chick.png";
import burgerBundle from "../../imgs/cat-card-burgBundle.png";
import cheesyBurger from "../../imgs/cat-card-cheesyBurg.png";
import chickenSpag from "../../imgs/cat-card-chick-spag.png";
import chickenBucketWRiceWSpag from "../../imgs/cat-card-chickBucket-wRice-wSpag.png";
import chickenPalabok from "../../imgs/cat-card-chickBucket-wRice-wSpag.png";
import chickenBucket from "../../imgs/cat-card-chicken-palabok.png";
import spagPalabokPan from "../../imgs/cat-card-spag-palabok-pan.png";
import spagFries from "../../imgs/cat-card-spag-fries.png";
import spagYumBurg from "../../imgs/cat-card-spag-w-yumBurg.png";
import yumBurgFamSavers from "../../imgs/cat-card-yumBurg-famSavers.png";
import yumBurgHalfSpagRegFries from "../../imgs/cat-card-yumBurg-halfSpag-regFries.png";
import yumBurg from "../../imgs/cat-card-yumBurg.png";

const CategoryBestsellers = () => {
  return (
    <div className="category__section">
      <CategoryCard
        img={chickenSpagPan}
        menu="6 - pc. Chickenjoy Bucket w/ Jolly Spaghetti Family"
        description="Jollibee Meal Time Bundle brings you your favorite crispylicious, juicylicious Chickenjoy with the meatiest, cheesiest, sweet-sarap Jolly Spaghetti!"
      />
      <CategoryCard
        img={chickenSpagPan}
        menu="8 - pc. Chickenjoy Bucket w/ Jolly Spaghetti Family"
        description="Jollibee Meal Time Bundle brings you your favorite crispylicious, juicylicious Chickenjoy with the meatiest, cheesiest, sweet-sarap Jolly Spaghetti!"
      />
      <CategoryCard
        img={chickenPalabok}
        menu="6 - pc. Chickenjoy w/ Palabok Family Pan"
        description="6-pcs. of the Philippines’ best-tasting crispylicious, juicylicious Chickenjoy paired with your classic favorite saucy-sarap Palabok Family Pan with tasty toppings!"
      />
      <CategoryCard
        img={chickenPalabok}
        menu="8 - pc. Chickenjoy w/ Palabok Family Pan"
        description="8-pcs. of the Philippines’ best-tasting crispylicious, juicylicious Chickenjoy paired with your classic favorite saucy-sarap Palabok Family Pan with tasty toppings!"
      />
      <CategoryCard
        img={chickenBucket}
        menu="6 - pc. Chickenjoy Bucket"
        description="A bucket of your favorite crispylicious, juicylicious Chickenjoy!"
      />
      <CategoryCard
        img={chickenBucket}
        menu="8 - pc. Chickenjoy Bucket"
        description="A bucket of your favorite crispylicious, juicylicious Chickenjoy!"
      />
      <CategoryCard
        img={oneChickburgSteakhalfSpag}
        menu="1 - pc. Chickenjoy w/ Burger Steak & Half Jolly Spaghetti Super Meal"
        description="Your Jollibee favorites in one Supermeal: 1pc Chickenjoy with Burger Steak and Half Jolly Spaghetti, with rice and drink."
      />
      <CategoryCard
        img={chickenSpag}
        menu="1 - pc. Chickenjoy w/ Jolly Spaghetti"
        description="Philippines’ best-tasting crispylicious, juicylicious Chickenjoy paired with the cheesiest, meatiest, sweet-sarap Jolly Spaghett!"
      />
      <CategoryCard
        img={oneChick}
        menu="1 - pc. Chickenjoy Solo"
        description="Philippines’ best-tasting crispylicious, juicylicious Chickenjoy that is crispy on the outside, tender and juicy on the inside."
      />
      <CategoryCard
        img={twoChick}
        menu="2 - pc. Chickenjoy Solo"
        description="Philippines’ best-tasting crispylicious, juicylicious Chickenjoy that is crispy on the outside, tender and juicy on the inside."
      />
      <CategoryCard
        img={chickenBucketWRiceWSpag}
        menu="Chickenjoy Bucket w/ Rice, Jolly Spaghetti, & Drinks"
        description="A bucket of the Philippines’ best-tasting crispylicious, juicylicious Chickenjoy with Jolly Spaghetti, rice and drinks."
      />
      <CategoryCard
        img={yumBurgHalfSpagRegFries}
        menu="Yumburger, Half Jolly Spaghetti & Reg. Fries Super Meal"
        description="Your Jollibee favorites in one Supermeal: Yumbuerger with Half Jolly Spaghetti, with fries and drink"
      />
      <CategoryCard
        img={yumBurg}
        menu="Yumburger"
        description="Your favorite langhap-sarap Yumburger made with 100% pure beef and special burger dressing, in between soft buns."
      />
      <CategoryCard
        img={cheesyBurger}
        menu="Cheesy Yumburger"
        description="Your favorite langhap-sarap Yumburger with creamy cheddar cheese."
      />
      <CategoryCard
        img={burgerBundle}
        menu="Burger Bundle"
        description="3 Burgers, 3 Regular Fries, and 3 Regular Drinks."
      />
      <CategoryCard
        img={yumBurgFamSavers}
        menu="Yumburger Family Savers"
        description="Jollibee Yumburger Family Savers has all your favorite snacks in one! This includes your favorite beefy langhap-sarap Yumburger and Jolly Crispy Fries. Good for three."
      />
      <CategoryCard
        img={spagYumBurg}
        menu="Jolly Spaghetti w/ Yumburger
        "
        description="The meatiest, cheesiest and sweet-sarap spaghetti! Freshly prepared noodles topped with Jollibee’s signature meaty spaghetti sauce, hotdog chunks and creamy grated cheese, paired with your favorite langhap-sarap Yumburger with 100% beef patty and special burger dressing."
      />
      <CategoryCard
        img={spagFries}
        menu="Jolly Spaghetti w/ Fries and Drink"
        description="The meatiest, cheesiest and sweet-sarap spaghetti! Freshly prepared noodles topped with Jollibee’s signature meaty spaghetti sauce, hotdog chunks and creamy grated cheese! Served with drink."
      />
      <CategoryCard
        img={spagPalabokPan}
        menu="Jolly Spaghetti & Palabok Family Pan"
        description="Jollibee Family Savers Snack Time Bundle has all your favorite snacks in one! This includes your favorite beefy langhap-sarap Yumburger and Jolly Crispy Fries. Good for three."
      />
    </div>
  );
};

export default CategoryBestsellers;
