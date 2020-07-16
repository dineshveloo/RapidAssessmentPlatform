const nodemailer = require('nodemailer');
const { CLIENT_ORIGIN } = require('../config/info');

const emailUser = function (newUser) {
    console.log(newUser);
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
        "Your access request to Rapid Assessment Platform has been approved by the RAP admin.<br><br>" +
        "Please click the below link to register.<br><br>" +
        `<a href="${CLIENT_ORIGIN}/register">click to register</a><br><br><br>` +
        "--------------------------------------------<br><br>" +
        "This is an auto generted email, please do not reply.<br><br>" +
        "--------------------------------------------<br><br>"
        ;

    let info = transporter.sendMail({
        from: process.env.MAIL_USER,
        to: newUser, // list of receivers
        subject: "Access Request to RAP is Approved", // Subject line
        html: htmlTemplate
    })

}

module.exports = {
    emailUser
}


