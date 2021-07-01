const nodemailer = require("nodemailer");
const username = process.env.NUXT_USERNAME;
const password = process.env.NUXT_PASSWORD;

export default async (req, res) => {

    const transporter = nodemailer.createTransport({
        service: "hotmail",
        auth: {
            user: username,
            pass: password
        }
    });

  transporter.verify(function(error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages");
    }
  });

  //2. You can configure the object however you want
  const mail = {
    from: req.body.name.first + ' ' + req.body.name.last,
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
