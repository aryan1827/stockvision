import { useState } from "react";
import { Tooltip } from "@mui/material";
import { watchlist } from "../data/data";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import BarChartOutlined from "@mui/icons-material/BarChartOutlined";

const WatchList = () => {
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
        <span className="counts"> {watchlist.length} / 50</span>
      </div>

      <ul className="list">
        {watchlist
          .filter((stock) => {
            return stock.name.includes(query.toUpperCase());
          })
          .map((stock, index) => {
            return <WatchListItem stock={stock} key={index} />;
          })}
      </ul>
    </div>
  );
};

export default WatchList;

const WatchListItem = ({ stock, key }) => {
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
      {showWatchListAction && <WatchListIcons />}
    </li>
  );
};

const WatchListIcons = () => {
  return (
    <span className="actions">
      <span>
        <Tooltip title="Buy (B)" placement="top" arrow>
          <button className="buy">Buy</button>
        </Tooltip>
        <Tooltip title="Sell (S)" placement="top" arrow>
          <button className="sell">Sell</button>
        </Tooltip>
        <Tooltip title="Analytics (A)" placement="top" arrow>
          <button className="action">
            <BarChartOutlined className="icon" />
          </button>
        </Tooltip>
      </span>
    </span>
  );
};
