import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
import { SingleCoin } from "./utils/api";
import { CryptoState } from "../CryptoContext";
// import ChartTwo from "./charts/chartTwo";
import Navbar from "./Navbar";
import Ethbtcchart from "./charts/dashboardCharts";
import Footer from "./Footer";
import "./styles/CoinPage.css";

const CoinPage = ({ btcData, data, user }) => {
  const { id } = useParams();
  const [coin, setCoin] = useState();
  const { currency, symbol } = CryptoState();

  const fetchCoin = async () => {
    const { data } = await axios.get(SingleCoin(id));

    setCoin(data);
  };
  
  console.log("data", { data });

  useEffect(() => {
    fetchCoin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);



  // if (!coin) return <LinearProgress style={{ backgroundColor: "gold" }} />;

  return (
    <div className="container">
      <Navbar />
      <div className="topside">
        <img
          src={coin?.image.large}
          alt={coin?.name}
          height="200"
          style={{ marginBottom: 20 }}
        />
        <h3 className="headingTitle">
          {coin?.name}
        </h3>
        <h3 className="headingSymbol">
        {coin?.symbol.toUpperCase()}
        </h3>
        <div className="description">
        <p>
          {ReactHtmlParser(coin?.description.en)}
        </p>
        </div>
        <div className="marketData">
          <div className="dataSection"> 
            <h5 className="heading">
              Rank:
            </h5>
            &nbsp; &nbsp;
            <h5 className="heading">
              {coin?.market_cap_rank}
            </h5>
          </div>
          <div className="dataSection">
            <h5 className="heading">
              Current Price:
            </h5>
            &nbsp; &nbsp;
            <h5 className="heading">
              {symbol} {coin?.market_data.current_price[currency.toLowerCase()]}
            </h5>
          </div>
          <div className="dataSection">
            <h5 className="heading">
              Market Cap:
            </h5>
            &nbsp; &nbsp;
            <h5>
              {symbol}{" "}
              {coin?.market_data.market_cap[currency.toLowerCase()]
                .toString()
                .slice(0, -6)}
              M
            </h5>
          </div>
          <div className="dataSection">
            <h5 className="heading">
              All Time High (ATH):
            </h5>
            &nbsp; &nbsp;
            <h5 className="heading">
              {symbol} {coin?.market_data.ath[currency.toLowerCase()]}
            </h5>
          </div>
          <div className="dataSection">
            <h5 className="heading">
              Current Circulating Supply:
            </h5>
            &nbsp; &nbsp;
            <h5 className="heading">
              {coin?.market_data.circulating_supply}
            </h5>
          </div>
          <div className="dataSection">
            <h5 className="heading">
              Max Supply:
            </h5>
            &nbsp; &nbsp;
            <h5 className="heading">
              {coin?.market_data.max_supply}
            </h5>
          </div>
        </div>
      </div>
      <Ethbtcchart />
      <Footer />
    </div>
  );
};

export default CoinPage;

// const useStyles = makeStyles((theme) => ({
//   container: {
//     display: "flex",
//     [theme.breakpoints.down("md")]: {
//       flexDirection: "column",
//       alignItems: "center",
//     },
//   },
//   sidebar: {
//     width: "30%",
//     [theme.breakpoints.down("md")]: {
//       width: "100%",
//     },
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     marginTop: 25,
//     borderRight: "2px solid grey",
//   },
//   heading: {
//     fontWeight: "bold",
//     marginBottom: 20,
//     fontFamily: "Montserrat",
//   },
//   description: {
//     width: "100%",
//     fontFamily: "Montserrat",
//     padding: 25,
//     paddingBottom: 15,
//     paddingTop: 0,
//     textAlign: "justify",
//   },
//   marketData: {
//     alignSelf: "start",
//     padding: 25,
//     paddingTop: 10,
//     width: "100%",
//     [theme.breakpoints.down("md")]: {
//       display: "flex",
//       justifyContent: "space-around",
//     },
//     [theme.breakpoints.down("sm")]: {
//       flexDirection: "column",
//       alignItems: "center",
//     },
//     [theme.breakpoints.down("xs")]: {
//       alignItems: "start",
//     },
//   },
// }));
// const classes = useStyles();