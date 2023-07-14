const Checkout = require("../model/Checkout");
const User = require("../model/User");
const Trip = require("../model/Trips");
const Flight = require("../model/Flights");
const Stay = require("../model/Accommodation");

const createCheckout = (req, res, next) => {
  num = Number(req.body.numTravelers);
  pricee = Number(req.body.pricee);
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
    trip_type: req.body.trip_type,
    price: pricee
  };

  Checkout.create(checkout)
    .then((checkout) => {
      res.status(201).json(checkout);
    })
    .catch(next);
};

const getCheckoutHistory = (req, res, next) => {
  Checkout.find()
    .populate("user")
    .populate("trip")
    .populate("flight")
    .populate("stay")
    .then((bookings) => res.json(bookings));
};

module.exports = { createCheckout, getCheckoutHistory };
