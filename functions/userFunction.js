const User = require("../models/userModel");
const { tokenVerify } = require("../functions/token");

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

const deleteUserByID = async (token, id) => {
  try {
    if (id == tokenVerify(token)) return await User.findByIdAndDelete(id);
    else return "You are not Admin";
  } catch (error) {
    return error;
  }
};

const patchUserByID = async (token, id, body) => {
  try {
    if (id == tokenVerify(token)) return await User.findByIdAndUpdate(id, body);
    else return "You are not Admin";
  } catch (error) {
    return error;
  }
};

module.exports = {
  getallUser,
  getUserByID,
  deleteUserByID,
  patchUserByID,
};
