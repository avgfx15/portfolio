const express = require("express");
const contactUsRoute = express.Router();
const ContactUsSchema = require("../model/contactUs");

contactUsRoute.get("/", async (req, res) => {
  try {
    const getAllMessage = await ContactUsSchema.find();

    if (getAllMessage) {
      res.status(200).json(getAllMessage);
    } else {
      res.status(401).json({ message: "Error, Sorry message not Sent" });
    }
  } catch (error) {
    res.status(401).json({ message: "Error, Sorry message not Sent" });
  }
});
contactUsRoute.post("/", async (req, res) => {
  try {
    const { name, email, mobile, message } = req.body;

    const contacuUsMessage = new ContactUsSchema({
      name,
      email,
      mobile,
      message,
    });

    const contactUsData = await contacuUsMessage.save();

    res
      .status(200)
      .json({ message: "Message sent full successfully", contactUsData });
  } catch (error) {
    res.status(401).json({ message: "Error, Sorry message not Sent" });
  }
});

module.exports = contactUsRoute;
