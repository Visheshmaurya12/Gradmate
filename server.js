require('dotenv').config();
const express = require('express');
const cors = require('cors');
const rateLimiter = require('./middleware/rateLimiter');
const connectDB = require('./config/db');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(rateLimiter);

// Connect DB
connectDB();

// Routes
app.use('/auth', require('./routes/auth'));
app.use('/mentors', require('./routes/mentors'));
app.use('/sessions', require('./routes/sessions'));
app.use('/feedback', require('./routes/feedback'));
app.use('/web3', require('./routes/web3'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
