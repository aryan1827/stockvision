import { positions } from "../data/data";

const Positions = () => {
  return (
    <>
      <h3 className="title">Positions ({positions.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Product</th>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.</th>
            <th>LTP</th>
            <th>P&L</th>
            <th>Chg.</th>
          </tr>

          {positions.map((stock, index) => {
            let currVal = stock.price * stock.qty;
            let profit = currVal - stock.avg * stock.qty;
            let isProfit = profit >= 0.0;
            let profitClass = isProfit ? "profit" : "loss";
            let dayClass = stock.isLoss ? "loss" : "profit";
            return (
              <tr>
                <td>{stock.product}</td>
                <td className={dayClass}>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.avg}</td>
                <td>{stock.price}</td>
                <td className={profitClass}>{profit.toFixed(2)}</td>
                <td className={dayClass}>{stock.day}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default Positions;
