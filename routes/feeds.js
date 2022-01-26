const router = require("express").Router();
const authMiddleware = require("../middlewares/authMiddleware");
// GET code Feeds
router.route("/feeds").get(authMiddleware, async (req, res) => {
  res.send("feeds");
});
module.exports = router;
