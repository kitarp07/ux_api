const Accommodation = require("../model/Accommodation");

const addAccommodation = (req, res, next) => {
  let accommodation = {
    name: req.body.name,
    location: req.body.location,
    checkInDate: req.body.checkInDate,
    checkOutDate: req.body.checkOutDate,
    numberOfGuests: req.body.numberOfGuests,
    description: req.body.description,
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


const getAccommodationbyId = (req, res, next) => {
  Accommodation.findById(req.params.id)
  .then((accommodation) => {
    console.log(accommodation)
    res.status(200).json(accommodation);
  })
  .catch((err)=> console.log(err))
  ;
};

module.exports = { addAccommodation, getAllAccommodation, getAccommodationbyId };
