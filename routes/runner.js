const compiler = require("../functions/compiler");
const authMiddleware = require("../middlewares/authMiddleware");
const router = require("express").Router();

router.route("/").post(authMiddleware, async (req, res) => {
  const output = await compiler(req.body.code, req.body.input, req.body.len);
  res.send(output);
});

module.exports = router;
