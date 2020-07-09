
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
    if (user && user.confirmed) {
      const newUser = new User({
        password: req.body.password
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          if (user.password.length < 0) {
            newUser.password = hash;
            User.findByIdAndUpdate(user.id, { password: newUser.password })
              .then(() => res.json({ msg: 'success', status: 1 }))
              .catch(err => console.log(err))
          } else {
            res.json({ msg: "you're already a registered user", status: 4 })
          }

        });
      });

    } else if (user && !user.confirmed) {
      res.json({ msg: "you're email'id is not registered wih us. please send a request to get register!", status: 2 })
    }
    else {
      res.json({ msg: "please send request to get register.", status: 3 })
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
      return res.json({ msg: "your email id is not regisered to RAP. please register. ", status: 0 });
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
        res.json({ msg: "you're email'id got confirmed to RAP. please regiser with your confirmed email'id.", status: 2 })

      }
    }
    else {
      // res.json({msg: "here"})
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
        .then(reset())
        .catch(err => console.log(err));
    }

  });
});


router.get('/approve/:email/:id', (req, res) => {
  let { email, id } = req.params;
  //res.json({ msg: email})
  //first update confirm in db, trigger email to user  
  userEmail.emailUser(email)

  User.findByIdAndUpdate(id, { confirmed: true })
    .then(() => res.json({ msg: "your have approved the user successfully" }))
    .catch(err => console.log(err))

});

module.exports = router;

