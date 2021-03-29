const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movementSchema = new Schema(
    {
      name: String,
      amount: Number,
      type: Boolean,
      createdAt: Date,
      updatedAd: Date,

    },
    { timestamps: true }
  );
  
  const Movement = mongoose.model("Movement", movementSchema);
  
  module.exports = Movement;