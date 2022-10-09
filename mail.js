var nodemailer = require('nodemailer');
require('dotenv').config()

//console.log(process.env) // remove this after you've confirmed it is working

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.U_EMAIL,
    pass: process.env.P_EMAIL
  }
});

// var transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'jermvivatkulkris@gmail.com',
//     pass: 'people-123'
//   }
// });


var mailOptions = {
  from: 'people12337@gmail.com',
  to: 'people12337@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });