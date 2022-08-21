import React from "react";
import Toolbar from "./Toolbar";
import "./Home.css";
import HomeContent from "./HomeContent";

const Home = () => {
  return (
    <div className="Home-page">
      <HomeContent />
      <Toolbar />
    </div>
  );
};

export default Home;
