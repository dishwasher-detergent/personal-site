const nodemailer = require("nodemailer");
const username = process.env.NUXT_USERNAME;
const password = process.env.NUXT_PASSWORD;

export default async (req, res) => {

    const transporter = nodemailer.createTransport({
        host: 'smtp.live.com', // hostname
        secureConnection: false, // use SSL
        port: 587, // port for secure SMTP
        auth: {
            user: username,
            pass: password
        },
        tls:{
            ciphers:'SSLv3'
        }
    });

  //2. You can configure the object however you want
  const mail = {
    from: 'kenny.bass@outlook.com',
    to: 'kenny_bass@outlook.com',
    subject: req.body.subject,
    text: `${req.body.name.first + ' ' + req.body.name.last} <${req.body.email}> \n${req.body.message}`
  };

  //3.
  transporter.sendMail(mail, (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send("Something went wrong.");
    } else {
      res.status(200).send("Email successfully sent to recipient!");
    }
  });
};
