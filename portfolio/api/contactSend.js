const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({message: 'Error, API not post, expecting post'});
    }

    const {name, email, message} = req.body;
    const siteURL = 'https://portfolio-lac-delta-12.vercel.app/'

    const msg = {
        to: process.env.EMAIL,
        from: process.env.EMAIL,
        subject: `New Contact Form Submission from ${name}`, 
        text: `Message: ${message}\n\nFrom: ${name}\nEmail: ${email}\n From Site: ${siteURL}`, 
    };
    try {
        await sgMail.send(msg);
        res.status(200).json({ message: 'Email sent successfully' });
      } catch (error) {
        console.error('Error sending email:', error.response ? error.response.body : error);
        res.status(500).json({ message: 'Failed to send email' });
      }
    }

