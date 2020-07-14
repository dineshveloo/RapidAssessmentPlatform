const nodemailer = require('nodemailer');
const { CLIENT_ORIGIN_NODE } = require('../config/info');

const email = function (newUser) {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS
    },
  });

  let htmlTemplate = "<br>Dear Admin,<br><br>" +
    "user with below details has requested to access RAP<br> <br>" +
    "userName: " + newUser.name + "<br>" +
    "email: <span>" + newUser.email + "</span><br>" +
    "company: " + newUser.company + "<br><br>" +
    "please click the below link to provide access <br><br>" +
    `<a href="${CLIENT_ORIGIN_NODE}/api/users/approve/${newUser.email}/${newUser._id}">click to appove</a><br><br><br>` +
    "--------------------------------------------<br><br>" +
    "this is an auto generted email, please do not reply.<br><br>" +
    "--------------------------------------------<br><br>"
    ;

  let info = transporter.sendMail({
    from: process.env.MAIL_USER,
    // to: "anurao96@gmail.com", // list of receivers
    to: "rapmphasis@gmail.com",
    subject: "Access Request to RAP", // Subject line
    html: htmlTemplate
  })
}

module.exports = {
  email
}

