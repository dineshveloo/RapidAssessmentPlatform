const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");
const msgs = require('../../email/email.msgs');
const sendEmail = require('../../email/email.send');
const userEmail = require('../../email/email.user');

// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

// Load User model
const User = require("../../models/User");

// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/register", (req, res) => {
  // Form validation

  const { errors, isValid } = validateRegisterInput(req.body);
  ///console.log(req.body);
  // return req.body
  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      });
      res.json({ msg: 'user' })

      // console.log("---->" + newUser);
      // return JSON.stringify(newUser);
      // Hash password before saving in database
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

// @route POST api/users/signin
// @desc Login user and return JWT token
// @access Public
router.post("/signin", (req, res) => {
  // Form validation

  const { errors, isValid } = validateLoginInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  // Find user by email
  User.findOne({ email }).then(user => {
    // Check if user exists
    if (!user) {
      return res.json({ msg: "email not found", status: 0 });
    }

    // Check password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        const payload = {
          id: user.id,
          name: user.name
        };

        // Sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 31556926 // 1 year in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        return res
          .status(400)
          .json({ passwordincorrect: "Password incorrect" });
      }
    });
  });
});

router.post("/confirm", (req, res) => {

  User.findOne({ email: req.body.email }).then(user => {

    if (user) {
      // res.json({msg: "here"})
      if (user && !user.confirmed) {
        //res.json({ msg: "here" })
        res.json({ msg: msgs.resend, status: 0 })
      }
      else if (user && user.confirmed) {
        //res.json({ msg: "here" })
       res.json({ msg: "you are already confirm", status: 2 })   

    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        company: req.body.company
      });

      newUser
        .save()
        .then(
          sendEmail.email(newUser))
        .then(user => res.json({ msg: msgs.EmailSent, status: 1 }))
        .catch(err => console.log(err));
    }
  }
  });
});


router.get('/approve/:email/:id', (req, res) => {
  let { email, id } = req.params;

  //res.json({ msg: email})
  //first update confirm in db, trigger email to user  
  userEmail.emailUser(email)

  User.findByIdAndUpdate(id, { confirmed: true })
    .then(() => res.json({ msg: "done" }))
    .catch(err => console.log(err))

});

module.exports = router;

