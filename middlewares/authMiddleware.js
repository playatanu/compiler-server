const { tokenVerify } = require("../functions/token");
const authMiddleware = (req, res, next) => {
  try {
    if (req.body.id == tokenVerify(req.headers.token)) {
      next();
    } else {
      res.send("Token Fail");
    }
  } catch (error) {
    res.send(error);
  }
};

module.exports = authMiddleware;
