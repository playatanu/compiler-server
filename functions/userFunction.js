const User = require("../models/userModel");
const { tokenCreate } = require("./token");
const { hashUser, hashUserCompire } = require("./hashPassword");

// ------------------ - User Auth System - ---------------------------

const createUser = async (body) => {
  try {
    const newUser = new User(await hashUser(body));
    await newUser.save();
    return { token: tokenCreate(newUser.id) };
  } catch (error) {
    return error;
  }
};

const loginUser = async (body) => {
  try {
    const user = await User.findOne({ email: body.email });
    if (await hashUserCompire(body.password, user.password)) {
      return { token: await tokenCreate(user.id) };
    }
  } catch (error) {
    return error;
  }
};

// ------------------ - User System - ---------------------------

const getallUser = async () => {
  try {
    return await User.find();
  } catch (error) {
    return error;
  }
};

const getUserByID = async (id) => {
  try {
    return await User.findById(id);
  } catch (error) {
    return error;
  }
};

const deleteUserByID = async (id) => {
  try {
    return await User.findByIdAndDelete(id);
  } catch (error) {
    return error;
  }
};

const patchUserByID = async (id, body) => {
  try {
    return await User.findByIdAndUpdate(id, body);
  } catch (error) {
    return error;
  }
};

module.exports = {
  createUser,
  loginUser,
  getallUser,
  getUserByID,
  deleteUserByID,
  patchUserByID,
};
