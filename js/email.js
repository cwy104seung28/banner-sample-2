const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  auth: {
    user: "c3207054@gmail.com",
    pass: "qfaqlyuxtyyrqqpc",
  },
});

transporter
  .sendMail({
    from: "c3207054@gmail.com",
    to: "c3207054@gmail.com",
    subject: "123",
    html: "123",
  })
  .then((info) => {
    console.log({ info });
  })
  .catch(console.error);
