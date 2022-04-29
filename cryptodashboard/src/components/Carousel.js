import axios from "axios";
import { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import { TrendingCoins } from "../components/utils/api";
import { CryptoState } from "../CryptoContext";
import "./styles/Carousel.css";

const Carousel = () => {
  const [trending, setTrending] = useState([]);
  const { currency, symbol } = CryptoState();

  const fetchTrendingCoins = async () => {
    const { data } = await axios.get(TrendingCoins(currency));

    console.log(data);
    setTrending(data);
  };

  useEffect(() => {
    fetchTrendingCoins();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currency]);


  
  const items = trending.map((coin) => {
    let profit = coin?.price_change_percentage_24h >= 0;
    const numberWithComma = coin.current_price.toLocaleString('en-us')
    return (
      <div className="carouselItem">
        <img src={coin?.image} alt={coin.name} height="75" />
        <div className="symbols">
        <span>
          {coin?.symbol}
          &nbsp;
          <span className={profit > 0 ?  "green" : "red"}>
            {profit && "+"}
            {coin?.price_change_percentage_24h?.toFixed(2)}%
          </span>
        </span>
        </div>
        <div className="symbol">
        <span style={{ fontSize: 22, fontWeight: 500}}>
          {symbol}{" "}
          {coin.current_price <= 0.01
            ? numberWithComma
            : numberWithComma}
        </span>
        </div>
      </div>
    );
  });

  const responsive = {
    0: {
      items: 1,
    },
    512: {
      items: 35,
    },
  };

  return (
    <div className="container">
      <div className="carousel">
        <AliceCarousel
          mouseTracking
          infinite
          autoPlayInterval={1000}
          animationDuration={1500}
          disableDotsControls
          disableButtonsControls
          responsive={responsive}
          items={items}
          autoPlay
          autoWidth
        />
      </div>
    </div>
  );
};

export default Carousel;
