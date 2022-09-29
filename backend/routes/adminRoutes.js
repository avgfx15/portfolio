const express = require("express");
const adminRoutes = express.Router();
const AdminSignupSchema = require("../model/adminSignupSchema");
const bcrypt = require("bcryptjs");

adminRoutes.get("/", async (req, res) => {
  res.send("Hello World! admin Signup routes");
});

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
          password: hashPassword,
          cPassword,
        });
        const salt = await bcrypt.genSalt(10);

        adminData.password = await bcrypt.hash(password, salt);
        adminData.cPassword = await bcrypt.hash(cPassword, salt);

        await adminData.save();

        res
          .status(200)
          .json({ message: "New Admin Sign Up Successfully", adminData });
      } else {
        res.status(401).json({ message: "Password doesn't match" });
      }
    } else {
      res.status(401).json({ message: "Admin Already Registered" });
    }
  } catch (error) {
    res.status(501).json({ message: "Server Error" });
  }
});

module.exports = adminRoutes;
