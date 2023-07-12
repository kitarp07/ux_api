const Trip = require("../model/Trips");
const multer = require("multer");

const path = require("path");
const upload = require("../middleware/upload");
const Trips = require("../model/Trips");

//Validate upload file
const FILE_TYPE_MAP = {
  "image/jpeg": "jpeg",
  "image/png": "png",
  "image/jpg": "jpg",
};

const addTrip = (req, res, next) => {
  start_date = new Date(req.body.startDate);
  end_date = new Date(req.body.endDate);
  nop = Number(req.body.numberOfPassengers);
  pricee = Number(req.body.price);
  let trip = {
    origin: req.body.origin,
    destination: req.body.destination,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    numberOfPassengers: nop,
    price: pricee,
    img: req.body.img,
  };

  Trip.create(trip)
    .then((trip) => {
      res.status(201).json(trip);
    })
    .catch(next);
};

const getAllTrips = (req, res, next) => {
  Trips.find().then((trips) => res.json(trips));
};

const getTripbyId = (req, res, next) => {
  Trips.findById(req.params.id)
  .then((trip) => {
    res.json(trip);
  })
  .catch((err)=> console.log(err))
  ;
};
module.exports = { addTrip, getAllTrips, getTripbyId };
