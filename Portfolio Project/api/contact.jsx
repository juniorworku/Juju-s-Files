const nodemailer = require("nodemailer");
const emailPassword = process.env.EMAIL_PASSWORD;

export default async (req, res) => {
  const { firstName, lastName, email, message } = req.body;

  if (req.method === "POST") {
    try {
      const transporter = createTransport({
        service: "Gmail",
        auth: {
          user: "juniorworku@gmail.com",
          pass: emailPassword,
        },
      });

      const mailOptions = {
        from: email,
        to: "juniorworku@gmail.com",
        text: `
        FirstName: ${firstName},
        LastName: ${lastName},
        Email: ${email}
        Message: ${message}
        `,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error(error);
          res.status(500).json({ message: "Error sending email" });
        } else {
          console.log("Email sent: " + info.response);
          res.status(200).json({ message: "Email sent successfully" });
        }
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error processing the form" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
};
