var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com", // hostname
    secureConnection: false, // TLS requires secureConnection to be false
    port: 587, // port for secure SMTP
    tls: {
       ciphers:'SSLv3'
    },
    auth: {
        user: 'mymail@outlook.com',
        pass: 'myPassword'
    }
});

var mailOptions = {
  from: 'superpig1999@gmail.com',
  to: 'samuel.pink@outlook.com',
  subject: 'yo',
  text: 'fam!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});