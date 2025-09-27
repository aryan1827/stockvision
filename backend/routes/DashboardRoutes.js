const router = require("express").Router();
const { HoldingsModel } = require("../models/HoldingsModel");
const { PositionsModel } = require("../models/PositionsModel");
const { OrdersModel } = require("../models/OrdersModel");
const { UsersModel } = require("../models/UsersModel");
const jwt = require("jsonwebtoken");

router.get("/addHoldings", async (req, res) => {
  let holdingsData = await HoldingsModel.find({});
  res.json(holdingsData);
});

router.get("/addPositions", async (req, res) => {
  let positionsData = await PositionsModel.find({});
  res.json(positionsData);
});

router.get("/orders", async (req, res) => {
  try {
    const token = req.cookies?.token;
    if (!token) return res.status(401).json({ message: "Unauthorized" });

    const decoded = jwt.verify(token, process.env.TOKEN_KEY);

    const orders = await OrdersModel.find({ userId: decoded.id }).sort({
      timestamp: -1,
    });
    res.json(orders);
  } catch (err) {
    console.error("Error fetching orders:", err);
    if (err.name === "JsonWebTokenError") {
      return res.status(403).json({ message: "Forbidden" });
    }
    res.status(500).json({ message: "Server error" });
  }
});

router.post("/newOrder", async (req, res) => {
  try {
    const token = req.cookies?.token;
    if (!token) return res.status(401).json({ message: "Unauthorized" });

    const decoded = jwt.verify(token, process.env.TOKEN_KEY);
    const user = await UsersModel.findById(decoded.id).select("wallet");
    if (!user) return res.status(404).json({ message: "User not found" });

    const { name, qty, price, cmp, mode } = req.body;
    const totalPrice = qty * price;

    if (mode === "BUY" && user.wallet < totalPrice) {
      return res.status(400).json({ message: "Insufficient funds" });
    }

    let updatedWallet = user.wallet;
    if (mode === "BUY") {
      const updatedUser = await UsersModel.findByIdAndUpdate(
        decoded.id,
        { $inc: { wallet: -totalPrice } },
        { new: true, select: "wallet" }
      );
      updatedWallet = updatedUser.wallet;
    }

    const newOrder = new OrdersModel({
      userId: decoded.id,
      name,
      qty,
      price,
      cmp,
      mode,
    });

    await newOrder.save();

    res.json({
      message: "Order placed successfully",
      wallet: updatedWallet,
    });
  } catch (err) {
    console.error("Error saving order:", err);
    if (err.name === "JsonWebTokenError") {
      return res.status(403).json({ message: "Forbidden" });
    }
    res.status(500).json({ message: "Server error" });
  }
});

router.post("/sellOrder", async (req, res) => {
  try {
    const token = req.cookies?.token;
    if (!token) return res.status(401).json({ message: "Unauthorized" });

    const decoded = jwt.verify(token, process.env.TOKEN_KEY);

    const user = await UsersModel.findById(decoded.id).select("wallet");
    if (!user) return res.status(404).json({ message: "User not found" });

    const { name, qty, price, mode } = req.body;
    const totalPrice = qty * price;

    let updatedWallet = user.wallet;

    if (mode === "SELL") {
      // 1. Find all orders of this stock
      let orders = await OrdersModel.find({
        userId: decoded.id,
        name: name,
      }).sort({ createdAt: 1 }); // FIFO: earliest first

      // 2. Check total available qty
      const totalQty = orders.reduce((sum, o) => sum + o.qty, 0);
      if (totalQty < qty) {
        return res.status(400).json({ message: "Not enough quantity to sell" });
      }

      // 3. Increment wallet
      const updatedUser = await UsersModel.findByIdAndUpdate(
        decoded.id,
        { $inc: { wallet: +totalPrice } },
        { new: true, select: "wallet" }
      );
      updatedWallet = updatedUser.wallet;

      // 4. Reduce qty across orders (FIFO)
      let remainingToSell = qty;
      for (let order of orders) {
        if (remainingToSell <= 0) break;

        if (order.qty <= remainingToSell) {
          // consume entire order
          remainingToSell -= order.qty;
          await OrdersModel.findByIdAndDelete(order._id);
        } else {
          // partial reduce
          order.qty -= remainingToSell;
          await order.save();
          remainingToSell = 0;
        }
      }
    }

    res.status(200).json({
      message: "Sell order processed successfully",
      wallet: updatedWallet,
    });
  } catch (err) {
    console.error("Error saving order:", err);
    if (err.name === "JsonWebTokenError") {
      return res.status(403).json({ message: "Forbidden" });
    }
    res.status(500).json({ message: "Server error" });
  }
});


router.get("/wallet/balance", async (req, res) => {
  try {
    const token = req.cookies?.token;
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    jwt.verify(token, process.env.TOKEN_KEY, async (err, decoded) => {
      if (err) {
        return res.status(403).json({ message: "Forbidden" });
      } else {
        const user = await UsersModel.findById(decoded.id).select("wallet");
        if (!user) {
          return res.status(404).json({ message: "User not found" });
        }
        return res.json({ wallet: user.wallet });
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

router.post("/wallet/add", async (req, res) => {
  try {
    const token = req.cookies?.token;
    if (!token) return res.status(401).json({ message: "Unauthorized" });

    jwt.verify(token, process.env.TOKEN_KEY, async (err, decoded) => {
      if (err) return res.status(403).json({ message: "Forbidden" });

      const { amount } = req.body;
      if (!amount || amount <= 0) {
        return res.status(400).json({ message: "Invalid amount" });
      }

      // Update user's wallet
      const user = await UsersModel.findByIdAndUpdate(
        decoded.id,
        { $inc: { wallet: amount } }, // increment wallet by amount
        { new: true }
      ).select("wallet");

      if (!user) return res.status(404).json({ message: "User not found" });

      res.json({ message: "Funds added successfully", wallet: user.wallet });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});
router.post("/wallet/withdraw", async (req, res) => {
  try {
    const token = req.cookies?.token;
    if (!token) return res.status(401).json({ message: "Unauthorized" });

    jwt.verify(token, process.env.TOKEN_KEY, async (err, decoded) => {
      if (err) return res.status(403).json({ message: "Forbidden" });

      const { amount } = req.body;
      if (!amount || amount <= 0) {
        return res.status(400).json({ message: "Invalid amount" });
      }

      const user = await UsersModel.findById(decoded.id).select("wallet");
      if (!user) return res.status(404).json({ message: "User not found" });

      if (user.wallet < amount) {
        return res.status(400).json({ message: "Insufficient funds" });
      }

      const updatedUser = await UsersModel.findByIdAndUpdate(
        decoded.id,
        { $inc: { wallet: -amount } },
        { new: true }
      ).select("wallet");

      res.json({
        message: "Funds withdrawn successfully",
        wallet: updatedUser.wallet,
      });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
