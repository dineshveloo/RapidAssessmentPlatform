const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");
const msgs = require('../../email/email.msgs');
const sendEmail = require('../../email/email.send');
const userEmail = require('../../email/email.user');
const userAck = require('../../email/email.ack');
const userRegister = require('../../email/email.register');

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
  try {
    const { errors, isValid } = validateRegisterInput(req.body);
    ///console.log(req.body);

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
            //res.json(res);
            if (!user.password) {
              newUser.password = hash;
              User.findByIdAndUpdate(user.id, { password: newUser.password })
                .then(() => res.json({ msg: 'success', status: 1 }))
                .catch(err => console.log(err))
            }

            else {
              res.json({ msg: "your already have account wih RAP. please sign-in to your account using your registered email", status: 4 })
            }

          });
        });
        // email is true but confirm is false
      } else if (user && !user.confirmed) {
        res.json({ msg: "your email ID is not confirmed yet. please wait till admin approves your request or contact RAP admin.", status: 2 })
      }
      // email and confirm both are false
      else {
        res.json({ msg: "please send request to get register.", status: 3 })
      }
    });
  } catch (e) {
    res.json({ msg: "server error. ", status: -1 });
    console.log(e);
  }
});

// @route POST api/users/signin
// @desc Login user and return JWT token
// @access Public
router.post("/signin", (req, res) => {
  // Form validation
  try {
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
        return res.json({ msg: "your email id is not registered to RAP. please raise a request to register or sign-in with the registered email ID. ", status: 0 });
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
          //console.log(res)
          return res
            .status(400)
            .json({ passwordincorrect: "Password incorrect" });
        }
      });
    });

  } catch (e) {
    res.json({ msg: "server error.", status: -1 });
    console.log(e);
  }

});

router.post("/confirm", (req, res) => {
  try {
    User.findOne({ email: req.body.email }).then(user => {
      if (user) {
        // res.json({msg: "here"})
        if (user && !user.confirmed) {
          //res.json({ msg: "here" })
          res.json({ msg: msgs.resend, status: 0 })
        }
        else if (user && user.confirmed) {
          //res.json({ msg: "here" })
          res.json({ msg: "your access request has been approved by the RAP admin. please register with your confirmed email ID.", status: 2 })
        }
      }
      else {
        //res.json({msg: "here"})
        const newUser = new User({
          name: req.body.name,
          email: req.body.email,
          company: req.body.company
        });
        console.log(newUser);

        newUser
          .save()
          .then(sendEmail.email(newUser))
        //  .then(userEmail.emailAck(newUser.email))
          // res.json({msg: "here"})
          .then(() => res.json({ msg: msgs.EmailSent, status: 1 }))
          .catch(err => console.log(err));
      }
    });

  } catch (e) {
    res.json({ msg: "server error. ", status: -1 });
    console.log(e);
  }
});


router.get('/approve/:email/:id', (req, res) => {
  try {
    let { email, id } = req.params;
    //res.json({ msg: email})
    //first update confirm in db, trigger email to user  
    userEmail.emailUser(email)

    User.findByIdAndUpdate(id, { confirmed: true })
      .then(() => res.json({ msg: "your have approved the user successfully" }))
      .catch(err => console.log(err))

  } catch (e) {
    res.json({ msg: "server error. ", status: -1 });
    console.log(e);
  }

});

module.exports = router;

