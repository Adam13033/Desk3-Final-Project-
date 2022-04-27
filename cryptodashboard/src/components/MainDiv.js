import React from "react";
import Navbar from "./Navbar";

const MainDiv = () => {
  return (
    <div className="LandingPage">
      <div className="Navbar">
        <Navbar />
      </div>
      <div className="TopImage"></div>
      <div className="BlockChainTiles">
        <div className="TopTiles">
          <div className="Bitcoin">1</div>
          <div className="Ethereum">2</div>
        </div>
        <div className="BottomTiles">
          <div className="Monero">3</div>
          <div className="XRP">4</div>
        </div>
      </div>
    </div>
  );
};

export default MainDiv;
