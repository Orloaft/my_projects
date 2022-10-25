import nodemailer from "nodemailer";

export default function handler(req: any, res: any) {
  function isValidEmail(email: string) {
    return /\S+@\S+\.\S+/.test(email);
  }
  if (isValidEmail(req.body.email)) {
    const transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.USER_PASSWORD,
      },
      secure: true,
    });
    const mailData = {
      from: process.env.USER_EMAIL,
      to: "alexorlow17@gmail.com",
      subject: `Message From ${req.body.email}`,
      text: `subject: ${req.body.subject}
        message: ${req.body.message}
      `,
    };
    transporter.sendMail(mailData, (err, data) => {
      if (err) {
        console.log(err);
        res.status(500).json({ message: "Something went wrong." });
      } else {
        res
          .status(200)
          .json({ message: "Email successfully sent to recipient!" });
      }
    });
  } else {
    res.status(200).json({ message: "Please use a valid email" });
  }
}
