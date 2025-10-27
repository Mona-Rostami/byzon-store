import React from "react";
import Carousel from "./Carousel";
import Features from "./Features";
import MidBanner from "./MidBanner";
import DataContext, { getData } from "../context/DataContext";
const Home = () => {
  return (
    <div>
      <DataContext>
        <Carousel />
        <MidBanner />
        <Features />
      </DataContext>
    </div>
  );
};

export default Home;
