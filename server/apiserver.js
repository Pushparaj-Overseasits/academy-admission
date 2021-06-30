const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const cookieparser = require('cookie-parser');
const admission = require('./routers/admission');
const userMaster = require('./routers/userMaster');
const course = require('./routers/course');
const semester = require('./routers/semester');
const session = require('./routers/session');
const courseSession = require('./routers/courseAndSession');

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
app.use(cookieparser());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});

app.use('/admission', admission);
app.use('/admin/user-master', userMaster);
app.use('/admin/course', course);
app.use('/admin/semester', semester);
app.use('/admin/session', session);
app.use('/admin/course-session', courseSession);

app.listen(port, () => {
  console.log(`API server started at port ${port}`);
});
