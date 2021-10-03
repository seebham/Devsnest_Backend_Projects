const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    name: { type: String, default: " ", required: true },
    email: { type: String, default: " ", required: true },
    password: { type: String, default: " " },
    role: {
      type: String,
      default: "user",
      required: true,
      enum: ["user", "admin", "superAdmin"],
    },
  },
  { timestamps: true }
);

module.exports = User = mongoose.model("User", UserSchema);
