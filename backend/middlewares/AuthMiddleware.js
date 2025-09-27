const { UsersModel } = require("../models/UsersModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");

function userVerification(req, res) {
  const token = req.cookies?.token;
  if (!token) {
    return res.status(401).json({ status: false });
  }
  jwt.verify(token, process.env.TOKEN_KEY, async (err, decoded) => {
    if (err) {
      return res.status(403).json({ status: false });
    } else {
      const user = await UsersModel.findById(decoded.id);
      if (user) return res.json({ status: true, user: user.username });
      else return res.json({ status: false });
    }
  });
}

module.exports = { userVerification };
