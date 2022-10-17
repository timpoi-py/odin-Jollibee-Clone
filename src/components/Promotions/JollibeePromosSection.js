import React from "react";
import PromosCard from "./PromosCard";
import ChooseFreebiePic from "../../imgs/promos-choose-freebie.jpeg";
import WelcomeGiftPic from "../../imgs/promotions-welcome-gift.jpeg";
import JollibeeDollPic from "../../imgs/promotions-jollibee-doll.jpg";
import FunkoChampPic from "../../imgs/promos-funko.jpg";
import TenTenDealPic from "../../imgs/promos-last.jpg";

const JollibeePromosSection = () => {
  return (
    <>
      <div className="jollibee__promos">
        <div className="jollibee__promos__container container">
          <h3>Jollibee Promo</h3>
          <p>
            Get more JOY with these exciting promos! Take advantage of these
            exclusive and limited time only offers and deals to get big
            discounts and freebies!
          </p>
        </div>
      </div>
      <div className="jollibee__promos__cards__section">
        <div className="jollibee__promos__cards__container container">
          <PromosCard
            img={ChooseFreebiePic}
            description="Choose Your Freebie: Get a FREE Champ or a FREE Chicken a la King Pie Trio"
          />
          <PromosCard
            img={WelcomeGiftPic}
            description="Welcome Gift: Get a FREE Peach Mango Pie 3 Pies To-Go"
          />
          <PromosCard
            img={JollibeeDollPic}
            description="Jollibee Plush Doll Novelty Promo"
          />
          <PromosCard img={FunkoChampPic} description="Funko Champ" />
          <PromosCard
            img={TenTenDealPic}
            description="10.10 Jollibee App Exclusive Deal!"
          />
        </div>
      </div>
    </>
  );
};

export default JollibeePromosSection;
