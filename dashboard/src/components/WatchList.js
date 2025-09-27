import { useState, useContext, use } from "react";
import { Tooltip } from "@mui/material";
import { watchlist } from "../data/data";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import BarChartOutlined from "@mui/icons-material/BarChartOutlined";
import GeneralContext from "./GeneralContext";
import { useNavigate } from "react-router-dom";

const WatchList = () => {
  const [analyticsClicked, setAnalyticsClicked] = useState(false);
  const [query, setQuery] = useState("");

  const handleEvent = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
          onChange={handleEvent}
          value={query}
        />
        <span className="counts"> {watchlist.length} / 100</span>
      </div>

      <ul className="list">
        {watchlist
          .filter((stock) => {
            return stock.name.includes(query.toUpperCase());
          })
          .map((stock, index) => {
            return (
              <WatchListItem
                key={`${stock.name}-${index}`}
                stock={stock}
                analyticsClicked={analyticsClicked}
                setAnalyticsClicked={setAnalyticsClicked}
              />
            );
          })}
      </ul>
    </div>
  );
};

export default WatchList;

const WatchListItem = ({ stock, analyticsClicked, setAnalyticsClicked }) => {
  const [showWatchListAction, setShowWatchListAction] = useState(false);

  const handleHover = () => {
    setShowWatchListAction(true);
  };

  const handleNotHover = () => {
    setShowWatchListAction(false);
  };

  return (
    <li onMouseEnter={handleHover} onMouseLeave={handleNotHover}>
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="item-info">
          <span>{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDownIcon className="down" />
          ) : (
            <KeyboardArrowUpIcon className="up" />
          )}
          <span>{stock.price}</span>
        </div>
      </div>
      {showWatchListAction && (
        <WatchListIcons
          symbol={stock.name}
          analyticsClicked={analyticsClicked}
          setAnalyticsClicked={setAnalyticsClicked}
        />
      )}
    </li>
  );
};

const WatchListIcons = ({ symbol, analyticsClicked, setAnalyticsClicked }) => {
  const generalContext = useContext(GeneralContext);
  const navigate = useNavigate();

  const handleBuyClick = () => {
    generalContext.openBuyWindow(symbol);
  };

  const handleSellClick = () => {
    generalContext.openSellWindow(symbol);
  };

  const handleAnalyticsClick = (e) => {
    if (symbol === "INFY") {
      setAnalyticsClicked(true);
    }
    navigate(`/analytics/${symbol}`);
  };

  return (
    <span className="actions">
      <span>
        <Tooltip title="Buy (B)" placement="top" arrow>
          <button className="buy" onClick={handleBuyClick}>
            Buy
          </button>
        </Tooltip>
        <Tooltip title="Sell (S)" placement="top" arrow>
          <button className="sell" onClick={handleSellClick}>
            Sell
          </button>
        </Tooltip>
        <Tooltip title="Analytics (A)" placement="top" arrow>
          <button
            className="action"
            disabled={analyticsClicked}
            onClick={handleAnalyticsClick}
          >
            <BarChartOutlined className="icon" />
          </button>
        </Tooltip>
      </span>
    </span>
  );
};
