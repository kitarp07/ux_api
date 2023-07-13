const express = require("express");
const router = express.Router();
const flightsController = require("../controller/flightsController");
const multer = require("multer");
const path = require("path");
const Flights = require("../model/Flights");
const upload = require("../middleware/upload");

//Validate upload file
const FILE_TYPE_MAP = {
  "image/jpeg": "jpeg",
  "image/png": "png",
  "image/jpg": "jpg",
};

router.post("/create-flight", upload.array("images", 5), (req, res, next) => {
  start_date = new Date(req.body.startDate);
  end_date = new Date(req.body.endDate);
  nop = Number(req.body.numberOfPassengers);
  pricee = Number(req.body.price);
  images = [];

  if (req.files) {
    const files = req.files;
    // console.log(files)

    for (const i in files) {
      console.log(i);
      filename = "images/" + files[i].filename;
      images.push(filename);
    }
  }

  let flight = {
    airline: req.body.airline,
    departure_time: req.body.departure_time,
    arrival_time: req.body.arrival_time,
    origin: req.body.origin,
    destination: req.body.destination,
   
    no_of_passengers: nop,
    price: pricee,
    img: images,
  };

  Flights.create(flight)
    .then((flight) => {
      res.status(201).json(flight);
    })
    .catch(next);
});
router.route('/').get(flightsController.getAllFlights)

router.route("/:id").get(flightsController.getFlightbyId);


module.exports = router;
