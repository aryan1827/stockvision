import { Link } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { watchlist } from "../data/data";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  const totalPNL = useMemo(() => {
    return orders.reduce((acc, stock) => {
      const liveStockData = watchlist.find((item) => item.name === stock.name);
      const cmp = liveStockData ? liveStockData.cmp : stock.price;
      return acc + (cmp - stock.price) * stock.qty;
    }, 0);
  }, [orders, watchlist]);

  useEffect(() => {
    axios
      .get("http://localhost:1008/dashboard/orders", {
        withCredentials: true,
      })
      .then((res) => setOrders(res.data))
      .catch((err) => console.error("Failed to fetch orders:", err));
  }, []);

  if (orders.length === 0) {
    return (
      <div className="orders">
        <div className="no-orders">
          <p>You haven't placed any orders</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <h3 className="title">Orders ({orders.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Product</th>
            <th>Qty.</th>
            <th>Price</th>
            <th>CMP</th>
            <th>P&L</th>
          </tr>

          {orders.map((stock, index) => {
            const liveStockData = watchlist.find(
              (item) => item.name === stock.name
            );
            const cmp = liveStockData.cmp;
            let profit = (cmp - stock.price) * stock.qty;
            let isProfit = profit >= 0.0;
            let profitClass = isProfit ? "profit" : "loss";
            return (
              <tr>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.price}</td>
                <td>{cmp}</td>
                <td className={profitClass}>
                  <div className="fs-6">{profit.toFixed(2)}</div>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
      <div>
        <div className="section mt-5">
          <span>
            <p>Summary</p>
          </span>

          <div className="data">
            <div className="first">
              <h3
                style={{
                  color: totalPNL < 0 ? "#fa764e" : "#48c237", // red-ish for loss, green-ish for profit
                }}
              >
                {totalPNL.toFixed(2)}
              </h3>
              <p>P&L</p>
            </div>
            <hr />
          </div>
          <hr className="divider" />
        </div>
      </div>
    </>
  );
};

export default Orders;
