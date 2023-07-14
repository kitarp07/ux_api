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
      info_2: req.body.info_2,
      info_3: req.body.info_3,
      info_4: req.body.info_4,
      info_5: req.body.info_5,

      offer_1: req.body.offer_1,
      offer_2: req.body.offer_2,
      offer_3: req.body.offer_3,
      offer_4: req.body.offer_4,
     
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
