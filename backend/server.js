// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5000;

// CONFIGURE GMAIL TRANSPORTER
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // false kwa 587
  auth: {
    user: "gilbertnicolaus12@gmail.com", // email yako halali
    pass: "yihg mwjn xxby djeg"         // App Password uliyopewa
  },
  tls: {
    rejectUnauthorized: false // kuzuia certificate errors
  }
});

// ROUTE YA KUTUMA MESSAGE
app.post('/send-message', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: "please fill the required areas" });
  }

  try {
    await transporter.sendMail({
      from: `"Msongori Website" <office@msongorilimited.com>`, // company email
      to: 'office@msongorilimited.com', // company email
      subject: `New Message from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Message: ${message}
      `
    });

    res.json({ success: true, message: "Message imetumwa successfully!" });

  } catch (error) {
    console.error("ERROR SENDING EMAIL:", error);
    res.status(500).json({ success: false, message: "Kuna tatizo la server, jaribu tena" });
  }
});

// START SERVER
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});