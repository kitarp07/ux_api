const Checkout = require("../model/Checkout");

const createCheckout = (req, res, next) => {
  num = Number(req.body.numTravelers);

  let checkout = {
    user: req.body.user,
    trip: req.body.trip,
    flight: req.body.flight,
    stay: req.body.stay,
    numTravelers: num,
    street_address: req.body.street_address,
    apartment_number: req.body.apartment_number,
    state: req.body.state,
    zipcode: req.body.zipcode,
    city: req.body.city,
    country: req.body.country,
    trip_type: req.body.trip_type
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
