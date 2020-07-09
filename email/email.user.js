const nodemailer = require('nodemailer');
const { CLIENT_ORIGIN } = require('../config/info');

const emailUser = function (newUser) {
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
        "your access request to RAP has been approved by the admin.<br><br>"
        "please click the below link to regiser.<br><br>"
        `<a href="${CLIENT_ORIGIN}/register">click to register</a><br><br><br>` +
        "--------------------------------------------<br><br>" +
        "this is an auto generted email, please do not reply.<br><br>" +
        "--------------------------------------------<br><br>"
        ;

    let info = transporter.sendMail({
        from: process.env.MAIL_USER,
        to: newUser, // list of receivers
        subject: "Access to RAP Approved", // Subject line
        html: htmlTemplate
    })

}

module.exports = {
    emailUser
}


