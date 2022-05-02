import React from "react";
import Ethbtcchart from "../components/charts/dashboardCharts";
import Carousel from "./Carousel";
import { CoinsTable } from "./Table";
import "./styles/MainDiv.css";
import Navbar from "./Navbar";

const MainDiv = () => {
  return (
    <div className="LandingPage">

      <div className="navBar-Container">


      </div>
      <Navbar />
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
