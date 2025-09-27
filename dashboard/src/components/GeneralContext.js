import { createContext, useState } from "react";

import BuyActionWindow from "./BuyActionWindow";
import SellActionWindow from "./SellActionWindow";

const GeneralContext = createContext({
  openBuyWindow: (symbol) => {},
  closeBuyWindow: () => {},
  openSellWindow: (symbol) => {},
  closeSellWindow: () => {},
});

export const GeneralContextProvider = (props) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [selectedStockSymbol, setSelectedStockSymbol] = useState("");
  const [isSellWindowOpen, setIsSellWindowOpen] = useState(false);
  

  const handleOpenBuyWindow = (symbol) => {
    setIsBuyWindowOpen(true);
    setSelectedStockSymbol(symbol);
  };

  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockSymbol("");
  };

  const handleOpenSellWindow = (symbol) => {
    setIsSellWindowOpen(true);
    setSelectedStockSymbol(symbol);
  };
  const handleCloseSellWindow = () => {
    setIsSellWindowOpen(false);
    setSelectedStockSymbol("");
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,
        openSellWindow: handleOpenSellWindow,
        closeSellWindow: handleCloseSellWindow,
      }}
    >
      {props.children}
      {isBuyWindowOpen && <BuyActionWindow symbol={selectedStockSymbol} />}
      {isSellWindowOpen && <SellActionWindow symbol={selectedStockSymbol} />}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;
