const User = require("../models/userModel");
const { tokenCreate } = require("./token");
const { hashUser, hashUserCompire } = require("./hashPassword");
// ------------------ - User Auth System - ---------------------------

const createUser = async (body) => {
  try {
    const newUser = new User(await hashUser(body));
    await newUser.save();
    return { token: await tokenCreate(newUser.id) };
  } catch (error) {
    return error;
  }
};

const loginUser = async (body) => {
  try {
    const user = await User.findOne({ email: body.email });
    if (await hashUserCompire(body.password, user.password))
      return { token: await tokenCreate(user.id) };
    else return "Auth Fail";
  } catch (error) {
    return error;
  }
};

module.exports = {
  createUser,
  loginUser,
};
