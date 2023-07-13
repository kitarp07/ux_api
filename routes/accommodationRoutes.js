const express = require("express");
const router = express.Router();
const accommodationController = require("../controller/accommodationController");
const multer = require("multer");
const path = require("path");

const upload = require("../middleware/upload");
const Accommodation = require("../model/Accommodation");

//Validate upload file
const FILE_TYPE_MAP = {
  "image/jpeg": "jpeg",
  "image/png": "png",
  "image/jpg": "jpg",
};

router.post(
  "/add-accommodation",
  upload.array("images", 5),
  (req, res, next) => {
    nog = Number(req.body.numberOfGuests);
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
    let accommodation = {
      name: req.body.name,
      location: req.body.location,
      checkInDate: req.body.checkInDate,
      checkOutDate: req.body.checkOutDate,
      description: req.body.description,
      info: req.body.info,
      numberOfGuests: nog,
      price: pricee,
      img: images,
    };

    Accommodation.create(accommodation)
      .then((stay) => {
        res.status(201).json(stay);
      })
      .catch(next);
  }
);

router.route("/").get(accommodationController.getAllAccommodation);

router.route("/:id").get(accommodationController.getAccommodationbyId);


module.exports = router;
