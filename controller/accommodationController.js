const Accommodation = require("../model/Accommodation");

const addAccommodation = (req, res, next) => {
  let accommodation = {
    name: req.body.name,
    location: req.body.location,
    checkInDate: req.body.checkInDate,
    checkOutDate: req.body.checkOutDate,
    numberOfGuests: req.body.numberOfGuests,
    price: req.body.price,
  };

  Accommodation.create(accommodation)
    .then((data) => {
      res.status(201).json(data);
    })
    .catch(next);
};

const getAllAccommodation = (req, res, next) => {
  Accommodation.find().then(
    (stays) => 
    res.json(stays)
  );
};
module.exports = { addAccommodation, getAllAccommodation };
