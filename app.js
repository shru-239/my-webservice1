const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const usersRouter = require('./routes/users');

const app = express();
const port = 3001;

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'view'))); // To serve static files

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI ||'mongodb://localhost:27017/webserviceDb', { useNewUrlParser: true, useUnifiedTopology: true });

// Routes
app.use('/users', usersRouter);

// Serve the index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'view','index.html'));
});

// Serve the user list HTML file
app.get('/user-list', (req, res) => {
  res.sendFile(path.join(__dirname,'view', 'user-list.html'));
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

module.exports = app;
