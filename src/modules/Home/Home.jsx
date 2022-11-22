import React from "react";
import Banner from "./Banner";
import Event from "./Event/Event";
import Showing from "./Showing";

const Home = () => {
  return (
    <div>
      <Banner />
      <Showing />
      <Event/>
    </div>
  );
};

export default Home;
