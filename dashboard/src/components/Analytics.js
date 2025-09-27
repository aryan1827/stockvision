import { useState, useEffect } from "react";
import Chart from "./Chart";
import { useParams } from "react-router-dom";

function Analytics() {
const mockData = [
  { open: 10, high: 10.63, low: 9.49, close: 9.55, time: 1642427876 },
  { open: 9.55, high: 10.3, low: 9.42, close: 9.94, time: 1642514276 },
  { open: 9.94, high: 10.17, low: 9.92, close: 9.78, time: 1642600676 },
  { open: 9.78, high: 10.59, low: 9.18, close: 9.51, time: 1642687076 },
  { open: 9.51, high: 10.46, low: 9.1, close: 10.17, time: 1642773476 },
  { open: 10.17, high: 10.96, low: 10.16, close: 10.47, time: 1642859876 },
  { open: 10.47, high: 11.39, low: 10.4, close: 10.81, time: 1642946276 },
  { open: 10.81, high: 11.6, low: 10.3, close: 10.75, time: 1643032676 },
  { open: 10.75, high: 11.6, low: 10.49, close: 10.93, time: 1643119076 },
  { open: 10.93, high: 11.53, low: 10.76, close: 10.96, time: 1643205476 },
  { open: 10.96, high: 11.8, low: 10.8, close: 11.2, time: 1643291876 },
  { open: 11.2, high: 11.5, low: 10.9, close: 11.1, time: 1643378276 },
  { open: 11.1, high: 11.6, low: 11.0, close: 11.4, time: 1643464676 },
  { open: 11.4, high: 11.9, low: 11.2, close: 11.7, time: 1643551076 },
  { open: 11.7, high: 12.0, low: 11.5, close: 11.85, time: 1643637476 },
];
  const { symbol } = useParams();
  const [stockData, setStockData] = useState(mockData);

  useEffect(() => {
    if (symbol === "INFY") {
      const apiKey = process.env.STOCK_API;
      const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=INFY&apikey=${apiKey}`;

      fetch(url)
        .then((res) => {
          if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
          return res.json();
        })
        .then((data) => {
          const dailyData = data["Time Series (Daily)"];
          if (!dailyData) return;

          const formattedData = Object.entries(dailyData).map(
            ([date, values]) => ({
              time: Math.floor(new Date(date).getTime() / 1000),
              open: parseFloat(values["1. open"]),
              high: parseFloat(values["2. high"]),
              low: parseFloat(values["3. low"]),
              close: parseFloat(values["4. close"]),
            })
          );

          setStockData(formattedData.reverse());
        })
        .catch((err) => {
          console.error("Error:", err);
        });
    }
  }, [symbol]);

  return (
    <>
      <h1>Chart for '{symbol}' stock</h1>
      <Chart data={stockData} />
    </>
  );
}

export default Analytics;

