const Users = require("../model/User");
const bcrypt = require("bcryptjs");
const getAllUsers = (req, res, next) => {
  Users.find().then((data) => {
    console.log(data);

    res.json(data);
  });
};

const getUserbyId = (req, res, next) => {
  Users.findById(req.params.id)
    .then((data) => {
      console.log(data);
      res.status(200).json(data);
    })
    .catch((err) => console.log(err));
};

const updateUser = (req, res, next) => {
  Users.findById(req.params.id)
    .then((user) => {
      console.log(req.body.fullname);
      if (req.body.fullname) {
        user.fullname = req.body.fullname;
      }

      if (req.body.email) {
        user.email = req.body.email;
      }

      if (req.body.contact) {
        user.contact = req.body.contact;
      }

      if (req.body.password) {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) return next(err);

          user.password = hash;
        });
      }

      user
        .save()
        .then((user) => {
          console.log(user);
          res.status(201).json({
            status: "User updated successfully",
            userId: user._id,
            username: user.username,
          });
        })
        .catch(next);
    })
    .catch(next);
};

module.exports = { getAllUsers, getUserbyId, updateUser };
