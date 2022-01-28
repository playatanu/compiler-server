const compiler = require("../functions/compiler");
const router = require("express").Router();

router.route("/").post(async (req, res) => {
  res.send(await compiler(req.body.code, req.body.input, req.body.len));
});

module.exports = router;
