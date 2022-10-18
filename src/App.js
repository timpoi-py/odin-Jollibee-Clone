import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Delivery from "./components/Delivery/Delivery";
import Promotions from "./components/Promotions/Promotions";
import { Routes, Route } from "react-router-dom";
import Menu from "./components/Menu/Menu";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Delivery" element={<Delivery />} />
        <Route path="/Promotions" element={<Promotions />} />
        <Route path="/Menu/*" element={<Menu />} />
      </Routes>
      <Footer />
    </>
  );
};
export default App;
