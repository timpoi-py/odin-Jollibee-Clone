import React from "react";
import CategoryCard from "./CategoryCard";

import "./Menu.css";

import chickenFamilyBox from "../../imgs/cat-card-newProd-4pc-Chicken-FamBox.png";
import bukoPie from "../../imgs/cat-card-newProd-BUKOPIE.png";
import chickenSandwich from "../../imgs/cat-card-newProd-ChickenSandwich.png";
import crisscutFries from "../../imgs/cat-card-newProd-crisscutFries.png";
import spicyChamp from "../../imgs/cat-card-newProd-spicyChamp.png";
import spicyTunaPie from "../../imgs/cat-card-newProd-spicyTunaPie.png";
import tunaPie from "../../imgs/cat-card-newProd-TunaPie.png";
import spicyChampJR from "../../imgs/cat-card-newProd-spicyChampJR.png";

const CategoryNewProducts = () => {
  return (
    <div className="category__section">
      <CategoryCard
        img={chickenSandwich}
        menu="Chicken Sandwich"
        description="Crunchylicious. 100% Real, Large Chicken – a new level of chicken sandwich!"
      />
      <CategoryCard
        img={spicyChamp}
        menu="Spicy Champ"
        description="The iconic Champ – now made spicy with sriracha mayo dressing & jalapenos."
      />
      <CategoryCard
        img={spicyChampJR}
        menu="Spicy Champ Jr."
        description="The Champ Jr. – now made spicy with sriracha mayo dressing & jalapenos."
      />
      <CategoryCard
        img={crisscutFries}
        menu="Crisscut Fries"
        description="Crispy, flavorful and uniquely crisscut fries."
      />
      <CategoryCard
        img={chickenFamilyBox}
        menu="4 - pc. Chickenjoy Family Box"
        description="Four pieces of fried chicken glazed with a perfect blend of sweet and spicy flavors. Good for sharing."
      />
      <CategoryCard
        img={tunaPie}
        menu="Tuna Pie"
        description="Crispy-creamy goodness in every bite!"
      />
      <CategoryCard
        img={spicyTunaPie}
        menu="Spicy Tuna Pie"
        description="Crispy-creamy goodness in every bite! Also available in Spicy!"
      />
      <CategoryCard
        img={bukoPie}
        menu="Buko Pie"
        description="Real buko chunks and sweet-creamy filling in every delightful bite."
      />
    </div>
  );
};

export default CategoryNewProducts;
