const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const router = require('./routers/router');

const app = express();

const port = process.env.API_SERVER_PORT || 8000;

const DB = process.env.MONGODB_URL;

mongoose.connect(DB, {
  useCreateIndex: true,
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false,
}).then(() => {
  console.log(`Connected to MongoDB at ${DB}`);
}).catch((error) => {
  console.log(`Error: ${error}`);
});

app.use(express.json());

app.use('/admin', router);

app.listen(port, () => {
  console.log(`API server started at port ${port}`);
});
