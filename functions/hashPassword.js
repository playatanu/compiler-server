const bcrypt = require("bcrypt");
const hashUser = async (body) => {
  const hashPassword = await bcrypt.hash(body.password, 10);
  body.password = hashPassword;
  return body;
};

const hashUserCompire = async (password, hash) => {
  return await bcrypt.compare(password, hash);
};

module.exports = { hashUser, hashUserCompire };
