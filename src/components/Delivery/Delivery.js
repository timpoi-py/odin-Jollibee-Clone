import React from "react";
import DeliveryHeroSection from "./DeliveryHeroSection";
import DeliveryCardsSection from "./DeliveryCardsSection";
import DeliveryFAQ from "./DeliveryFAQ";
import PageHeaderTitle from "../PageHeaderTitle";

const Delivery = () => {
  return (
    <>
      <PageHeaderTitle page="Delivery" />
      <DeliveryHeroSection />
      <DeliveryCardsSection />
      <DeliveryFAQ />
    </>
  );
};

export default Delivery;
