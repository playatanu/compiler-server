const Code = require("../models/codeModel");

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

const deleteCodeByID = async (id) => {
  try {
    return await Code.findByIdAndDelete(id);
  } catch (error) {
    return error;
  }
};

const patchCodeByID = async (id, body) => {
  try {
    return await Code.findByIdAndUpdate(id, body);
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
