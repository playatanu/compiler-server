const router = require("express").Router();
const authMiddleware = require("../middlewares/authMiddleware");
const { codeFeeds } = require("../functions/codeFeedsFunction");
// GET code Feeds
router.route("/").get(authMiddleware, async (req, res) => {
  res.send(await codeFeeds(req.body.id));
});
module.exports = router;
