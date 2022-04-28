import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { chartDays } from "../utils/data";
import { CryptoState } from "../../CryptoContext";
import SelectButton from "../selectButton";
import "../styles/dashboardCharts.css"

const Ethbtcchart = () => {
  const [btc, setBtc] = useState([]);
  const [eth, setEth] = useState([]);
  const { currency } = CryptoState();
  const [days, setDays] = useState(1);

  useEffect(() => {
    let handleFetch = async () => {
      try {
        let btcFetch = await fetch(
          `https://api.coingecko.com/api/v3/coins/cake-monster/market_chart?vs_currency=GBP&days=${days}`
        );
        if (btcFetch.status !== 200) {
          throw new Error("Oops!");
        }
        // json parsing
        let btcData = await btcFetch.json();
        console.log("response", btcData);
        setBtc(btcData.prices);
      } catch (error) {
        console.error("error:", error);
      }
      try {
        let ethFetch = await fetch(
          `https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=GBP&days=${days}`
        );
        if (ethFetch.status !== 200) {
          throw new Error("Oops!");
        }
        let ethData = await ethFetch.json();
        setEth(ethData.prices);
      } catch (error) {
        console.error(error.message);
      }
    };
    handleFetch();
  }, [days]);

  let day = days < 1 ? "1 hour" : days + " Days";
  if (days < 1) {
    day = "1 Hour";
  } else if (days === 365) {
    day = "1 Year";
  } else if (days > 1000) {
    day = "3 Years";
  } else if (days === 1) {
    day = "1 Day";
  }
  let tension = days >= 1 ? 0.4 : 0.01;

  return (
    <div className="main-div">
      <div className="charts">
        <div className="chart-1">
          {
            <Line
              data={{
                labels: btc.map((coin) => {
                  let date = new Date(coin[0]);
                  let time =
                    date.getHours() > 12
                      ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                      : `${date.getHours()}:${date.getMinutes()} AM`;
                  if (days < 1) {
                    return time;
                  }
                  return days === 1 ? time : date.toLocaleDateString();
                }),

                datasets: [
                  {
                    data: btc.map((coin) => coin[1]),
                    label: `Cake-Monster Price ( Past ${day}  ) in ${currency}`,
                    borderColor: "rgb(192,192,192)",
                  },
                ],
              }}
              options={{
                fill: true,
                pointBorderColor: "rgb(192,192,192)",
                pointBackgroundColor: "(140, 20, 252);, 1",
                backgroundColor: "rgba(110,37,148)",
                tension: tension,
                elements: {
                  point: {
                    radius: 1,
                  },
                },
              }}
            />
          }
        </div>
        <div className="chart-spacer" />
        <div className="chart-2">
          {
            <Line
              data={{
                labels: eth.map((coin) => {
                  let date = new Date(coin[0]);
                  let time =
                    date.getHours() > 12
                      ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                      : `${date.getHours()}:${date.getMinutes()} AM`;
                  if (days < 1) {
                    return time;
                  }

                  return days === 1 ? time : date.toLocaleDateString();
                }),

                datasets: [
                  {
                    data: eth.map((coin) => coin[1]),
                    label: `Ethereum Price ( Past ${day}  ) in ${currency}`,
                    borderColor: "rgb(192,192,192)",
                  },
                ],
              }}
              options={{
                fill: true,
                pointBorderColor: "rgb(192,192,192)",
                pointBackgroundColor: "(140, 20, 252);, 1",
                backgroundColor: "rgba(110,37,148)",
                tension: tension,
                elements: {
                  point: {
                    radius: 1,
                  },
                },
              }}
            />
          }
        </div>
      </div>
      <div className="day-buttons">
        {chartDays.map((day) => (
          <SelectButton
            key={day.value}
            onClick={() => {
              setDays(day.value);
            }}
            selected={day.value === days}
          >
            {day.label}
          </SelectButton>
        ))}
      </div>
    </div>
  );
};

export default Ethbtcchart;
