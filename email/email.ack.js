const nodemailer = require('nodemailer');
//const { CLIENT_ORIGIN } = require('../config/info');

const emailAck = function (newUser) {
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
        "Your access request to RAP has been forwarded to the admin. Please wait unill you recieve approved email with link provided.<br><br>" +
        // "Please click the below link to register.<br><br>" +
        // `<a href="${CLIENT_ORIGIN}/register">click to register</a><br><br><br>` +
        "--------------------------------------------<br><br>" +
        "This is an auto generted email, please do not reply.<br><br>" +
        "--------------------------------------------<br><br>"
        ;

    let info = transporter.sendMail({
        from: process.env.MAIL_USER,
        to: newUser, // list of receivers
        subject: "Acknowledgement for Request to RAP", // Subject line
        html: htmlTemplate
    })

}

module.exports = {
    emailAck
}


