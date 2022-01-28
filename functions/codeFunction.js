const Code = require("../models/codeModel");
const { tokenVerify } = require("./token");

const createCode = async (body) => {
  try {
    const newUser = new Code(body);
    await newUser.save();
    return newUser;
  } catch (error) {
    return error;
  }
};

const getallCode = async () => {
  try {
    return await Code.find();
  } catch (error) {
    return error;
  }
};

const getCodeByID = async (id) => {
  try {
    return await Code.findById(id);
  } catch (error) {
    return error;
  }
};

const deleteCodeByID = async (token, id) => {
  try {
    if (id == tokenVerify(token)) return await Code.findByIdAndDelete(id);
    else return "You can't Delete this!";
  } catch (error) {
    return error;
  }
};

const patchCodeByID = async (token, id, body) => {
  try {
    if (id == tokenVerify(token)) return await Code.findByIdAndUpdate(id, body);
    else return "You can't Edit this!";
  } catch (error) {
    return error;
  }
};

module.exports = {
  createCode,
  getallCode,
  getCodeByID,
  deleteCodeByID,
  patchCodeByID,
};
