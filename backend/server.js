const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || '0.0.0.0';
const CORS_ORIGIN = process.env.CORS_ORIGIN;
const SMTP_HOST = process.env.SMTP_HOST || 'smtp.gmail.com';
const SMTP_PORT = Number(process.env.SMTP_PORT || 587);
const SMTP_SECURE = process.env.SMTP_SECURE === 'true';
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;
const MAIL_FROM = process.env.MAIL_FROM || `"Msongori Website" <${SMTP_USER || 'office@msongorilimited.com'}>`;
const MAIL_TO = process.env.MAIL_TO || 'office@msongorilimited.com';
const distPath = path.join(__dirname, '..', 'dist');

if (CORS_ORIGIN) {
  app.use(cors({ origin: CORS_ORIGIN }));
} else {
  app.use(cors());
}

app.use(express.json());

const createTransporter = () => {
  if (!SMTP_USER || !SMTP_PASS) {
    throw new Error('SMTP_USER and SMTP_PASS must be configured');
  }

  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: SMTP_SECURE,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS
    }
  });
};

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.post('/send-message', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: "please fill the required areas" });
  }

  try {
    const transporter = createTransporter();

    await transporter.sendMail({
      from: MAIL_FROM,
      to: MAIL_TO,
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

if (fs.existsSync(distPath)) {
  app.use(express.static(distPath));

  app.get(/.*/, (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
  });
}

app.listen(PORT, HOST, (error) => {
  if (error) {
    console.error('Failed to start server:', error.message);
    process.exit(1);
  }

  console.log(`Server running on http://${HOST}:${PORT}`);
});
