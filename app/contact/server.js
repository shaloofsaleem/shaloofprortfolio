const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Email Sending Endpoint
app.post('/api/send-email', async (req, res) => {
  const { firstName, lastName, email, phone, service, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'Gmail', // Adjust to your email provider
    auth: {
      user: process.env.EMAIL_USER, // Your email
      pass: process.env.EMAIL_PASS, // App password or email password
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER, // Replace with your email
    subject: `New Inquiry: ${service}`,
    text: `
      Name: ${firstName} ${lastName}
      Email: ${email}
      Phone: ${phone}
      Service: ${service}
      Message: ${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Failed to send email.' });
  }
});

// Start the Server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
