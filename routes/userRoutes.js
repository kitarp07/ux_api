const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../model/User");
const router = express.Router();
const jwt = require("jsonwebtoken");
const userController = require("../controller/userController");

router.post("/register", (req, res, next) => {
  console.log(req.body.password)
  console.log(req.body.email)
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (user != null) {
        let err = new Error (`User with email ${req.body.email} already exists`);
        res.status(400);
        return next(err);
      }

      console.log(req.body.password)
      bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) return next(err);

        user = new User({
          fullname: req.body.name,
          email: req.body.email,
          contact: req.body.contact,
          password: bcrypt.hashSync(req.body.password, 10),
        });

        user.save().then((user) => {
          res.status(201).json({
            status: "User registered succesfully",
            userId: user._id,
            userData: user,
          });
        });
      });
    })
    .catch(next);
});

router.post("/login", (req, res, next) => {
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (user == null) {
        let err = new Error(`User ${req.body.email} not registered`);
        res.status(404);
        return next(err);
      }

      bcrypt.compare(req.body.password, user.password, (err, statuss) => {
        if (err) return next(err);

        if (!statuss) {
          let err = new Error("Password does not match");
          return next(err);
        }

        let data = {
          userId: user._id,
          email: user.email,
        };

        jwt.sign(
          data,
          process.env.SECRET,
          { expiresIn: "30d" },
          (err, token) => {
            if (err) return next(err);

            console.log("Logged in");

            res.status(201).json({
              status: "Login Successful",
              token: token,
              user: user,
              userID: user._id,
            });
          }
        );
      });
    })
    .catch(next);
});


router.route("/").get(userController.getAllUsers);

router.route("/:id").get(userController.getUserbyId);


module.exports = router;
