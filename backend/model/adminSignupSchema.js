const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var adminSignupSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      //   unique: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },
    cPassword: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

//Export the model
module.exports = AdminSignupSchema = mongoose.model(
  "AdminSignupSchema",
  adminSignupSchema
);
