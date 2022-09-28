const mongoose = require("mongoose");

dbUrl =
  "mongodb+srv://avgfx15:avgfx2015@portfolio.iddhhdx.mongodb.net/?retryWrites=true&w=majority";

const connectDB = async () => {
  const db = await mongoose.connect(dbUrl);

  if (db) {
    console.log("MongoDB Connection Succeeded.");
  } else {
    console.log("Error in DB connection: " + err);
  }
};

module.exports = connectDB;
