require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/admin', require('./routes/adminRoutes'));
app.use('/api/volunteers', require('./routes/volunteerRoutes'));
app.use('/api/beneficiaries', require('./routes/storyRoutes'));
app.use('/api/community', require('./routes/communityRoutes'));
app.use('/api/polls', require('./routes/pollRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
