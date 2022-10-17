import React from "react";
import CategoryCard from "./CategoryCard";

import "./Menu.css";

import chickenSpagPan from "../../imgs/cat-card-chicken-w-spag-pan.png";

const Category = () => {
  return (
    <div className="category__section">
      <CategoryCard
        img={chickenSpagPan}
        menu="6 - pc. Chickenjoy Bucket w/ Jolly Spaghetti Family"
        description="Jollibee Meal Time Bundle brings you your favorite crispylicious, juicylicious Chickenjoy with the meatiest, cheesiest, sweet-sarap Jolly Spaghetti!"
      />
      <CategoryCard
        img={chickenSpagPan}
        menu="6 - pc. Chickenjoy Bucket w/ Jolly Spaghetti Family"
        description="Jollibee Meal Time Bundle brings you your favorite crispylicious, juicylicious Chickenjoy with the meatiest, cheesiest, sweet-sarap Jolly Spaghetti!"
      />
      <CategoryCard
        img={chickenSpagPan}
        menu="6 - pc. Chickenjoy Bucket w/ Jolly Spaghetti Family"
        description="Jollibee Meal Time Bundle brings you your favorite crispylicious, juicylicious Chickenjoy with the meatiest, cheesiest, sweet-sarap Jolly Spaghetti!"
      />
      <CategoryCard
        img={chickenSpagPan}
        menu="6 - pc. Chickenjoy Bucket w/ Jolly Spaghetti Family"
        description="Jollibee Meal Time Bundle brings you your favorite crispylicious, juicylicious Chickenjoy with the meatiest, cheesiest, sweet-sarap Jolly Spaghetti!"
      />
      <CategoryCard
        img={chickenSpagPan}
        menu="6 - pc. Chickenjoy Bucket w/ Jolly Spaghetti Family"
        description="Jollibee Meal Time Bundle brings you your favorite crispylicious, juicylicious Chickenjoy with the meatiest, cheesiest, sweet-sarap Jolly Spaghetti!"
      />
    </div>
  );
};

export default Category;
