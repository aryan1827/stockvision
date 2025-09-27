import { useState, useEffect } from "react";
import "./Funds.css";
import axios from "axios";

const Funds = () => {
  const FRONTEND_URL = process.env.REACT_APP_FRONTEND_URL;
  const API_URL = process.env.REACT_APP_API_URL;

  const [balance, setBalance] = useState(0);
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const res = await axios.get(
          `${API_URL}/dashboard/wallet/balance`,
          {
            withCredentials: true, // include cookie for JWT
          }
        );
        setBalance(res.data.wallet);
      } catch (error) {
        console.error("Error fetching wallet balance:", error);
      }
    };

    fetchBalance();
  }, []); // empty dependency array → runs once on mount

  const handleSubmit = async (e, type) => {
    e.preventDefault();
    const value = parseFloat(amount);

    if (!value || value <= 0) return;

    try {
      if (type === "add") {
        const res = await axios.post(
          `${API_URL}/dashboard/wallet/add`,
          { amount: value },
          { withCredentials: true }
        );
        setBalance(res.data.wallet);
        setMessage(`₹${value.toLocaleString()} added successfully!`);
      } else if (type === "withdraw") {
        if (value > balance) {
          setMessage("Insufficient funds!");
          return;
        }
        const res = await axios.post(
          `${API_URL}/dashboard/wallet/withdraw`,
          { amount: value },
          { withCredentials: true }
        );
        setBalance(res.data.wallet); // ✅ sync with backend
        setMessage(`₹${value.toLocaleString()} withdrawn successfully!`);
      }
    } catch (error) {
      console.error(error);
      setMessage("Transaction failed. Please try again.");
    }

    setAmount("");
  };

  return (
    <div className="wallet-container card shadow-lg p-4">
      <h2 className="text-center mb-3">Wallet Balance</h2>
      <p className="balance-display text-center mb-4">
        ₹{balance.toLocaleString()}
      </p>

      <form className="mb-3">
        <div className="mb-3">
          <input
            type="number"
            className="form-control form-control-lg"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            min="0"
            step="0.01"
          />
        </div>

        <div className="d-flex gap-2 justify-content-center">
          <button
            type="button"
            className="btn btn-success btn-lg"
            onClick={(e) => handleSubmit(e, "add")}
          >
            Add Funds
          </button>
          <button
            type="button"
            className="btn btn-danger btn-lg"
            onClick={(e) => handleSubmit(e, "withdraw")}
          >
            Withdraw
          </button>
        </div>
      </form>

      {message && (
        <div
          className={`alert text-center ${
            message.includes("successfully") ? "alert-success" : "alert-danger"
          }`}
        >
          {message}
        </div>
      )}

      <div className="text-muted small text-center">
        <div>• Minimum transaction: ₹1</div>
        <div>• Withdrawals cannot exceed available balance</div>
      </div>
    </div>
  );
};

export default Funds;
