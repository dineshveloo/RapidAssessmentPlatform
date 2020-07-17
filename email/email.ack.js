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
        "Your access request to Rapid Assessment Platform has been forwarded to the RAP admin. Please check your inbox for approval notification with a registration link.<br><br>" +
        // "Please click the below link to register.<br><br>" +
        // `<a href="${CLIENT_ORIGIN}/register">click to register</a><br><br><br>` +
        "--------------------------------------------<br><br>" +
        "This is an auto generted email, please do not reply.<br><br>" +
        "--------------------------------------------<br><br>"
        ;

    let info = transporter.sendMail({
        from: process.env.MAIL_USER,
        to: newUser.email, // list of receivers
        subject: "Acknowledgement for Access Request to RAP", // Subject line
        html: htmlTemplate
    })

}

module.exports = {
    emailAck
}


