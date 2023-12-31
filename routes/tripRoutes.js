const express = require("express");
const router = express.Router();
const tripController = require("../controller/tripController");
const multer = require("multer");
const path = require("path");
const Trip = require("../model/Trips");
const upload = require("../middleware/upload");

//Validate upload file
const FILE_TYPE_MAP = {
  "image/jpeg": "jpeg",
  "image/png": "png",
  "image/jpg": "jpg",
};

router.post("/create-trip", upload.array("images", 5), (req, res, next) => {
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
  let trip = {
    title: req.body.title,
    origin: req.body.origin,
    destination: req.body.destination,
    description: req.body.description,
    itinerary: req.body.itinerary,
    itinerary_2: req.body.itinerary_2,
    itinerary_3: req.body.itinerary_3,
    itinerary_4: req.body.itinerary_4,
    itinerary_5: req.body.itinerary_5,

    
    offer_1: req.body.offer_1,
    offer_2: req.body.offer_2,
    offer_3: req.body.offer_3,
    offer_4: req.body.offer_4,
    
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    numberOfPassengers: nop,
    price: pricee,
    img: images,
  };

  Trip.create(trip)
    .then((trip) => {
      res.status(201).json(trip);
    })
    .catch(next);
});
router.route("/").get(tripController.getAllTrips);

router.route("/:id").get(tripController.getTripbyId);


module.exports = router;
