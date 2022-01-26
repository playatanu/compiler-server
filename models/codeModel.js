const mongoose = require("mongoose");
const codeSchema = mongoose.Schema(
  {
    user: { type: String, require: true },
    title: { type: String, require: true },
    dec: { type: String, require: true },
    code: { type: String, require: true },
    len: { type: String, require: true },
    like: { type: Array },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Code", codeSchema);
