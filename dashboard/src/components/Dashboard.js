import { Route, Routes } from "react-router-dom";
import Summary from "./Summary";
import WatchList from "./WatchList";
import Holdings from "./Holdings";
import Orders from "./Orders";
import Positions from "./Positions";
import Funds from "./Funds";
import { GeneralContextProvider } from "./GeneralContext";
import Analytics from "./Analytics";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <GeneralContextProvider>
        <WatchList />
      </GeneralContextProvider>
      
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Summary />} />
          <Route exact path="/holdings" element={<Holdings />} />
          <Route exact path="/orders" element={<Orders />} />
          <Route exact path="/positions" element={<Positions />} />
          <Route exact path="/funds" element={<Funds />} />
          <Route exact path="/analytics/:symbol" element={<Analytics />} />
          
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
