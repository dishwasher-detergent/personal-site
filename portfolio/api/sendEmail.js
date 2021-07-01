const nodemailer = require("nodemailer");
const username = process.env.NUXT_USERNAME;
const password = process.env.NUXT_PASSWORD;

export default async (req, res) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: username,
          pass: password // naturally, replace both with your real credentials or an application-specific password
        }
      });

  const mail = {
    from: "kennethtylerbass@gmail.com",
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
