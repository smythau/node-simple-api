const express = require('express');
const http = require('http');
const fs = require('fs');

const app = express();
const port = 8080;

// Middleware to parse JSON requests
app.use(express.json());

// Route handler for /api/hello
app.get('/api/hello', (req, res) => {
    console.log(`API triggered from:${req.ip}`)
  const response = {
    message: 'Hello World, again!'
  };
  res.json(response);
});

// Set up HTTPS options
const options = {
  //key: fs.readFileSync('path/to/your/private/key.pem'),
  //cert: fs.readFileSync('path/to/your/certificate.pem')
};

// Start the HTTPS server
http.createServer(options, app).listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
