const Flights= require("../model/Flights");

const addFlight = (req, res, next) => {
  let flight = {
    airline: req.body.airline,
    origin: req.body.origin,
    destination: req.body.destination,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    numberOfPassengers: req.body.numberOfPassengers,
    price: req.body.price,
  };

  Flights.create(flight)
    .then((flight) => {
      res.status(201).json(flight);
    })
    .catch(next);
};

const getAllFlights = (req, res, next) => {
  Flights.find().then(
    (flights) => 
    res.json(flights)
  );
};


const getFlightbyId = (req, res, next) => {
  Flights.findById(req.params.id)
  .then((flight) => {
    console.log(flight)
    res.status(200).json(flight);
  })
  .catch((err)=> console.log(err))
  ;
};

module.exports = { addFlight, getAllFlights, getFlightbyId };
