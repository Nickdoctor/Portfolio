require('dotenv').config({ path: '../.env' });
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Email Sending Route
app.post('/send', async (req, res) => {
    const { name, email, message } = req.body;

    const msg = {
        to: process.env.EMAIL, // Replace with your email address
        from: process.env.EMAIL, // Replace with a verified sender email
        subject: `New Contact Form Submission from ${name}`,
        text: `Message: ${message}\n\nFrom: ${name}\nEmail: ${email}`,
    };

    try {
        await sgMail.send(msg);
        res.status(200).send('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error.response ? error.response.body : error);
        res.status(500).send('Failed to send email');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
