const express = require('express');
require('dotenv').config();

const app = express();

const useRouter = require('./controllers/router');

const port = process.env.API_SERVER_PORT || 8000;

app.use(express.json());

app.use(useRouter);

app.listen(port, () => {
  console.log(`API server started at port ${port}`);
});
