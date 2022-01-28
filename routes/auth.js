const router = require("express").Router();
const { createUser, loginUser } = require("../functions/authFunction");

// GET user signup
router.route("/signup").post(async (req, res) => {
  res.send(await createUser(req.body));
});

// POST user login
router.route("/login").post(async (req, res) => {
  res.send(await loginUser(req.body));
});

// GET user veryify email
router.route("/verify").get(async (req, res) => {
  res.send("verify");
});

module.exports = router;
