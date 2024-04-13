import nodemailer from "nodemailer";

export const mailer = (mail, sub, txt) => {
  let transporter = nodemailer.createTransport({
    host: "smtp.sendgrid.net",
    port: 465,
    secure: true,
    auth: {
      user: "apikey",
      pass: process.env.API_KEY,
    },
  });

  let mailOptions = {
    from: '"Mohamed Dev" <mohamed.amine.ameur@mohamed-amine-ameur.com>',
    to: mail,
    subject: sub,
    text: txt,
    html: `<p style="color: blue; font-size: 16px;">${txt}</p>`, // HTML body
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message envoyé: %s", info.messageId);
  });
};
