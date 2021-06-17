const express = require('express');

const app = express();

// just temporary get api
app.get('/', (req, res) => {
  res.send('This is API Server');
});

module.exports = app;
