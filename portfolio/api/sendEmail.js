const nodemailer = require("nodemailer");
const username = process.env.NUXT_USERNAME;
const password = process.env.NUXT_PASSWORD;

export default async (req, res) => {
    const transporter = nodemailer.createTransport({
        host: 'smtp.office365.com',
        port: 587,
        secure: false,
        auth: {
            user: username,
            pass: password
        },
        requireTLS: true,
        tls: {
            ciphers: 'SSLv3'
        }
    });

  const mail = {
    from: "kenny.bass@outlook.com",
    to: "kenny_bass@outlook.com",
    subject: req.body.subject,
    text: `${req.body.name.first + " " + req.body.name.last} <${
      req.body.email
    }> \n${req.body.message}`
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send("Something went wrong.");
    } else {
      res.status(200).send("Email successfully sent to recipient!");
    }
  });
};
