import React from "react";
import DeliveryCards from "./DeliveryCards";

import cardImgPhone from "../../imgs/delivery-card-phone.jpeg";
import cardImgTelephone from "../../imgs/delivery-card-telephone.jpeg";
import cardImgMultidelivery from "../../imgs/delivery-card-multidelivery.jpeg";
import DownloadApp from "../Footer/DownloadApp";
import Btn from "../Header/OrderBtn";

import "./Delivery.css";

const DeliveryCardsSection = () => {
  return (
    <div className="delivery__cards-section">
      <div className="delivery__cards__container container">
        <DeliveryCards
          cardImg={cardImgPhone}
          cardTitle="Download the App"
          cardText="Ordering your Jollibee favorites has never been this easy. Enjoy App Exclusive deals only on the Jollibee App."
          cardBtn={DownloadApp}
        />
        <DeliveryCards
          cardImg={cardImgTelephone}
          cardTitle="Call #87000"
          cardText="Jollibee delivery is just a call away! Call #87000 to order your Jollibee favorites! Don’t forget the hashtag!"
          cardBtn={() => <Btn>#87000</Btn>}
        />
        <DeliveryCards
          cardImg={cardImgMultidelivery}
          cardTitle="Multi-Delivery"
          cardText="Order your Jollibee favorites and send to multiple recipients and addresses."
          cardBtn={() => <Btn>Order for Multi-delivery</Btn>}
        />
      </div>
    </div>
  );
};

export default DeliveryCardsSection;
