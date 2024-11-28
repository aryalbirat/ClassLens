// server.js

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const multer = require('multer');
const multerGridfsStorage = require('multer-gridfs-storage'); // Correct import
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Middleware
app.use(cors({ origin: 'http://localhost:3000' }));  // Allow frontend requests from port 3000
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB connection
const mongoURI = 'mongodb+srv://regmirasad53:isnny54ad.@cluster0.zrfyr.mongodb.net/signifydb?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log('MongoDB connection error:', err));

const conn = mongoose.connection;

let gfs;
conn.once('open', () => {
    console.log('MongoDB connected');
    gfs = new mongoose.mongo.GridFSBucket(conn.db, { bucketName: 'uploads' });
});

// Multer configuration with GridFSStorage
const storage = multerGridfsStorage({
    url: mongoURI, // Use mongoURI directly here
    file: (req, file) => {
        return {
            bucketName: 'uploads', // MongoDB bucket name
            filename: `${Date.now()}-${file.originalname}` // Custom file name
        };
    }
});

// Upload middleware with multer
const upload = multer({ storage }); // Using the GridFS storage directly

// Upload route
app.post('/api/upload', upload.single('photo'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
    }
    console.log('File uploaded successfully:', req.file);
    res.json({ message: 'Image uploaded successfully', file: req.file });
});

// API route to get image
app.get('/api/images/:filename', async (req, res) => {
    const { filename } = req.params;
    const file = await gfs.find({ filename }).toArray();
    if (!file || file.length === 0) {
        return res.status(404).json({ error: 'File not found' });
    }
    gfs.openDownloadStreamByName(filename).pipe(res);
});

// Simulate attentiveness report generation
app.post('/api/generate-report', (req, res) => {
    const { filename } = req.body;
    const report = {
        attentiveness: '85%',
        actions: [
            { name: 'Raising hand', percentage: '50%' },
            { name: 'Reading', percentage: '20%' },
            { name: 'Writing', percentage: '15%' },
            { name: 'Listening', percentage: '15%' },
        ],
    };
    res.json({ filename, report });
});

// Serve React frontend
app.use(express.static(path.join(__dirname, 'build')));

// Fallback route to serve React app for unmatched routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
