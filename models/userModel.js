const mongoose = require("mongoose");
const userSchemma = mongoose.Schema(
  {
    fname: { type: String, require: true },
    lname: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    varified: { type: Boolean, default: false },
    followers: { type: Array },
    following: { type: Array },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchemma);
