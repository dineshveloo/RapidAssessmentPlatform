const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
//const passport = require("passport");
const capturemsgs = require('../../captureProcess/capture.msgs');
const msgs = require('../../email/email.msgs');
const sendEmail = require('../../email/email.send');
const userEmail = require('../../email/email.user');
const userAck = require('../../email/email.ack');
const userRegister = require('../../email/email.register');
const userForgetPassword = require('../../email/email.forget');
const { ADMIN, ADMIN_PASS } = require('../../config/info');
// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

// Load User model
const User = require("../../models/User");
const Role = require("../../models/Roles");
const RoleAssign = require("../../models/RolesAssigned");
const CompanyAssign = require("../../models/CompanyAssign");
const CompanyUser = require("../../models/CompanyUser");
//Load CaptureProcessP1Model model
const CaptureProcessP1Model = require("../../models/CaptureProcessP1Model");

// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/register", (req, res) => {
  // Form validation
  //console.log("we are in regiser api");
  try {

    User.findOne({ email: req.body.email }).then(user => {
      if (user && user.confirmed) {
        let pass = req.body.password;
        //console.log(user);
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(pass, salt, (err, hash) => {
            if (err) throw err;
            //res.json(res);
            if (!user.password) {
              //pass = hash;
              User.findByIdAndUpdate(user.id, { password: hash })

                .then(userRegister.emailRegister(user))
                .then(() => {
                  const newRole = new RoleAssign({
                    emailid: req.body.email,
                    roleid: "001"
                  });
                  // .then(())
                  newRole
                    .save()
                    .then(() => res.json({ msg: "success & default roles are assigned", status: 1 }))
                  //res.json({ msg: 'success', status: 1 })
                }
                )
                .catch(err => console.log(err))
            }
            else {
              res.json({ msg: "You are an already registered user. Please sign-into RAP using registered Email ID.", status: 4 })
            }
          });
        });

        // email is true but confirm is false
      }
      else if (user && !user.confirmed) {
        res.json({ msg: "Your access request is not yet confirmed by the RAP Admin. Please contact <xyz@mphasis.com> for approval.", status: 2 })
      }
      // email and confirm both are false
      else {
        res.json({ msg: "Please use the approved email ID for your registration. Else, please raise a new access request with this email ID.", status: 3 })
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
  //console.log("we are in signin api");

  try {
    const email = req.body.email;
    const password = req.body.password;
    //console.log(email,password,ADMIN ,ADMIN_PASS)
    if (email === ADMIN && password === ADMIN_PASS) {
      // User matched
      // Create JWT Payload
      const payload = {
        id: '001001',
        name: ADMIN
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
            role: 'admin',
            token: "Bearer " + token
          });
        }
      );

    } else {
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
                  role: 'finance',
                  token: "Bearer " + token
                });
              }
            );
          } else {
            return res
              .json({ msg: "Password incorrect", status: 3 });
          }
        });
      });
    }
  } catch (e) {
    res.json({ msg: "server error.", status: -1 });
    console.log(e);
  }

});
// @route POST api/users/confirm
router.post("/confirm", (req, res) => {

  //console.log("we are in confirm api");
  try {
    User.findOne({ email: req.body.email }).then(user => {
      if (user) {
        ////res.json({ msg: user.confirmed })

        if (user && !user.confirmed) {
          //res.json({ msg: "here" })
          res.json({ msg: msgs.resend, status: 0 })
        }

        else if (user && user.confirmed) {
          //res.json({ msg: "here" })
          if (user.password) {
            res.json({ msg: "you have already registered with us.", status: 3 })

          } else {
            res.json({ msg: "your access request has been approved by the RAP admin. please register with your confirmed email ID.", status: 2 })

          }
        }
      }
      else {
        //res.json({msg: "here"})
        const newUser = new User({
          name: req.body.name,
          email: req.body.email,
          company: req.body.company
        });
        //console.log(newUser);

        newUser
          .save()
          .then(sendEmail.email(newUser))
          .then(userAck.emailAck(newUser))
          .then(() =>

            // {
            // const compUser = new CompanyAssign({
            //   email: req.body.email,
            //   comapany_code: req.body.company
            // })
            // console.log(compUser);
            // compUser
            // .save()
            // .then(() =>
            res.json({ msg: msgs.EmailSent, status: 1 }))

          .catch(err => console.log(err));
      }
    });

  } catch (e) {
    res.json({ msg: "server error. ", status: -1 });
    console.log(e);
  }
});

