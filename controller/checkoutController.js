const Checkout = require("../model/Checkout");

const createCheckout = (req, res, next) => {
  num = Number(req.body.numTravelers);

  let checkout = {
    user: req.body.user,
    trip: req.body.trip,
    numTravelers: num,
  };

  Checkout.create(checkout)
    .then((checkout) => {
      res.status(201).json(checkout);
    })
    .catch(next);
};

const getCheckoutHistory = (req, res, next) => {
  Checkout.find().then((bookings) => res.json(bookings));
};

module.exports = { createCheckout, getCheckoutHistory };
