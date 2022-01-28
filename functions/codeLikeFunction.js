const Code = require("../models/codeModel");
const likeCode = async (id, userId) => {
  try {
    return await Code.findByIdAndUpdate(id, {
      $addToSet: { like: userId },
    });
  } catch (error) {
    return error;
  }
};
const unlikeCode = async (id, userId) => {
  try {
    return await Code.findByIdAndUpdate(id, {
      $pull: { like: userId },
    });
  } catch (error) {
    return error;
  }
};

module.exports = { likeCode, unlikeCode };
