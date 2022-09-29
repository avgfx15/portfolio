const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const connectDB = require("./database/db");
connectDB();

const contactUsRoutes = require("./routes/contactUsRoute");

app.use("/contactus", contactUsRoutes);

const adminRoutes = require("./routes/adminRoutes");
app.use("/signup", adminRoutes);

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
