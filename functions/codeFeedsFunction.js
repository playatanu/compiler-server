const User = require("../models/userModel");
const Code = require("../models/codeModel");

const codeFeeds = async (id) => {
  try {
    const currentUser = await User.findById(id);
    const userCodes = await Code.find({ user: currentUser._id });

    const friendCodes = await Promise.all(
      currentUser.following.map((value) => {
        return Code.find({ user: value });
      })
    );

    return userCodes.concat(...friendCodes);
  } catch (error) {
    return error;
  }
};

module.exports = { codeFeeds };
