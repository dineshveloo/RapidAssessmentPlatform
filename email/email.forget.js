
const nodemailer = require('nodemailer');
const { CLIENT_ORIGIN } = require('../config/info');

const forgetpass = function (userEmail) {

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
        "Please reset the password with the below link provided.<br><br>" +
        `<a href="${CLIENT_ORIGIN}/resetpassword/${userEmail}">click to register</a><br><br><br>` +
        "--------------------------------------------<br><br>" +
        "This is an auto generted email, please do not reply.<br><br>" +
        "--------------------------------------------<br><br>"
        ;

    let info = transporter.sendMail({
        from: process.env.MAIL_USER,
        to: userEmail, // list of receivers
        subject: "Acknowledgement for Request to RAP", // Subject line
        html: htmlTemplate
    })

}

module.exports = {
    forgetpass
}


