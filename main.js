require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path")
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const tripRoutes = require("./routes/tripRoutes");
const flightRoutes = require("./routes/flightRoutes");
const accRoutes = require("./routes/accommodationRoutes");
const checkoutRoutes = require("./routes/checkoutRoutes");
const app = express();
const port = 3001;

app.use(cors());

mongoose
  .connect("mongodb://127.0.0.1:27017/ux")
  .then(() => {
    console.log("connected");
    app.listen(port, () => {
      console.log(`running on port : ${port}`);
    });
  })
  .catch((err) => console.log(err));

app.use("/images", express.static(path.join(__dirname, "/images")));

app.use(express.json());


app.use("/user", userRoutes);
app.use("/trips", tripRoutes);
app.use("/flights", flightRoutes);
app.use("/accommodation", accRoutes);
app.use("/checkout", checkoutRoutes);
//error handling middlware
app.use((err, req, res, next) => {
  console.log(err.stack);
  if (res.statusCode == 200) res.status(500);
  res.json({ msg: err.message });
});

module.exports = app;
