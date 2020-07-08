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
        `<a href="${CLIENT_ORIGIN}/register">click to register</a><br><br><br>` +
        "--------------------------------------------<br><br>" +
        "this is an auto generted email please donot reply<br><br>" +
        "--------------------------------------------<br><br>"
        ;

    let info = transporter.sendMail({
        from: process.env.MAIL_USER,
        to: newUser, // list of receivers
        subject: "Access Request to RAP", // Subject line
        //text: "Hello world?", // plain text body
        html: htmlTemplate
    })

}

module.exports = {
    emailUser
}


