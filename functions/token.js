const jwt = require("jsonwebtoken");

const tokenCreate = (id) => {
  try {
    return jwt.sign(id, process.env.JWT);
  } catch (error) {
    return error;
  }
};

const tokenVerify = async (token) => {
  try {
    return jwt.verify(token, process.env.JWT);
  } catch (error) {
    return error;
  }
};

module.exports = { tokenCreate, tokenVerify };
