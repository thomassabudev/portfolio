const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
// For now, we will use a local URI or a placeholder. User needs to provide their URI in .env
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio';

mongoose.connect(MONGODB_URI)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// Project Schema
const projectSchema = new mongoose.Schema({
    title: String,
    description: String,
    tech: [String],
    github: String,
    image: String // Optional: for future use
});

const Project = mongoose.model('Project', projectSchema);

// Routes
app.get('/', (req, res) => {
    res.send('API is running...');
});

// Projects Route - Fetch from MongoDB
app.get('/api/projects', async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (err) {
        console.error("Error fetching projects:", err);
        res.status(500).json({ message: "Server Error" });
    }
});

const nodemailer = require('nodemailer');

// ... (previous code)

app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;
    console.log(`Contact Request: ${name}, ${email}, ${message}`);

    // Create a transporter
    // User must provide valid credentials in .env
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        },
        // Fix for Cloud Timeouts: Force IPv4
        family: 4,
        // Enable detailed logging
        logger: true,
        debug: true
    });

    const mailOptions = {
        from: email, // Sender address (from the form)
        to: 'thomassabu.dev@gmail.com', // Receiver address
        subject: `Portfolio Contact from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        replyTo: email
    };

    try {
        await transporter.sendMail(mailOptions);
        res.json({ success: true, message: "Email sent successfully!" });
    } catch (error) {
        console.error("Email error:", error);
        res.status(500).json({ success: false, message: "Failed to send email." });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
