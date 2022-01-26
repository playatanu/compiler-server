const jwt = require("jsonwebtoken");
const authMiddleware = (req, res, next) => {
  if (req.body.id == jwt.verify(req.headers.token, "jwtkey")) {
    next();
  } else {
    res.send("Auth Fail");
  }
};

module.exports = authMiddleware;
