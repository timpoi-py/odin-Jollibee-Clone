import React from "react";
import "./Footer.css";
import Logo from "../Header/Logo";
import OrderBtn from "../Header/OrderBtn";
import SocialMediasAccts from "./SocialMediasAccts";
import FooterNav from "./FooterNav";
import DownloadApp from "./DownloadApp";
import Copyright from "./Copyright";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__container container">
        <div className="section1">
          <Logo color="#d6001c" />
          <OrderBtn>Order Now</OrderBtn>
        </div>
        <div className="section2">
          <SocialMediasAccts />
          <FooterNav />
          <DownloadApp />
        </div>
        <div className="section3">
          <Copyright />
        </div>
      </div>
    </div>
  );
}

export default Footer;
