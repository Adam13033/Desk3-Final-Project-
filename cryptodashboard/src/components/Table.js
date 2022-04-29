import axios from "axios";
import React, { useEffect, useState } from "react";
import { CryptoState } from "../CryptoContext";
import { CoinList } from "./utils/api";
import {
  TextField,
  TableContainer,
  LinearProgress,
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
} from "@material-ui/core";
// import numberWithComma from "./Carousel";
import "./styles/Table.css";

export const CoinsTable = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  const { currency, symbol } = CryptoState();

  const fetchCoins = async () => {
    setLoading(true);
    const { data } = await axios.get(CoinList(currency));
    console.log("Data here");
    console.log(data);

    setCoins(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchCoins();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currency]);

  const handleSearch = () => {
    return coins.filter(
      (coin) =>
        coin.name.toLowerCase().includes(search) ||
        coin.symbol.toLowerCase().includes(search)
    );
  };

  return (
    <div className="containerTable">
      <div className="tableTitle">
        <h3> Cryptocurrency Prices by Market Capitalisation</h3>
      </div>
      <TextField
        className="textfield"
        label="Search for a Crpyto Currency.."
        onChange={(e) => setSearch(e.target.value)}
      />
      <TableContainer>
        {loading ? (
          <LinearProgress className="loadingbar" />
        ) : (
          <Table>
            <TableHead>
              <TableRow className="tableheading">
                {[
                  "Coin",
                  "Current Price",
                  "24h Change",
                  "Percentage from All Time Low",
                  "Market Cap",
                ].map((head) => (
                  <TableCell className="headingCell" key={head} align={head === "Coin" ? "" : "right"}>
                    {head}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {handleSearch().map((row) => {
                const profit = row.price_change_percentage_24h > 0;
                return (
                  <TableRow className="row" key={row.name}>
                    <TableCell className="cell">
                      <img src={row?.image} alt={row.name} height="50" />
                      <div>
                        <span>{row.symbol}</span>
                        <span>{row.name}</span>
                      </div>
                    </TableCell>
                    <TableCell className="cell" align="right">
                      {symbol} {row.current_price.toLocaleString("en-us")}
                      {/* {numberWithComma(row.current_price.toFixed(2))} */}
                    </TableCell>
                    <TableCell className="cell" align="right">
                      {profit && "+"}
                      {row.price_change_percentage_24h.toFixed(2)}%
                    </TableCell>
                    <TableCell className="cell" align="right">
                      {row.atl_change_percentage}%
                    </TableCell>
                    <TableCell className="cell" align="right">
                      {symbol} {row.market_cap.toLocaleString("en-us")}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        )}
      </TableContainer>
    </div>
  );
};

// return (
//     <div className="Container">
//       <h3> Cryptocurrency Prices by Market Capitalisation</h3>
//       <TextField
//         label="Search for a Crpyto Currency.."
//         variant="outlined"
//         style={{ marginBottom: 20, width: "100%" }}
//         onChange={(e) => setSearch(e.target.value)}
//       />
//       <TableContainer>
//         {loading ? (
//           <LinearProgress style={{ backgroundColor: "purple" }} />
//         ) : (
//           <Table aria-label="simple table">
//             <TableHead style={{ backgroundColor: "#FFFFFF" }}>
//               <TableRow>
//                 {["Coin", "Price", "24h Change","Percentage from All Time Low", "Market Cap"].map((head) => (
//                   <TableCell key={head} align={head === "Coin" ? "" : "right"}>
//                     {head}
//                   </TableCell>
//                 ))}
//               </TableRow>
//             </TableHead>

//             <TableBody>
//                 {handleSearch()
//                 .map((row) => {
//                     const profit = row.price_change_percentage_24h > 0;
//                     return (
//                         <TableRow className="row" key={row.name}>
//                         <TableCell>
//                             <img
//                             src={row?.image}
//                             alt={row.name}
//                             height="50"
//                             style={{marginBottom: 10}}
//                             />
//                             <div style={{display: "flex", flexDirection: "column" }}
//                             >
//                             <span>{row.symbol}</span>
//                             <span>{row.name}</span>
//                             </div>
//                         </TableCell>
//                         <TableCell align="right">
//                           {symbol}{" "}
//                           {row.current_price.toLocaleString('en-us')}
//                           {/* {numberWithComma(row.current_price.toFixed(2))} */}
//                         </TableCell>
//                         <TableCell
//                           align="right"
//                           style={{
//                             color: profit > 0 ? "rgb(14, 203, 129)" : "red",
//                             fontWeight: 500,
//                           }}
//                         >
//                           {profit && "+"}
//                           {row.price_change_percentage_24h.toFixed(2)}%
//                         </TableCell>
//                         <TableCell>
//                             {row.atl_change_percentage}%
//                         </TableCell>
//                         <TableCell align="right">
//                           {symbol}{" "}
//                           {row.market_cap.toLocaleString('en-us')}

//                         </TableCell>
//                         </TableRow>
//                     )
//                 })}

//             </TableBody>
//           </Table>
//         )}
//       </TableContainer>
//     </div>
//   );
// };
