import { useState, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";
import { watchlist } from "../data/data";

const SellActionWindow = ({ symbol }) => {
  const FRONTEND_URL = process.env.REACT_APP_FRONTEND_URL;
  const API_URL = process.env.REACT_APP_API_URL;

  const [stockQuantity, setStockQuantity] = useState(1);
  const { closeSellWindow } = useContext(GeneralContext);
  const [loading, setLoading] = useState(false);

  const stock = watchlist.find((stock) => stock.name === symbol);

  const handleSellClick = async () => {
    try {
      setLoading(true);
      await axios.post(
        `${API_URL}/dashboard/sellOrder`,
        {
          name: symbol,
          qty: stockQuantity,
          price: stock.cmp, // always sell at CMP
          mode: "SELL",
        },
        { withCredentials: true }
      );
      closeSellWindow();
    } catch (err) {
      console.error("Order failed:", err);
      alert("Failed to place order.");
    } finally {
      setLoading(false);
    }
  };

  const handleCancelClick = () => {
    closeSellWindow();
  };

  return (
    <div className="container" id="buy-window">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(Number(e.target.value))}
              value={stockQuantity}
              min="1"
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <div>
          <button
            className="btn btn-blue"
            onClick={handleSellClick}
            disabled={loading}
          >
            {loading ? "Placing..." : "Sell"}
          </button>
          <button
            className="btn btn-grey"
            onClick={handleCancelClick}
            disabled={loading}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;
