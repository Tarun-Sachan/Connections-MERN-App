const mongoose = require("mongoose");

const connectionsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide connection name"],
      maxlength: 50,
    },
    position: {
      type: String,
      required: [true, "Please provide position"],
      maxlength: 100,
    },
    company: {
      type: String,
      required: [true, "Please provide position"],
      maxlength: 50,
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide user"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Connections", connectionsSchema);
