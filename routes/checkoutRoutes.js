const express = require("express");
const router = express.Router();
const checkoutController = require("../controller/checkoutController");
const Checkout = require("../model/Checkout");

router
  .route("/")
  .get(checkoutController.getCheckoutHistory)
  .post(checkoutController.createCheckout);


module.exports = router