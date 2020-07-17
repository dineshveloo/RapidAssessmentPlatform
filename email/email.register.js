const nodemailer = require('nodemailer');
//const { CLIENT_ORIGIN } = require('../config/info');

const emailRegister = function (newUser) {
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
        "You have successfully registered to our Rapid Assessment Platform. Please use your registered email ID for signing-in. <br><br><br>" +
       
        "--------------------------------------------<br><br>" +
        "This is an auto generted email, please do not reply.<br><br>" +
        "--------------------------------------------<br><br>"
        ;

    let info = transporter.sendMail({
        from: process.env.MAIL_USER,
        to: newUser.email, // list of receivers
        subject: "Successfully Registered to RAP", // Subject line
        html: htmlTemplate
    })

}

module.exports = {
    emailRegister
}


