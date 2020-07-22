const nodemailer = require('nodemailer');
//const { CLIENT_ORIGIN } = require('../config/info');

const forgetpass = function (user) {

    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS
        },
    });

    let htmlTemplate = "<br>Dear User,<br><br>" +
        "You have been successfully updated the password to our Rapid Assessment Platform. Please use the same credentials for sign-in.<br><br><br><br><br>" +

        "--------------------------------------------<br><br>" +
        "This is an auto generted email, please do not reply.<br><br>" +
        "--------------------------------------------<br><br>"
        ;

    let info = transporter.sendMail({
        from: process.env.MAIL_USER,
        to: user.email, // list of receivers
        subject: "Successfully reset password to RAP", // Subject line
        html: htmlTemplate
    })

}

module.exports = {
    forgetpass
}

