const Users = require("../model/User");




const getAllUsers = (req, res, next) => {
  Users.find().then((data) =>
  {

    console.log(data);

    res.json(data);

  }
  
   );
};

const getUserbyId = (req, res, next) => {
  Users.findById(req.params.id)
  .then((data) => {
    console.log(data)
    res.status(200).json(data);
  })
  .catch((err)=> console.log(err))
  ;
};
module.exports = {  getAllUsers, getUserbyId };
