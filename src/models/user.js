const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String },
  phone_number: { type: String },
  email: { type: String },
  message: { type: String },
  created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model("User", userSchema);
