import React from "react";
import Food from "../Food/Food";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import NavPage from "../Navbar/NavPage";
import Shafe from "../Shafe/Shafe";

const Main = () => {
  return (
    <div>
      <NavPage />
      <Header />
      <Food />
      <Shafe />
      <Footer />
    </div>
  );
};

export default Main;
