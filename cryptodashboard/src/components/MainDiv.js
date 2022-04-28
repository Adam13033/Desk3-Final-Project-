import React from "react";
import Carousel from "./Carousel";
import Navbar from "./Navbar";
import Ethbtcchart from "./charts/dashboardCharts";
import "../components/styles/MainDiv.css";

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
        <div className="Table"> lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum </div>
      </div>
    </div>

    // <div className="LandingPage">
    //   <div className="Navbar">
    //     <Navbar />
    //   </div>
    //   <div className="TopImage"></div>
    //     {/* <Carousel /> */}
    //   <div className="BlockChainTiles">
    //     <div className="TopTiles">
    //       <div className="Bitcoin">1</div>
    //       <div className="Ethereum">2</div>
    //     </div>
    //     <div className="BottomTiles">
    //       <div className="Monero">3</div>
    //       <div className="XRP">4</div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default MainDiv;
