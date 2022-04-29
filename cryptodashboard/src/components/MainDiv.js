import React from "react";
import Ethbtcchart from "../components/charts/dashboardCharts";
import Carousel from "./Carousel";
import Navbar from "./Navbar";
import { CoinsTable } from "./Table";
import "./styles/MainDiv.css";

const MainDiv = () => {
  return (
    <div className="LandingPage">
      <div>
        <Navbar />
      </div>
      <div className="Content">
        <div className="CarouselSect">
          <Carousel />
        </div>
        <div className="Charts">
          <Ethbtcchart />
        </div>
        <div className="Table">
          <CoinsTable />
        </div>
      </div>
    </div>
  );
};

export default MainDiv;
