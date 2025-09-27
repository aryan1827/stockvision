const { Signup, Login,Logout } = require("../controllers/authController");
const { userVerification } = require("../middlewares/AuthMiddleware");
const router = require("express").Router();



router.post("/signup", Signup);
router.post("/login", Login);
router.post("/logout", Logout);

router.get("/verify", userVerification, (req, res) => {
  res.json({ success: true, user: req.user });
});

module.exports = router;
