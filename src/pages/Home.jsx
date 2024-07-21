import React from "react";

import HeroBanner from "../components/Home/HeroBanner";
import Discount from "../components/Home/Discount";
import Footer from "../components/Home/Footer";
import Features from "../components/Home/Features";

const Home = () => {
  return (
    <div className="">
      <HeroBanner />
      <Discount />
      <Features />
      <Footer />
    </div>
  );
};

export default Home;
