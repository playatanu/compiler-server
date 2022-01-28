const User = require("../models/userModel");

const following = async (id) => {
  try {
    const user = await User.findById(id);
    return user.following;
  } catch (error) {
    return error;
  }
};

const followers = async (id) => {
  try {
    const user = await User.findById(id);
    return user.followers;
  } catch (error) {
    return error;
  }
};

const followById = async (id, userId) => {
  try {
    await User.findByIdAndUpdate(id, {
      $addToSet: { followers: userId },
    });
    await User.findByIdAndUpdate(userId, {
      $addToSet: { following: id },
    });

    return "unfollow";
  } catch (error) {
    return error;
  }
};

const unfollowById = async (id, userId) => {
  try {
    await User.findByIdAndUpdate(id, {
      $pull: { followers: userId },
    });
    await User.findByIdAndUpdate(userId, {
      $pull: { following: id },
    });
    return "unfollow";
  } catch (error) {
    return error;
  }
};

module.exports = { followById, unfollowById, following, followers };
