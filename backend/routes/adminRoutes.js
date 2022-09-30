const express = require("express");
const adminRoutes = express.Router();
const AdminSignupSchema = require("../model/adminSignupSchema");
const bcrypt = require("bcryptjs");

// ` All Admin Data Get Method
adminRoutes.get("/", async (req, res) => {
  res.send("Hello World! admin Signup routes");
});

// + Admin Sign Up Post Method
adminRoutes.post("/", async (req, res) => {
  const { name, email, password, cPassword } = req.body;
  try {
    const findAdmin = await AdminSignupSchema.findOne({ email: email });
    console.log(findAdmin);

    if (!findAdmin) {
      if (password === cPassword) {
        const adminData = new AdminSignupSchema({
          name,
          email,
          password,
          cPassword,
        });
        const salt = await bcrypt.genSalt(10);

        adminData.password = await bcrypt.hash(password, salt);
        adminData.cPassword = await bcrypt.hash(cPassword, salt);

        await adminData.save();

        res
          .status(200)
          .json({ msgBack: "New Admin Sign Up Successfully", adminData });
      } else {
        res.status(401).json({ msgBack: "Password doesn't match" });
      }
    } else {
      res.status(401).json({ msgBack: "Admin Already Registered" });
    }
  } catch (error) {
    res.status(501).json({ msgBack: "Server Error" });
  }
});

module.exports = adminRoutes;
