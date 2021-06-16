const express = require('express');
require('dotenv').config();

const app = express();

const port = process.env.API_SERVER_PORT || 8000;

// just temporary get api
app.get('/', (req, res) => {
  res.send(`This is API Server from port ${port}`);
});

app.listen(port, () => {
  console.log(`API server started at port ${port}`);
});