// @route POST api/users/capture1
router.post("/capture1", (req, res) => {
  try {
    const captureProcess = new CaptureProcessP1Model({
      clientName: req.body.clientName,
      businessUnit: req.body.businessUnit,
      subBusinessUnit: req.body.subBusinessUnit,
      processName: req.body.processName,
      processDescription: req.body.processDescription,
      list: req.body.list
    });
    //console.log(captureProcess);
    captureProcess
      .save()
      .then(user => { res.json({ msg: capturemsgs.SuccessfulCapture, status: 0, names: user }) })
      .catch(err => console.log(err))

  } catch (e) {
    res.json({ msg: "server error. ", status: -1 });
    console.log(e);
  }



});
//   User.findByIdAndUpdate(user.id, { password: hash })
router.post("/captureupdate", (req, res) => {
  try {
    const captureUpdate = {
      // id: req.body.id,
      clientName: req.body.clientName,
      businessUnit: req.body.businessUnit,
      subBusinessUnit: req.body.subBusinessUnit,
      processName: req.body.processName,
      processDescription: req.body.processDescription,
      list: req.body.list
    };

   
    CaptureProcessP1Model.findByIdAndUpdate(req.body.processId, captureUpdate)
      .then(user => { res.json({ msg: "successfully updated", status: 1}) })
    // console.log(captureProcess);
    // captureUpdate
    //   .save()
    //   
    //   .catch(err => console.log(err))

  } catch (e) {
    res.json({ msg: "server error. ", status: -1 });
    console.log(e);
  }



});


//@route GET api/users/viewprocessdata
router.get('/viewprocessdata', (req, res) => {
  CaptureProcessP1Model.find({}).then(vdata => {
    if (vdata) {
      res.json(vdata)
    } else {
      res.send('Process not found!')
    }

  })
    .catch(err => {
      res.send('error: ' + err)
    })

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
// @route POST api/users/resetpass
router.post("/resetpass", (req, res) => {
  // Form validation
  // console.log("we are in rese pass");
  try {
    User.findOne({ email: req.body.email }).then(user => {
      if (user && user.confirmed) {
        let pass = req.body.password;
        //console.log("we are in rese pass");

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(pass, salt, (err, hash) => {
            if (err) throw err;
            //res.json(res);
            User.findByIdAndUpdate(user.id, { password: hash })
              .then(userForgetPassword.forgetpass(user))
              .then(() => res.json({ msg: 'successfully updated password', status: 0 }))
              .catch(err => console.log(err))
          });
        });
      }
    });
  } catch (e) {
    res.json({ msg: "server error. ", status: -1 });
    console.log(e);
  }
});

router.get('/userlist', (req, res) => {
  try {
    const query = { confirmed: true }
    User.find(query)
      .then(user => { res.json({ msg: 'list of confimed users', status: 0, rows: user }) })
      .catch(err => console.log(err))

  } catch (e) {
    res.json({ msg: "server error. ", status: -1 });
    console.log(e);
  }
});

router.get('/getallroles', (req, res) => {
  try {
    Role.find()
      .then(user => { res.json({ msg: 'list of roles', status: 0, role: user }) })
      .catch(err => console.log(err))

  } catch (e) {
    res.json({ msg: "server error. ", status: -1 });
    console.log(e);
  }
});

router.post("/assignroles", (req, res) => {
  // Form validation
  //console.log('i m in assigned roles');
  try {
    RoleAssign.findOne({ email: req.body.email }).then(user => {
      if (user) {
        const newRole = new RoleAssign({
          emailid: req.body.email,
          roleid: req.body.roleid
        });
        //console.log(newRole);
        newRole
          .save()
          .then(() => res.json({ msg: "roles are assigned successfully", status: 0 }))
          .catch(err => console.log(err));
      } else {
        res.json({ msg: "already assigned", status: 1 })
      }

    })

  } catch (e) {
    res.json({ msg: "server error. ", status: -1 });
    console.log(e);
  }

});

router.get('/companynames', (req, res) => {
  //console.log("i m heree in company api");
  try {
    CompanyUser.find()
      .then(user => { res.json({ msg: 'list of company names', status: 0, names: user }) })
      .catch(err => console.log(err))

  } catch (e) {
    res.json({ msg: "server error. ", status: -1 });
    console.log(e);
  }
});

router.get('/emailExist/:email', (req, res) => {
  //console.log("i m heree in company api");
  try {
    let { email } = req.params;
    User.findOne({ 'email': email })
      .then(user => {
        if (user) {

          console.log("enering");
          res.json({ msg: 'email exist', status: 1 })
        } else {
          res.json({ msg: 'not exist', status: 0 })
        }
      })
      .catch(err => console.log(err))

  } catch (e) {
    res.json({ msg: "server error. ", status: -1 });
    console.log(e);
  }
});


module.exports = router;


